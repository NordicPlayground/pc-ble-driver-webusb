class ExitCriterias {
    constructor() {
        this.ioResourceError = false;
        this.close = false;
    }

    reset() {
        this.ioResourceError = false;
        this.close = false;
    }
}

class StartExitCriterias extends ExitCriterias {
    constructor() {
        super();
        this.isOpened = false;
    }

    isFullfilled() {
        return (this.isOpened || this.ioResourceError);
    }

    reset() {
        super.reset();
        this.isOpened = false;
    }
}

class UninitializedExitCriterias extends ExitCriterias {
    constructor() {
        super();
        this.syncSent = false;
        this.syncRspReceived = false;
    }

    isFullfilled() {
        return (this.syncSent && this.syncRspReceived) || this.ioResourceError || this.close;
    }

    reset() {
        super.reset();
        this.syncSent = false;
        this.syncRspReceived = false;
    }
}

class InitializedExitCriterias extends ExitCriterias {
    constructor() {
        super();
        this.syncConfigSent = false;
        this.syncConfigRspReceived = false;
    }

    isFullfilled() {
        return this.ioResourceError || this.close || (this.syncConfigSent && this.syncConfigRspReceived);
    }

    reset() {
        super.reset();
        this.syncConfigSent = false;
        this.syncConfigRspReceived = false;
    }
}

class ActiveExitCriterias extends ExitCriterias {
    constructor() {
        super();
        this.irrecoverableSyncError = false;
        this.syncReceived = false;
    }

    isFullfilled() {
        return this.ioResourceError || this.syncReceived || this.close || this.irrecoverableSyncError;
    }
    reset() {
        super.reset();
        this.irrecoverableSyncError = false;
        this.syncReceived = false;
        this.close = false;
    }
}

class ResetExitCriterias extends ExitCriterias {
    constructor() {
        super();
        this.resetSent = false;
    }

    isFullfilled() {
        return this.ioResourceError || this.close || this.resetSent;
    }

    reset() {
        super.reset();
        this.resetSent = false;
    }
}
