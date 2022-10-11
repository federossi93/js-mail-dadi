//Chiedi all’utente la sua email.
let email = prompt('Inserisci la tua email')


//controlla che sia nella lista di chi può accedere.

const emailList = ['fede@gmail.com','jack@gmail.com','luca@gmail.com']

let testo = document.querySelector('h1')

//ciclo da controllare!!!!

for (let i = 0; i < emailList.length; i++){

    const emailGiusta = emailList[i]

    if(email == emailGiusta){
        console.log('Email coretta');
        testo.innerHTML = 'bravo'
        break
    }
    else{
        console.log('Email sbagliata');
        testo.innerHTML = 'sbagliato'
    }
    //stampa un messaggio appropriato sull’esito del controllo.
} 

//Generare un numero random da 1 a 6,
//sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche
//domanda: Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let giocatore = Math.round(Math.random()* 6 + 1)
console.log(giocatore);

let computer = Math.round(Math.random()* 6 + 1)
console.log(computer);

let vincitore = document.getElementById('risultato')

let perdente = document.getElementById('risultato')

let pareggio = document.getElementById('risultato')

if(giocatore > computer){
    console.log('giovìcatore vince');
    perdente.innerHTML = 'giocatore vince: ' + giocatore + ' vs ' + computer
}else if(giocatore = computer){
    pareggio.innerHTML ='pareggio: ' + giocatore + ' vs ' + computer
}
else{
    console.log('computer vince');
    vincitore.innerHTML = 'computer vince'
    perdente.innerHTML = 'computer vince: ' + computer + ' vs ' + giocatore
}

