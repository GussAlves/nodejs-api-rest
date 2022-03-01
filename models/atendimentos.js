    const moment = require('moment');
    const conexao = require('../infraestrutura/conexao');

    class Atendimento {
        adiciona(atendimento) {
            const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
            const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
            const atendimentoDatado = { ...atendimento, dataCriacao, data };
            const sql = 'INSERT INTO ATENDIMENTOS SET ?';

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                } else {
                    console.log(resultados);
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