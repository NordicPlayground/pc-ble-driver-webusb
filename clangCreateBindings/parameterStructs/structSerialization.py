import json
class StructData:
    def __init__(self, dataType):
        self.members = []
        self.dataType = dataType
        self.unionName = ""
    def addChild(self, c):
        self.members.append(c)
    def generateNew(self):
        return \
"""EMSCRIPTEN_KEEPALIVE
{dataType} *{dataType}_NEW()
{{
    return ({dataType}*)(malloc(sizeof({dataType})));
}}
""".format(dataType=self.dataType)

    def generateNewJs(self):
        return "Module.ccall('{dataType}_NEW', 'number', [], [])".format(dataType=self.dataType)

    def generateDelete(self):
        return \
"""EMSCRIPTEN_KEEPALIVE
void {dataType}_DELETE({dataType} *structData)
{{
    free(structData);
}}
""".format(dataType=self.dataType)

    def generateDeleteJs(self):
        return "Module.ccall('{dataType}_DELETE', null, ['number'], [this._EmscriptenInternalData])".format(dataType=self.dataType)

    def generateSizeof(self):
        return \
"""EMSCRIPTEN_KEEPALIVE
size_t {dataType}_SIZEOF({dataType} *structData)
{{
    return sizeof(structData);
}}
""".format(dataType=self.dataType)

    def generateSizeofJs(self):
        return "Module.ccall('{dataType}_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])".format(dataType=self.dataType)

    def serialize(self):
        cppCode = ""
        cppCode += self.generateNew()
        cppCode += self.generateDelete()
        cppCode += self.generateSizeof()
        jsStruct = {}

        for c in self.members:
            jsStruct[c.name] = {}
            for cpp, js, type in c.serialize(self.unionName):
                cppCode += cpp
                jsStruct[c.name][type] = js

        jsEmscriptenFuncs = ""
        for member in jsStruct:
            funcs = []
            for submember in jsStruct[member]:
                funcs.append("{}: {}".format(submember, jsStruct[member][submember]))
            jsEmscriptenFuncs += "        this.{member} = {{{funcs}}}\n".format(member=member, funcs=(", ").join(funcs))

        jsCode = \
"""class {dataType} {{
    constructor(address){{
        if(address) {{
            this._EmscriptenInternalData = address;
        }} else {{
            this._EmscriptenInternalData = {newCode};
        }}

{structMembers}    }}
    delete() {{
        {deleteCode};
        this._EmscriptenInternalData = undefined;
    }}
    sizeof() {{
        return {sizeofCode};
    }}
    _getInternal() {{
        return this._EmscriptenInternalData;
    }}
}}
""".format(newCode=self.generateNewJs(), deleteCode=self.generateDeleteJs(), structMembers=jsEmscriptenFuncs, dataType=self.dataType, sizeofCode=self.generateSizeofJs())
        return cppCode, jsCode




class StructChild:
    def __init__(self, parentType, datatype, name, isPointer, isArray, isBitfield):
        self.parentType = parentType
        self.dataType = datatype
        self.name = name
        self.isPointer = isPointer
        self.isArray = isArray
        self.isBitfield = isBitfield

    def generateSetter(self):
        return \
"""EMSCRIPTEN_KEEPALIVE
void {parentType}_SET_{name}({parentType} *structData, {dataType} {inPointer}data)
{{
    structData->{unionName}{name} = data;
}}
""".format(
parentType=self.parentType,
name=self.name,
dataType=self.dataType,
inPointer="*"*self.isPointer,
unionName=self.unionName)

    def generateSetterJs(self):
        return \
"""(val) => Module.ccall('{parentType}_SET_{name}', null, ['number', 'number'], [this._EmscriptenInternalData, val])""".format(
parentType=self.parentType,
name=self.name)

    def generateGetter(self, retAddr):
        return \
"""EMSCRIPTEN_KEEPALIVE
{dataType} {inPointer}{parentType}_GET_{addrof}{name}({parentType} *structData)
{{
    return {shouldReturnAddr}structData->{unionName}{name}{shouldBeIndexed};
}}
""".format(
parentType=self.parentType,
name=self.name,
dataType=self.dataType,
inPointer="*"*((self.isPointer) + retAddr),
shouldReturnAddr="&"*retAddr,
addrof="ADDRESSOF_"*retAddr,
shouldBeIndexed="[0]"*self.isArray,
unionName=self.unionName)

    def generateGetterJs(self, retAddr):
        return \
"""() => Module.ccall('{parentType}_GET_{addrof}{name}', 'number', ['number'], [this._EmscriptenInternalData])""".format(
parentType=self.parentType,
name=self.name,
addrof="ADDRESSOF_"*retAddr)

    def generateLength(self):
        return \
"""EMSCRIPTEN_KEEPALIVE
size_t {parentType}_LENGTH_{name}({parentType} *structData)
{{
    return sizeof(structData->{unionName}{name})/sizeof(structData->{name}[0]);
}}
""".format(
parentType=self.parentType,
name=self.name,
unionName=self.unionName)

    def generateLengthJs(self):
        return \
"""() => Module.ccall('{parentType}_LENGTH_{name}', 'number', ['number'], [this._EmscriptenInternalData])""".format(
parentType=self.parentType,
name=self.name)

    def serialize(self, unionName):
        if self.insideUnion:
            self.unionName = unionName
        else:
            self.unionName = ""
        if self.isArray:
            if not self.isBitfield and not self.isConst:
                yield self.generateGetter(True), self.generateGetterJs(True), "GETADDR"
                yield self.generateLength(), self.generateLengthJs(), "LENGTH"
        else:
            yield self.generateSetter(), self.generateSetterJs(), "SET"
            if not self.isConst or not self.isPointer:
                yield self.generateGetter(False), self.generateGetterJs(False), "GET"
            if not self.isBitfield and not self.isConst:
                yield self.generateGetter(True), self.generateGetterJs(True), "GETADDR"
