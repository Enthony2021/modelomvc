exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este é o título da página',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
}

exports.trataPost = (req, res) => {
    res.send(req.body)
}