

const adminMiddleware = (req, resp, next) => {
    if(req.userInfo.role !== "admin"){
        return resp.status(403).json({
            success: false,
            message: "Access Denied! Admin can access only"
        })
    }

    next();
}

module.exports = adminMiddleware;