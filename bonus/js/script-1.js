// Chiedere all'utente il suo nome

var nome = prompt("Inserisci il tuo Nome");

document.getElementById('js-nome').innerHTML = "Nome: " + nome;

console.log(nome);

// Chiedere all'utente il suo cognome

var cognome = prompt("Inserisci il tuo Cognome");

document.getElementById('js-cognome').innerHTML = "Cognome: " + cognome;

console.log(cognome);

// Chiedere all'utente il suo colore preferito

var colorePreferito = prompt("Inserisci il tuo Colore preferito");

document.getElementById('js-colore-preferito').innerHTML = "Colore Preferito: " + colorePreferito;

console.log(colorePreferito);

// Autput per l'utente

document.getElementById('js-password').innerHTML = nome + cognome + colorePreferito + "19";
