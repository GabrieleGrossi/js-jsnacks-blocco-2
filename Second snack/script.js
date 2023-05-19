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
        console.log('Complimenti, hai indovinato il numero generato randomicamente');
    } else if (userInput < randomNumbers){
        console.log('Il numero randomico uscito è più grande rispetto al tuo numero')
    } else {
        console.log('Il numero randomico uscito è più piccolo rispetto al tuo numero')
    }
}
console.log('Hai trovato il numero generato randomicamente in '+ attemps + ' tentativi!.')