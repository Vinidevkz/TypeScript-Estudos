//Criado por Vinicius Eduardo, 2025
//
//GitHub: Vinidevkz
//

//Tipos Literais

    let carro: "Uno" | "Fiat" | "HB20"
    //certo:
    carro = "Uno"
    //errado:
    //carro = "Fusca" - Fusca não está dentro do que o TypeScript espera para a variável carro.

//Uniões (|)

    let numero: string | number
    numero = "19"
    numero = 19
    //Ambos estão corretos pois a variável numero pode receber ambos os tipos de dados.

//Combinando Ambos

    type Status = "ativo" | "inativo" | "pendente" | number

    let estado: Status
    //certos:
    estado = "ativo"
    estado = "inativo"
    estado = 10
    //errado:
    //estado = "cancelado" - cancelado não é um valor aceito dentro do tipo Status atribuido a variável estado.

//Função com Tipos Literais

    function direcao(mov: "Esquerda" | "Direita" | "Baixo" | "Cima"){
        return `Movendo para ${mov}`
    }

    //certo
    console.log(direcao("Esquerda"))
    //errado
    //console.log(direcao("Lado")) - Lado não é um valor esperado pelo parâmetro mov.

//Função com Uniões

    function exibirId(id: number | string){
        return `Seu id é ${id}`
    }

    //certos
    console.log(exibirId(7))
    console.log(exibirId("28"))
    //errado
    //console.log(exibirId(true)) - Boolean não é um tipo aceito pelo parâmetro id.






