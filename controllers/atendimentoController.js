const Atendimento = require('../models/atendimentos');

module.exports = app => {
    //lista
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    //pegarPorId
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.buscarPorId(id, res);
    })

    //inclusão
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
    })
}