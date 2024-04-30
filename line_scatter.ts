
//Declaração de Variáveis:

let x: number = 5;
const y: string = "Olá";

     //Tipos de Dados:
let inteiro: number = 10;
let decimal: number = 3.14;
let texto: string = "Olá";
let booleano: boolean = true;
let array: number[] = [1, 2, 3];
let objeto: { chave: string } = { chave: "valor" };


       //Funções:
interface Pessoa {
    nome: string;
    idade: number;
}

function saudar(pessoa: Pessoa): string {
    return "Olá, " + pessoa.nome + "!";
}

            //Interface
let usuario: Pessoa = { nome: "João", idade: 30 };
console.log(saudar(usuario));


            //Classes
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    mover(distancia: number = 0) {
        console.log(`${this.nome} moveu ${distancia}m.`);
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au au!");
    }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.mover(10);
meuCachorro.latir();


                //Generico
function identidade<T>(arg: T): T {
    return arg;
}

let numero: number = identidade<number>(10);
let texto: string = identidade<string>("Olá");






