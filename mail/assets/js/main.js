/*
Mail
- Crea una lista di email di invitati ad una festa.
- Chiedi all’utente la sua email
- controlla che sia nella lista di chi può accedere
- stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: Non è necessario provvedere alla validazione delle email
*/

const listEmail = ['odon@email.com', 'airoldi@email.com', 'orso@email.com', 'cocker@email.com'];

const yourEmail = prompt('Inserisci la tua Email');

let accessParty = 'Non sei invitato alla festa';

for (i = 0; i < listEmail.length; i++) {
        
    if ( listEmail[i] == yourEmail ) {
        accessParty = 'Sei invitato alla festa';
    }
    
}

console.log(accessParty);