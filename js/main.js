//Dichiaro variabili KM ed Età
let distance = prompt("Quanti Kilometri devi percorrere?");
const age = prompt("Quanti Anni hai?");
console.log(`L'utente ha ${age} anni`);
console.log(`L'utente deve percorrere ${distance}km`);
if (isNaN(distance) && isNaN(age)) {
    alert("Il valore inserito non è un numero! Per favore inserisci correttamente i valori richiesti");
    location.reload();
}
//Calcolo prezzi biglietti
const full_price_ticket = ((distance * 0.21) * 100) / 100;
const ticket = Math.ceil(full_price_ticket * 100) / 100;
console.log(`Il prezzo intero del biglietto è: ${full_price_ticket}€`);
console.log(`Il prezzo intero con decimali del biglietto è: ${ticket}€`);
// Calcolo sconti
let discount_under = ((full_price_ticket * 20) / 100); //calcolo sconto 20%
let discount_over = ((full_price_ticket * 40) / 100); //calcolo sconto 40%
// Biglietto sconto under
let ticket_under = full_price_ticket - discount_under;
let d_ticket_under = Math.ceil(ticket_under * 100) / 100;
console.log(`Il prezzo under 18 del biglietto è: ${ticket_under}€`);
console.log(`Il prezzo under 18 con decimali del biglietto è: ${d_ticket_under}€`);
// Biglietto sconto over
let ticket_over = full_price_ticket - discount_over;
let d_ticket_over = Math.ceil(ticket_over * 100) / 100;
console.log(`Il prezzo over 65 del biglietto è: ${ticket_over}€`);
console.log(`Il prezzo over 65 con decimali del biglietto è: ${d_ticket_over}€`);
// Output prezzo biglietto del treno
if (age >= 65) {
    alert(`Hai diritto ad uno sconto per over 65! Il prezzo del biglietto è di ${d_ticket_over}€`);
}
else if (age <= 18) {
    alert(`Hai diritto ad uno sconto per under 18! Il prezzo del biglietto è di ${d_ticket_under}€`);
}
else {
    alert(`Il prezzo del biglietto è di ${ticket}€`);
}

