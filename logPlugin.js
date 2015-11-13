var LogPlugin = function() {
    this.fileLogger = '';
    this.msgLogger = '';
    this.level = '';
};

LogPlugin.prototype.fatal = function(msg) {
    if (this.fileLogger) {
        this.fileLogger.fatal(msg); }

    if (this.msgLogger && this.level >= this.logLevels.fatal) {
        this.msgLogger.addLogEntry(msg); }
};

LogPlugin.prototype.error = function(msg) {
    if (this.fileLogger) {
        this.fileLogger.error(msg); }

    if (this.msgLogger && this.level >= this.logLevels.error) {
        this.msgLogger.addLogEntry(msg); }
};

LogPlugin.prototype.info = function(msg) {
    if (this.fileLogger) {
        this.fileLogger.info(msg); }

    if (this.msgLogger && this.level >= this.logLevels.info) {
        this.msgLogger.addLogEntry(msg); }
};

LogPlugin.prototype.debug = function(msg) {
    if (this.fileLogger) {
        this.fileLogger.debug(msg); }

    if (this.msgLogger && this.level >= this.logLevels.debug) {
        this.msglogger.addLogEntry(msg); }
};

LogPlugin.prototype.setFileLogger = function(bunyanLogger) {
    this.fileLogger = bunyanLogger;
};

LogPlugin.prototype.setMsgLogger = function(wascallyClient, level) {
    this.msgLogger = wascallyClient;
    this.level = level;
};

LogPlugin.prototype.logLevels = { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 };


module.exports = LogPlugin;