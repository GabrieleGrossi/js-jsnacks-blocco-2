// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
const array=['maMma', 'Babbo', 'figlIo', 'soRElla', 'Fratello']
const arrayGiusto=[];

array.forEach((word)=>{
    const newWord=word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();
    arrayGiusto.push(newWord);
})
console.log(arrayGiusto);