const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");
const Tabela = require("./infraestrutura/Tabela");

conexao.connect(erro => {
    if(erro) {
        throw new Error(erro);
    } else {
        console.log('Conexão realizada com mysql:agenda-petshop');

        Tabela.init(conexao); // criando tabelas
        
        const app = customExpress();
        app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
    }
});