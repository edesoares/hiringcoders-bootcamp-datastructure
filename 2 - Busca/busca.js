/*  A busca de elementos sempre trata de conjuntos e a ideia é utilizar critérios pra 
    otimizar a busca. */

//  Busca sequencial: Percorre o conjunto procurando um elemento específico

var valores = [5, 8, 10, 22, 45, 38];

function busca(num){
    for (i = 0; i < 6; i++){
        if (num == valores[i]){
            return i;
        }
    }
    return -1;
}

//  Usando a ferramenta de busca

console.log(busca(10));
console.log(busca(50));

//  Esse tipo de implementação não é muito bom pra conjuntos muito grandes

/*  Busca binária: O princípio da busca binária é reduzir a quantidade de elementos
    onde vai ser feita a busca pra otimizar o processo. Primeiro procura em metade do
    conjunto, depois em outra metade e vai reduzindo até encontrar o elemento específico
    ou percorrer todo o conjunto. Esse tipo de implementação exige que os dados estejam
    ordenados. */

var valores2 = [5, 8, 10, 22, 38, 45];

function buscaBin(num){
    let inicio, fim;
    let meio;
    let passos = 0;
    inicio = 0;
    fim = 9;
    while (inicio <= fim){
        meio = parseInt((inicio + fim) / 2);
        passos = passos + 1;
        if (num == valores[meio]){
            console.log("Achei em "+ passos + " passos")
            return meio;
        } else {
            if (num > valores[meio]){
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
    }
    console.log("Não achei em "+ passos + " passos")
    return -1;
}

console.log(buscaBin(10));