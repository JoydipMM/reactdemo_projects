


const adminMiddleware = (req, res, next) => {
    const { role } = req.userInfo;
    if (role === "admin") {
        next();
    } else {
        return res.status(401).json({ success:false, message: "Unauthorized! admin role required" });
    }
}

module.exports = adminMiddleware;