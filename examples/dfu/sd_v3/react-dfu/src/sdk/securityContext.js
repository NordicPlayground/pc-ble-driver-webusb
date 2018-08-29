let currentContext = undefined;

function setSecurityContext(context) {
    currentContext = context;
}

function releaseSecurityContext() {
    currentContext = undefined;
}
function createSecurityContext(connHandle, ppGapAppKeyset) {
    
}
