//Criado por Vinicius Eduardo, 2025
//
//GitHub: Vinidevkz
//

//Tipos Personalizados com type

    //define o tipo com o "=", como se fosse uma variável.
    type id = number | string
    //depois, atribuí o tipo com o ":" e logo após o valor em si.
    let userID: id = 10
    let productId: id = "20"

//Objetos tipados

    //nesse caso o tipo Usuario recebe um objeto com diversos atributos, também tipados.
    type Usuario = {
        id: number;
        nome: string;
        email: string;
    }
    
    //criando um novo usuário se baseando no tipo Usuario.
    const usuario: Usuario = {
        id: 1,
        nome: "Vinicius",
        email: "vini@gmail.com"
    }

//Interseções

    type Pessoa = {
        nome: string
    }
    //Fundindo os dois tipos em um só:
    type Funcionario = Pessoa & {
        id: number;
        cargo: string
    }
    //Funcionario recebe Pessoa e  adiciona id e cargo.

    //criando um objeto com Funcionario agora:
    const funcionario: Funcionario = {
        id: 1,
        nome: "Fábio",
        cargo: "Gerente"
    }


//////////////////

//Tipos personalizados com Interface:

    interface Usuario2 {
        id: number
        nome: string
        email: string
    }

    const usuario2: Usuario = {
        id: 2,
        nome: "Pedro",
        email: "pedro@gmail.com"
    }

//Exemplo com Herança

    interface Pessoa2 {
        nome: string
    }

    interface Funcionario2 extends Pessoa2 {
        id: number
        cargo: string
    }

    const funcionario2: Funcionario2 = {
        id: 5,
        nome: "Maria",
        cargo: "Dev Sênior"
    }

//Exemplo com Métodos:

    //Criando uma interface para alguma classe. Já pré-setando os tipos dos atributos e seus métodos.
    interface Animal {
        nome: string
        fazerBarulho(): void //void não retorna nada
    }

    //criando a classe Cachorro e implementando a interface 'Animal'
    class Cachorro implements Animal {
        nome: string; //recebendo um nome, assim como a interface pede

        //construtor da classe
        constructor(nome: string) {
            this.nome = nome
        }

        //implementando o método também exigido pela interface
        fazerBarulho(): void {
            console.log(`${this.nome} está latindo!`)
        }
        //como ela é um void, não retorna (return) de fato nada. Mas há um console.log
        //dentro dela que será exibido quando ela for chamada.
    }

    //constante que recebe e cria um novo Cachorro, e dá a ele um nome como pedido.
    const meuCachorro = new Cachorro('Rex');
    //inicia o método fazerBarulho da classe, fazendo ser exibido no console a mensagem.
    meuCachorro.fazerBarulho();


