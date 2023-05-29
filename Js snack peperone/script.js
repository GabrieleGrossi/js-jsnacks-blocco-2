//Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

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
  
  // Funzione per generare casualmente un oggetto peperone
  function generatePepper() {
    const pepper = {};
  
    // Array di varietà di peperoni
    const varieties = ["Verde", "Rosso", "Giallo", "Arancione"];
  
    // Genera casualmente la varietà del peperone
    pepper.varieta = varieties[Math.floor(Math.random() * varieties.length)];
  
    // Genera casualmente il peso del peperone tra 50 e 200 grammi
    pepper.peso = getRandomInt(50, 200);
  
    // Genera casualmente la lunghezza del peperone tra 10 e 20 centimetri
    pepper.lunghezza = getRandomInt(10, 20);
  
    return pepper;
  }
  
  // Array di peperoni
  const peperoni = [];
  
  // Genera 10 oggetti peperone e li aggiunge all'array
  for (let i = 0; i < 10; i++) {
    const peperone = generatePepper();
    peperoni.push(peperone);
  }
  
  // Calcola il peso totale dei peperoni
  let pesoTotale = 0;
  for (let i = 0; i < peperoni.length; i++) {
    pesoTotale += peperoni[i].peso;
  }
  
  // Stampa il peso totale dei peperoni
  console.log("Peso totale dei peperoni:", pesoTotale);
  console.log(peperoni);