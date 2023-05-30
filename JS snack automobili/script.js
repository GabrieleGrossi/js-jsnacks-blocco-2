/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */


//Creati 15 modelli di automobili
const automobili = [
    { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Renault", modello: "Clio", alimentazione: "benzina" },
    { marca: "Ford", modello: "Focus", alimentazione: "diesel" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Toyota", modello: "Yaris", alimentazione: "gpl" },
    { marca: "Audi", modello: "A3", alimentazione: "benzina" },
    { marca: "Mercedes-Benz", modello: "E-Class", alimentazione: "diesel" },
    { marca: "Nissan", modello: "Leaf", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "benzina" },
    { marca: "Peugeot", modello: "308", alimentazione: "diesel" },
    { marca: "Hyundai", modello: "Kona", alimentazione: "elettrico" },
    { marca: "Citroen", modello: "C3", alimentazione: "benzina" },
    { marca: "Volvo", modello: "XC60", alimentazione: "diesel" }
  ];


//Creo 3 array vuoti dove inserire le auto specifiche
const automobiliBenzina=[];
const automobiliDiesel=[];
const altreAutomobili=[];

//Creo il ciclo for per le automobili a benzina
for (let i=0; i < automobili.length; i++){
    const auto=automobili[i];
    if(auto.alimentazione === "benzina"){
        automobiliBenzina.push(auto);
    }
}
console.log(automobiliBenzina);

//
