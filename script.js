let numbers = []

let sum = 0 

while(sum<50){
    let userNumbers = parseInt(prompt('Insert numbers'));

    sum += userNumbers
    numbers.push(userNumbers)
}

console.log('The numbers insert are:', numbers)