let addButton = document.querySelector('#add')
let multiButton = document.querySelector('#multiply')
let powerButton = document.querySelector('#power')
let factorialButton = document.querySelector('#factorial')

let inputA = document.querySelector('#inputone')
let inputB = document.querySelector('#inputtwo')
let total = document.querySelector('#total')

function add(numbA, numbB){
    return numbA + numbB
}

addButton.addEventListener("click", function(){
    let boxOne = Number(inputA.value)
    let boxTwo = Number(inputB.value)

    console.log (add(boxOne, boxTwo))
    total.innerHTML = add(boxOne,boxTwo)
})

function multiply(numbA, numbB){
    let product = 0;
    let i = 0;
    while(i<numbB){
        product= add (numbA, product);
        i++;
    }
    return product
}

multiButton.addEventListener("click", function(){
    let boxOne = Number(inputA.value)
    let boxTwo = Number(inputB.value)

    console.log(multiply(boxOne, boxTwo))
    total.innerHTML = multiply(boxOne, boxTwo)
})

function power(numbA, numbB){
    let answer = 1;
    let i = 0;
    while(i < numbB){
        answer = multiply(numbA, answer);
        i++;
    }
    return answer
}

powerButton.addEventListener("click", function(){
    let boxOne = Number(inputA.value)
    let boxTwo = Number(inputB.value)

    console.log(power(boxOne, boxTwo))
    total.innerHTML = power(boxOne, boxTwo)
})

function factorial(numbA){
    let answer = 1;
    while(numbA > 0) {
        answer = multiply(numbA, answer)
        numbA--
    }
    return answer
}

factorialButton.addEventListener("click", function(){
    let boxOne = Number(inputA.value)
    
    console.log(factorial(boxOne))
    total.innerHTML = factorial(boxOne)
})