exports.global = (req, res, next) => {
    res.locals.valorGlobal = 'Este é um valor compartilhado globalmente'
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        res.render('404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}