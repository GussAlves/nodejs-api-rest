// com o consign é possível utilizar trexos de código 
module.exports = app => {
    app.get('/atendimentos', (req, res) => res
        .send('Você está na rota de atendimentos fornecida pelo método GET'));
}