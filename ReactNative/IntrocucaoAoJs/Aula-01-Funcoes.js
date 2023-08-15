let n1 = 5;
let n2 = 8;


//algumas operações básicas 
console.log(n1+n2);
console.log(n1*n2);
console.log(n1-n2);
console.log(n1/n2);
console.log(n1**n2); //exponenciação 
console.log(Math.sqrt(n1)); // raiz quadrada
console.warn("Olá Mundo");

function soma (n1, n2) {

    return n1 + n2;
    
}

console.log(soma(4, 19));
console.log(soma(12,19));

//aqui ele faz uma função duas váriaveis 
function sub (n1, n2) {
    //retorna o que será pedido
    return n1 - n2;

}
//imprimi o que aconteceu naquela função
console.log(sub(5, 4));

/*
function div(n1, n2){

    return n1 / n2;

}

console.log(div(10, 5));
*/

function raiz2( n2){

    return Math.sqrt(n2);

}

console.log(raiz2(64))



function mult(n1, n2){

    return n1 * n2;

}

console.log(mult(64, 5));

/*
const divisao = (v1, v2) => {

    if (v1 > v2){
        let resultado = v1 /v2;
        console.log(resultado);
    }
    else{
        console.log("Insira um valor v2 menor que v1");
    }
    
}

(divisao(10, 2));
*/

//outro método

const divisao = (v1, v2) => {

    let msg ="";
    if (v1 > v2){
        let resultado = v1 /v2;
        msg = resultado;
        return msg;

    }
    msg = "Insira um valor para v2 menor que v1. ";
    return msg;
}

console.log(divisao(10, 2));
console.log(divisao(5, 10));