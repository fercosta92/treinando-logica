//Desafio 1
console.log('Desafio 1')
let nomeCompleto = "Fernanda da Costa";

console.log(nomeCompleto)

//Desafio 2
console.log('Desafio 2')
let numeroA = (6);
let numeroB = (5);
const resultado = numeroA * numeroB;

console.log(resultado);

//Desafio 3
console.log('Desafio 3')
function saudacao () {
    console.log('Oi eu sou o Goku!');
}
saudacao();

//Desafio 4
console.log('Desafio 4')
function multiplica (valorA, valorB) {
    const resultado = 3 * 3;
    console.log ('multiplica' + resultado);
}
multiplica();

//Desafio 5
console.log('Desafio 5')
function podeDirigir (idade){
    if (idade >= 18) {
        return "Você pode dirigir!";
    }
    else {
        return "Você não pode dirigir";
    }
}
console.log(podeDirigir(19));

//Desafio 6
console.log('Desafio 6')
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

//Desafio 7
console.log('Desafio 7')
for (let i=0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Desafio 8
console.log('Desafio 8')
function tabuada (numero){
    for (let i=0; i<=10; i++){
        console.log(numero + "x" + i + "=" + (numero * i))
    }  
}
tabuada(9)

//Desafio 9
console.log('Desafio 9')
const converterEmHoras = (minutes) => {
    return minutes / 60;
}
console.log(converterEmHoras(150), "hora(s)");
