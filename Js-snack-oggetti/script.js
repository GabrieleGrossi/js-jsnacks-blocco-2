/*Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore
    Nome
    Cognome
    Età
    Media punti fatti per partita
    Percentuale di successo per tiri da 3 punti
    Stoppate 
    Tiri 

Generare casualmente le statistiche di gioco, secondo queste regole:
    il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
    la media punti fatti per partita deve essere compresa tra 0 e 50
    la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
    le stoppate sono un numero intero compresot ra 0 e 30
    i tiri sono un numero intero compreso tra 20 e 100
*/

const player = {
    playerId : '',
    firstName : 'Jason',
    lastName: 'Tatum',
    age: 24,
    appm : 0,
    pct3 : 0,
    blk:0,
    shots: 0,
 }
 
 player.appm = getRandomInt(0, 50);
 player.pct3 = getRandomInt(0, 100);
 player.blk = getRandomInt(0, 30);
 player.shots = getRandomInt(20, 100);
 
 player.playerId = generateRandomString(3, 'QWERTYUIOPASDFGHJKLZXCVBNM') + getRandomInt(0,9) + getRandomInt(0,9) + getRandomInt(0,9) ;
 
 console.log(player);
 
 
 /**
  * Function that generates a random number (not secure) between two values, both included.
  *
  * @param minumNumber the included minium value of the random generated number range.
  * @param maximumNumber the included maximum value of the random generated number range
  * @returns A randomly generated number.
  *
  * @credits to csharptest.net on stackoverflow for the base idea
  * @link https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  */
 function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);
 
    return randomNumber;
 }
 
 /**
  * A function that generates a random string from a custom dictionary and length.
  *
  * @param length The length of the random string to generate.
  * @param allowedChars A string of the allowed chars to be randomly picked.
  * @returns A random generated string based on both the allowed chars and length given as arguments
  */
 function generateRandomString(length, allowedChars ) {
    let result = '';
    let counter = 0;
 
    while (counter < length) {
       result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
       counter++;
    }
 
    return result;
 }