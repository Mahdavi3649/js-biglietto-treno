// il calcolo del prezzo del biglietto del treno


//chiedere all'utente il numero di chilometri
const km = parseInt(prompt("quanti km vuoi percorrere?"))
if (isNaN(km)){
    alert("devi inserire un numero per i km da percorrere")
}

//che vuole percorrere e l'età del passeggero
const age = parseInt(prompt("quanti anni hai"))
if (isNaN(age)){
    alert("devi inserire un numero")
}

console.log(km, age);

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzo_al_km = 0.21;
let prezzo_finale;
const prezzo_standard = km * prezzo_al_km;
//console.log(prezzo_standard);

// sconto del 20% per i minorenni
const prezzo_minnoreni = prezzo_standard - (prezzo_standard * 0.2)

//uno sconto del 40% per gli over 65
const prezzo_over_65 = prezzo_standard - (prezzo_standard * 0.4)

//console.log(prezzo_minnoreni, prezzo_over_65);


if(age <= 18){
    messaggio = "hai diritto al prezzo di scontato 20%";
    prezzo_finale = prezzo_minnoreni

}else if(age >= 65){
    messaggio = "hai diritto al prezzo di scontato 40%";
    prezzo_finale = prezzo_over_65
} else{
    messaggio = "mi dispace, nessun sconto applicabile";
    prezzo_finale = prezzo_standard
}
//L'output del prezzo finale va scritto in forma umana

console.log(`${messaggio}, prezzo bigliett: Euro ${prezzo_finale.toFixed(2)}`);


