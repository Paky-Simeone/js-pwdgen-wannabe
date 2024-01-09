// Chiediamo all'utente il suo nome
const userfirstname = prompt(`Quale è il tuo nome?`);
console.log(userfirstname);

// Chiediamo all'utente il suo cognome
const userlastname = prompt(`Quale è il tuo cognome?`);
console.log(userlastname);

// Chiediamo all'utente il suo colore preferito
const usercolor = prompt(`Quale è il tuo colore preferito?`);
console.log(usercolor);

// Generiamo una password con il nome, cognome, colore preferito dell'utente più il numero 23 finale
const password = userfirstname + userlastname + usercolor + `23`;
console.log(password);