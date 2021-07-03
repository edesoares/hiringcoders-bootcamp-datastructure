/* Em uma pilha ou stack, os valores ficam basicamente empilhados, ou seja
um elemento vai sendo inserido após o outro através da operação push, e eles
são retirados a partir do topo, ou do último elemento colocado através da
operação pop. A regra é LIFO - Last In First Out. */

// Veja uma implementação disso

// Essa é minha coleção de dados
var elementos = [];

/*  Essa variável indica qual posição é o topo. Como um vetor começa da posição
    0, ele vazio vai ser -1 */
var topo = -1;

// Máximo de elementos que podem ser empilhados
const MAX = 10;

// Função push
function push(num){
    if (topo < MAX){
        topo = topo + 1;
        elementos[topo] = num;
    }
    else {
        console.log("Ora meu consagrado, esta pilha está cheia")
    }
}

// Função pop
function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    }
    else {
        console.log("Não há mais nada aqui")
    }
}

// Função pra ver se está vazia
function taVazia(){
    return topo == -1;
}

// Usando a pilha

// Push
push(10);
push(20);
push(30);

console.log(elementos);

// Pop
console.log(pop());
console.log(pop());
console.log(pop());

// Usando a pilha pra fazer conversão de binários

console.log(elementos);

var numDecimal = 10;
var resto;

while (numDecimal != 0){
    resto = parseInt(numDecimal % 2)
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

while (!taVazia()){
    console.log(pop());
}