// Chiedere all'utente il suo nome

var nome = prompt("Inserisci il tuo Nome");

console.log(nome);

// Chiedere all'utente il suo cognome

var cognome = prompt("Inserisci il tuo Cognome");

console.log(cognome);

// Chiedere all'utente il suo colore preferito

var colorePreferito = prompt("Inserisci il tuo Colore preferito");

console.log(colorePreferito);

// Autput per l'utente

document.getElementById('js-password').innerHTML = "La Password Insicura é: " + nome + cognome + colorePreferito + "19";
