
// this error middleware can be detailed.
function logErrorMiddleware(err, req, res, next) {
    console.error(err)
    next(err)
}

function returnError(err, req, res, next) {
    res.status(err.statusCode || 500).send(err.message)
}



module.exports = {
    logErrorMiddleware,
    returnError,
}