//arquivo de conexão com o banco mysql
const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'agenda-petshop'
});

module.exports = conexao;