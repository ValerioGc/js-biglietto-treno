//Dichiaro variabili KM ed Età 
let distance = parseInt(prompt("Quanti Kilometri devi percorrere?"));
console.log(`L'utente deve percorrere ${distance}km`);
if (isNaN(distance)) {
    alert("Il valore inserito non è un numero! Per favore aggiorna la pagina ed inserisci correttamente i valori richiesti");
} else {
    const age = prompt("Quanti Anni hai?");
    console.log(`L'utente ha ${age} anni`);
    if (isNaN(age)) {
        alert("Il valore inserito non è un numero! Per favore aggiorna la pagina ed inserisci correttamente i valori richiesti");
    } else {
        //Calcolo prezzi biglietti
        const full_price_ticket = Math.floor(distance * 0.21);
        console.log(`Il prezzo intero del biglietto è: ${full_price_ticket}€`)
        
        // Biglietto sconto over
        const discount_under = Math.floor((full_price_ticket * 20) / 100);
        let full_price_ticket_under = full_price_ticket - discount_under;
        console.log(`Il prezzo under 18 del biglietto è: ${full_price_ticket_under}€`)
        
        // Biglietto sconto over
        const discount_over = Math.floor((full_price_ticket * 40) / 100)
        let full_price_ticket_over = full_price_ticket - discount_over;
        console.log(`Il prezzo over 65 del biglietto è: ${full_price_ticket_over}€`) 
        
        //Arrotondamento prezzi
        let rounded_price_nodiscount = full_price_ticket;
        let rounded_price_discount = Math.round((full_price_ticket_under * 100) / 100);
        let rounded_price_discount2 = Math.round((full_price_ticket_over * 100) / 100);
        
        // Output prezzo biglietto del treno
        if (age >= 18 && age <= 65) {
            alert(`Il prezzo del biglietto è di ${rounded_price_nodiscount}€`);
        } else if (age <= 18 ) {
            alert(`Hai diritto ad uno sconto per under 18. Il prezzo del biglietto è di ${rounded_price_discount}€`)
        } else if (age >= 65){
            alert(`Hai diritto ad uno sconto per over 65. Il prezzo del biglietto è di ${rounded_price_discount2}€`);
        }
    }
}