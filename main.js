//Dichiaro variabili KM ed Età 
let distance = parseInt(prompt("Quanti Kilometri devi percorrere?"));
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
        console.log(`Il prezzo intero del biglietto è: ${full_price_ticket}€`);
        // Biglietto sconto over
        const discount_under = ((full_price_ticket * 20) / 100);
        let full_price_ticket_under = full_price_ticket - discount_under;
        console.log(`Il prezzo under 18 del biglietto è: ${full_price_ticket_under}€`);
        // Biglietto sconto over
        const discount_over =((full_price_ticket * 40) / 100);
        let full_price_ticket_over = full_price_ticket - discount_over;
        console.log(`Il prezzo over 65 del biglietto è: ${full_price_ticket_over}€`);
        // Output prezzo biglietto del treno
        if (age <= 18) {
            alert(`Hai diritto ad uno sconto per under 18. Il prezzo del biglietto è di ${full_price_ticket_under}€`);
        } 
        else if (age >= 65) {
            alert(`Hai diritto ad uno sconto per over 65. Il prezzo del biglietto è di ${full_price_ticket_over}€`);
        }
        else {
            alert(`Il prezzo del biglietto è di ${full_price_ticket}€`);
        }
    }
}