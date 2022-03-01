const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, res) => res
        .send('Você está na rota de atendimentos utilizando método GET'));

    app.post('/atendimentos', (req, res) => {
        console.log('Atendimento enviado')
        const atendimento = req.body;
        Atendimento.adiciona(atendimento);

        res.send('POST atendimento')
    })
}