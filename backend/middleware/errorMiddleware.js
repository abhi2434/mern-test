const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);

    res.Status(404);
    next[error];
};

const errorHandler = (err, req,res, next) => {
    let statusCode = res.statusCode === 200? 500 : res.statusCode;
    let message = err.message;

    //Check for mongoose API Id

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        message = `Resource not found`;
        statusCode = 404;
    }

    res.status(statusCode).json({
        message, stack: process.env.NODE_ENW === 'production' ? '' : err.stack,
    });
};
export {notFound, errorHandler};