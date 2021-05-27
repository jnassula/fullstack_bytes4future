//Enquanto o vetor não esta ordenado
//Assume que o vetor não esta ordenado
//Para cada elemento
    //Se o elemento e o próximo não está na ordem certa
    //Troca o elemento com o proximo
    //Marca vetor como não estando ordenado

function bubbleSort(array){
    let ordenado = false;
    let elementosOrdenados = 0;
    while(!ordenado){
        ordenado = true;
        for(let i = 0; i < array.length - 1 - elementosOrdenados; i++){
            if(array[i] > array[i + 1]){
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                ordenado = false
            }
        }
        elementosOrdenados++;
    }
    return array;
    
}

function buildArraySorted(n){
    let array = []
    for(let i = 0; i < n; i++){
        array = [i].concat(array)
    }
    return array;
}

const arr100 = buildArraySorted(200000)
console.log(arr100)

const startBubble = new Date();
bubbleSort(arr100)
console.log(`${new Date() - startBubble}ms`)
console.log(arr100)

// console.log(bubbleSort([3, 5, 1, 9]))