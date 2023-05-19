//Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
//Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
//Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

let randomNumbers = Math.floor(Math.random()* 100) + 1;

let attemps = 0

let guessed = false

while(!guessed){
    let userInput = parseInt(prompt('Insert a random number between 1 and 100'))
    attemps++

    if (userInput===randomNumbers) {
        guessed = true
        console.log('Congratulations, you have guessed the randomly generated number');
    } else if (userInput < randomNumbers){
        console.log('The random number that came out is bigger than your number')
    } else {
        console.log('The random number that came out is smaller than your number')
    }
}
console.log('Did you find the randomly generated number in'+ attemps + ' attemps!.')