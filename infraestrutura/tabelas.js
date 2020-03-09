//Arquivo que cria tabela no momento da execução caso não tenha no bd

class Tabelas {
    init(conexao){
        console.log('Tabelas foram criadas com sucesso!');
        this.conexao = conexao;

        this.criarAtendimentos();
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos 
        (Id int NOT NULL AUTO_INCREMENT, 
        Cliente varchar(50) NOT NULL, 
        Pet varchar(20),
        Servico varchar(20) NOT NULL,
        Data datetime NOT NULL,
        DataCriacao datetime NOT NULL,
        Status varchar(20) NOT NULL,
        Observacoes text, PRIMARY KEY(ID))`


        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            } else {
                console.log('Tabela Atendimentos criada com sucesso!');
            }
        });
    }
}

module.exports = new Tabelas;