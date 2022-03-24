// il calcolo del prezzo del biglietto del treno


// chiedere all'utente il numero di chilometri che vuole percorrere
const numero_km = parseInt(prompt("Quanti chilometri vuoi percorrere?!"))
console.log(numero_km);


// l'età del passeggero
const età_passaggero = parseInt(prompt("Quanti anni hai?!"))
console.log(età_passaggero);


/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
 secondo queste regole */


//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzo_biglietto = numero_km * 0.21;
console.log(prezzo_biglietto);


// sconto del 20% per i minorenni
if (età_passaggero <= 18){
    var calcoloSconto_Under = ((prezzo_biglietto * 20) / 100);
    var biglietto_Under = prezzo_biglietto - calcoloSconto_Under;
    console.log(biglietto_Under);


// sconto del 40% per gli over 65
} else if (età_passaggero >= 65){
    var calcoloSconto_Over = ((prezzo_biglietto * 40) / 100);
    var biglietto_Over = prezzo_biglietto - calcoloSconto_Over;
    console.log(biglietto_Over);
}