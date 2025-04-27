const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((error)=> next(error))
    }
}

export {asyncHandler};

// higher order function example
// const asyncHandler = () => {}
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => {() => {}}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// higher order function
/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message: error.message
        })
    }
}

*/