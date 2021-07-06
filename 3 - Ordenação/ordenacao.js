/*  Como o algoritmo de busca binária requer que os elementos estejam ordenados, é importante também
    implementar um algoritmo de ordenação. O mais simples é o bubble sort, porém ele é um dos menos
    eficientes. */


//  Bubble sort
var valores = [8, 7, 6, 5, 4, 3, 2, 1];

function ordena(){
    let inicio = 0;
    let fim = 8;
    let tmp;
    for (vezes = 0; vezes < 8; vezes++){
        for (pos = inicio; pos < fim - 1 - vezes; pos++){
            if (valores[pos] > valores[pos + 1]){
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tmp;
            }
        }
    }
}

console.log("Vetor não ordenado");
console.log(valores);
ordena();
console.log("Vetor ordenado");
console.log(valores);