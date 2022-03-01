    const moment = require('moment');
    const conexao = require('../infraestrutura/conexao');

    class Atendimento {
        adiciona(atendimento, res) {
            const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
            const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
            const atendimentoDatado = { ...atendimento, dataCriacao, data };
            const sql = 'INSERT INTO ATENDIMENTOS SET ?';

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(resultados);
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