//Dichiaro variabili KM ed Età 
let distance = prompt("Quanti Kilometri devi percorrere?");
console.log(`L'utente deve percorrere ${distance}km`);
if (isNaN(distance)) {
    alert("Il valore inserito non è un numero! Per favore inserisci correttamente i valori richiesti");
    location.reload();
} 
else {
    const age = prompt("Quanti Anni hai?");
    console.log(`L'utente ha ${age} anni`);
    if (isNaN(age)) {
        alert("Il valore inserito non è un numero! Per favore inserisci correttamente i valori richiesti");
        location.reload();
    } 
    else {
        //Calcolo prezzi biglietti
        const full_price_ticket = ((distance * 0.21) * 100) / 100;
        const ticket = Math.ceil(full_price_ticket * 100) / 100;
        console.log(`Il prezzo intero del biglietto è: ${full_price_ticket}€`);
        console.log(`Il prezzo intero con decimali del biglietto è: ${ticket}€`);
        // Biglietto sconto over
        let discount_under = ((full_price_ticket * 20) / 100); //calcolo sconto 20%
        let full_price_ticket_under = full_price_ticket - discount_under;
        let discount_ticket_under = Math.round(full_price_ticket_under * 100) / 100;
        console.log(`Il prezzo under 18 del biglietto è: ${full_price_ticket_under}€`);
        console.log(`Il prezzo under 18 con decimali del biglietto è: ${discount_ticket_under}€`);
        // Biglietto sconto over
        let discount_over = ((full_price_ticket * 40) / 100); //calcolo sconto 40%
        let full_price_ticket_over = full_price_ticket - discount_over;
        let discount_ticket_over = Math.ceil(full_price_ticket_over * 100) / 100;
        console.log(`Il prezzo over 65 del biglietto è: ${full_price_ticket_over}€`);
        console.log(`Il prezzo over 65 con decimali del biglietto è: ${discount_ticket_over}€`);
        // Output prezzo biglietto del treno
        if (age <= 18) {
            alert(`Hai diritto ad uno sconto per under 18! Il prezzo del biglietto è di ${discount_ticket_over}€`);
        } 
        else if (age >= 65) {
            alert(`Hai diritto ad uno sconto per over 65! Il prezzo del biglietto è di ${discount_ticket_over}€`);
        }
        else {
            alert(`Il prezzo del biglietto è di ${ticket}€`);
        }
    }
}