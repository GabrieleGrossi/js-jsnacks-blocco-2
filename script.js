let numbers = []

let sum = 0 

while(sum<50){
    let userNumbers = parseInt(prompt('Inserisci un numero'));

    sum += userNumbers
    numbers.push(userNumbers)
}

console.log('Numeri inseriti:', numbers)