//Criado por Vinicius Eduardo, 2025
//
//GitHub: Vinidevkz
//

///Tipos Primitivos:
    //number, string, boolean, null, undefined
    let idade: number;

    //certo:
    idade = 19
    //errado:
    //idade = 'vini'

    console.log(idade)

//Funções básicas e parâmetros tipados:

    //irá receber um numero: (nmr: number) e retornar uma string.
    function toString(nmr: number): string{
        let numeroConvert = nmr.toString() //toString para converter o number.

        return numeroConvert
    }

    console.log(toString(25))

//Função de parâmetro opcional:

    //o "?" em saudações indica uma condição, se não receber uma string, receberá undefined como padrão.
    function saudacoes(nome: string, saudacoes?: string ): string{
        if(saudacoes){
            return `${saudacoes}, ${nome}!`
        }

        return `Olá, ${nome}!`
    }

    console.log(saudacoes('Maria'))

//Função com Generics:

    function identidade<T>(valor: T): T{
        return valor
    }

    let resultado = identidade(10);
    //resultado.toUpperCase()
    //ERRO de compilação ,
    //pois o valor number NÃO pode ser convertido como uma string.

//Função com Any:

    function registro(valor: any): any{
        return valor
    }

    let valorRegistro = registro(28)
    valorRegistro.toUpperCase()
    //ERRO de execução, 
    //pois o typescript nao consegue identificar o tipo do dado dentro de ANY.

