/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in Javascript sono:
-Number (Si dice che il tipo di dato è Number quando parliamo di numeri interi o decimali)
-String (Si dice di tipo Stringa un dato che comprende del testo, compreso tra apici)
-Booleano (Un tipo di dato Booleano contiene delle scelte ti pone davanti delle condizioni
 che possono essere positive(SI) o negative(NO)lo utilizziamo con True(vero)o False(falso))
 -Il tipo di dato Undefined(non definito) si usa per descrivere una variabile(contenitore)
 vuota, senza valore.
 -Null(lo utilizziamo per descrivere un contenitore(variabile)intenzionalmente vuoto, che abbiamo
 deciso di svuotare o di non metterci nulla all'interno.
 I datatypes spegati in maniera semplice e comprensibile, possiamo paragonarli a delle etichette,
 senza queste etichette, il computer non saprebbe ad esempio se 93100 è un numero da utilizzare
 per fare calcoli, oppure un codice postale da scrivere su una busta/*

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in Javascript è una raccolta di coppia chiave-valore, Una variabile
che contiene tante informazioni differenti che si riferiscono alla stessa cosa  */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12+20

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Serena"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
console.log(name1 !== name2)
console.log(name1===name2.toLowerCase())
