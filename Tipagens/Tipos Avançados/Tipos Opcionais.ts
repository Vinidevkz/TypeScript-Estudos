//Criado por Vinicius Eduardo, 2025
//
//GitHub: Vinidevkz
//

//Tipos Opcionais

    //Exemplo com Objetos
    interface Usuario {
        nome: string
        idade?: number //a idade aqui é opcional
    }

    const usuario1: Usuario = {nome: "João"}//é válido, pois a idade não
    //é obrigtória.

    const usuario2: Usuario = {nome: "Maria", idade: 34}//também válido.



    //Exemplo com Funções:
    function jogo(nome: string, anoLancamento?: number){
        if(anoLancamento){
            console.log(`Nome do jogo: ${nome}. Ano de Lançamento:  ${anoLancamento}`)
        }else{
            console.log(`Nome do jogo: ${nome}`)
        }
    }

    jogo("Black Mith Wukong")//apenas o nome, que é obrigatório
    jogo("Dark Souls 3", 2016)//os dois, sendo o ano opcional

//Valores Padrão

    //Exemplo com Funções:
    //Definindo o valor padrão do sobrenome como "Santos":
    function saudacao(nome: string, sobrenome: string = "Santos"): void{
        console.log(`Seja Bem-Vindo(a), ${nome} ${sobrenome}`)
    }

    saudacao("Maria")// saída: Maria Santos
    saudacao("Roberto", "Almeida")// saída: Roberto Almeida,
    //substituindo o valor padrão do sobrenome



    //Exemplo com Objetos:
    //modelo para a nossa classe/objeto
    interface Config {
        host: string
        porta?: number
    }

    function iniciarServidor(config: Config): void {
        const porta = config.porta || 3000 // valor padrão para a porta

        console.log(`Servidor rodando em ${config.host}:${porta}`)
    }

    iniciarServidor({host: "localhost"})
    //saída: "Servidor rodando em localhost:3000"
    iniciarServidor({host: "localhost", porta: 8000})
    //saída: "Servidor rodando em localhost:8000"

//Combinando Ambos:

    function criarUsuario(nome: string, idade: number = 18, ativo?: boolean): void{
        console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo ? "Ativo" : "Inativo"}`)// <- if ternário
    }

    criarUsuario("João")//saída: "Nome: João, Idade: 18, Ativo: Inativo"

    criarUsuario("Guilherme", 28, true)//saída: "Nome: Guilherme, Idade: 28, Ativo: Ativo"