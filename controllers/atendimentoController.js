// com o consign é possível utilizar trexos de código 
module.exports = app => {
    app.get('/atendimentos', (req, res) => res
        .send('Você está na rota de atendimentos utilizando método GET'));

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de atendimentos utilizando método POST')
    })
}