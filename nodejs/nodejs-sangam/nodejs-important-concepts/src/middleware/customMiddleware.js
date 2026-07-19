const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const userAgent = req.headers['user-agent'];
    console.log(`[${timestamp}] ${method} ${url} - ${userAgent}`);
    next();
}

const timeStamp = (req, res, next) => {
    req.timeStamp = new Date().toISOString();
    next();
}

module.exports = {
    requestLogger,
    timeStamp
}