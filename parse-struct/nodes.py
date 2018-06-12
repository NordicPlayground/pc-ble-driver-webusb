structs = {}
primitiveTypes = ['uint8_t', 'uint16_t', 'uint32_t', 'int8_t', 'int16_t', 'int32_t']


class StructType:
    """
        A struct type as defined in C
    """
    def __init__(self, type):
        self.type = type
        self.fields = []
        self.union = []
        self.unionName = "evt"
        self.size = None

    def addField(self, type, argname, fieldSize):
        self.fields.append((type, argname, fieldSize))

    def addUnionField(self, type, argname, fieldSize):
        self.union.append((type, argname, fieldSize))

class StructEmbedding:
    """
        Embedded path to struct field for function generation
    """
    def __init__(self, accessType, path, rootType, returnType):
        self.accessType = accessType
        self.path = path
        self.rootType = rootType
        self.returnType = returnType

        self.pathstr=""

        self.arrayType = False
        self.pointerType = False
        self.structPointer = False

        pathList = [None]*(len(self.accessType)+len(self.path))
        pathList[::2] = self.accessType
        pathList[1::2] = self.path
        self.pathstr = "".join(pathList)

    def __hash__(self):
        return hash(self.pathstr)
    def __eq__(self, other):
        return self.pathstr == other.pathstr
    def __str__(self):
        return self.pathstr


structEmbeddings = set()

def recursiveStructParser(parentStruct, path, rootType, accessType):
    """
        @Input:
            parentStruct: StructType object for struct with fields to parse_files
            path: Current path in search
            rootType: Struct type that is being parsed/argument in to function
            accessType: List of field access operators for struct hierarchy("." or "->")
        Adds path to struct field-functions in structEmbeddings set.
    """
    for field in parentStruct.fields:
        accessTypeCopy = [e for e in accessType]

        returnType = field[0]
        embedding = StructEmbedding(accessTypeCopy, path+[field[1]], rootType, returnType)

        if field[2] != -1: # Field[2] stores the size of an array, where -1 is no array, and 0 is a raw pointer
            embedding.pointerType = True
        if field[2] > 0: # Only use array indexing for struct types
            embedding.ArrayType = True


        structEmbeddings.add(embedding)

        if field[0] not in primitiveTypes:
            embedding.structPointer = True # Return pointers to struct types

            childStruct = structs[field[0]]
            if(field[2] > 0):
                recursiveStructParser(childStruct, [], field[0], ["->"])
            else:
                if field[2] == 0:
                    accessTypeNext = accessTypeCopy + ["->"]
                else:
                    accessTypeNext = accessTypeCopy + ["."]
                recursiveStructParser(childStruct, path + [field[1]], rootType, accessTypeNext)

    for field in parentStruct.union:
        accessTypeCopy = [e for e in accessType]
        accessTypeCopy.append(".") # Union to field access
        returnType = field[0]

        embedding = StructEmbedding(accessTypeCopy, path+[parentStruct.unionName, field[1]], rootType, returnType)
        structEmbeddings.add(embedding)
        if field[2] != -1: # Field[2] stores the size of an array, where -1 is no array, and 0 is a raw pointer
            embedding.pointerType = True
        if field[2] > 0: # Only use array indexing for struct types
            embedding.ArrayType = True

        if field[0] not in primitiveTypes:
            embedding.structPointer = True # Return pointers to struct types
            childStruct = structs[field[0]]

            if(field[2] != -1):
                recursiveStructParser(childStruct, [], field[0], ["->"])
            else:

                if field[2] == 0:
                    accessTypeNext = accessTypeCopy + ["->"]
                else:
                    accessTypeNext = accessTypeCopy + ["."]
                recursiveStructParser(childStruct, path + [parentStruct.unionName, field[1]], rootType, accessTypeNext)
