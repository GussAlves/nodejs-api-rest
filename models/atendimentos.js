const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO ATENDIMENTOS SET ?';

        conexao.query(sql, atendimento, (erro, resultado) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log(resultado);
            }
        }); 
    }

    exibirTodos() {
        const sql = 'select * from atendimentos';

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                console.log(erro);
            } else {
                return resultado;
            }
        })
    }
}

module.exports = new Atendimento;