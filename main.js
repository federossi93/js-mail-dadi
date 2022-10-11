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

}

//stampa un messaggio appropriato sull’esito del controllo.
