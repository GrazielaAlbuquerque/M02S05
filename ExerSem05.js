//EXERCICIO 1 - Operador Spread

const num = [2, 5, 7, 15, 450, 100]
console.log(Math.max(num))

// EXERCICIO 2 - Operador Rest 

function soma(...nums){
    return nums.reduce ((total, el) => total + el)
}
console.log(soma(2, 5, 10, 12, 24))

//EXERCICIO 3 - Função de Array forEach.

const frutas = ['melancia', 'kiwi', 'maracujá', 'melão', 'banana'];

frutas.forEach (element => console.log (element));

//EXERCICIO 4 - Função de Array map

const numeros = [1, 4, 9, 16]

const map = numeros.map(element => element * 2);
console.log(map);

//EXERCICIO 5 - Função de Array filter

const palavras = ['comunicação', 'perfeito', 'plano', 'palmeira', 'Grêmio', 'futebol'];

const resultado = palavras.filter(words => words.length > 6);
console.log("resultado:", resultado);

//EXERCICIO 6 -  Função de Array find

const pessoas = [
    { name: 'Graziela', idade: 28},
    { name: 'Eduardo', idade: 23},
    { name: 'Marlene', idade: 55},
    { name: 'Carlos', idade: 49},
    { name: 'Sueli', idade: 77},
    { name: 'Leticia', idade: 33},
    ]
    
    const encontrarPessoa = pessoas.find(p => p.name === "Leticia");
    console.log("pessoa encontrada: ", encontrarPessoa);

//EXERCICIO 7 -  Função de Array reduce

const foguetes = [
    { pais: 'Russia', lanc: 150},
    { pais: 'Brasil', lanc: 9},
    { pais: 'Japão', lanc: 300},
    { pais: 'Alemanha', lanc: 20},
    { pais: 'Estados Unidos', lanc: 10},
] 

const totalLancamento = foguetes.reduce((prevValor, elem) => prevValor + elem.lanc, 0);
console.log("resultado do lançamento", totalLancamento);

//EXERCICIO 8 - Promise e Fetch

async function getPeople(){
    try{
        const people = await fetch('https://randomuser.me/api/?results=10');
        return people.json();
    } catch (error){
        console.log(`error:${error}`);

    }
}

//EXERCICIO 9 - Async

async function saudacao(){
    return "olá";
}
console.log(saudacao());
saudacao().then(console.log);

//EXERCICIO 10 - Await

async function saudacaoAsync(){
    return saudacao = await Promise.resolve("Buenas Tchê!");
}
saudacaoAsync().then(console.log);

