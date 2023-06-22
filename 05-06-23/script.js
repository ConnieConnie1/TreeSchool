console.log ('Ciao Mondo')
const animals = ["dog", "cat","frog","bee"]
console.log (animals)
empty =[] //è possibile avere un array vuoto
console.log (animals[0]) //l'indice 0 dell'array animals è dog

const shopping = [["apple", "banana", "kiwi"],["shoes", "shirt"]]
console.log (shopping [0])// dà il primo  blocco raggruppato, quindi: apple, banana, kiwi

console.clear

console.log(typeof "ciao");
console.log(typeof 3);
console.log(typeof true);

//array
const animals = ["dog", "cat", "frog", "bee"];
const empty = [];
const shopping = [
  ["apple", "banana", "kiwi", "pineapple"],
  ["shoes", "shirt", "trousers"],
]; //arr dentro arr

//positioning (elementi partono da zero)

console.log(animals[0]);

//proprietà e metodi utili

animals.length; //lunghezza array
animals.push("bird"); //aggiunge l'elemento in ultima posizione alla lista
animals.unshift("bear"); //aggiunge l'elemento in prima posizione alla lista
animals.pop(); //rimuove l'ultimo elemento della lista
animals.shift(); //rimuove il primo elemento della lista
animals.concat("shopping"); //concatena all'array
animals.splice(1, 3); //rimuove permanentemente nella lista gli elementi nelle posizioni indicate tra parentesi
animals.slice(1, 3); //rimuove gli elementi nelle posizioni indicate tra parentesi ma non modifica la lista di partenza
animals.includes("dog"); //restituisce un booleano positivo se l'array include l'elemento tra parentesi
animals.reverse; //inverte l'ordine degli elementi
animals.join(); //unisce gli elementi e li converte in stringa
console.log(animals);

//object

const pers = { name: "Erica", surname: "Candido", age: "25" };
pers.name; //richiamare un determinato valore attraverso la propria chiave
// ===
pers["name"]; //richiamare un determinato valore attraverso la propria chiave
Object.keys(pers); //visualizzare tutte le chiavi dell'oggetto tra parentesi
Object.values(pers); //visualizzare tutti i valori dell'oggetto tra parentesi
pers.hasOwnProperty("age"); //restituisce un booleano positivo se l'oggetto ha tra le chiavi l'elemento tra parentesi
pers.name = "Elisa";

//ESERCITAZIONE

//1.Scrivi e verifica in console il tipo dei seguenti elementi:

("products"); // Stringa

("id"); //Stringa
1; //Numero

"title"`iPhone 9`; //Errore

("description"); //stringa
("An apple mobile which is nothing like apple"); //stringa

("price"); //stringa
("549"); //stringa

("discountPercentage"); //stringa
12.96; //numeber

("rating"); //stringa
4.69; //number float

("stock"); //stringa
94 //number int
`brand:Apple`; //String
true; //boolean

("category"); //stringa
("smartphones"); //stringa

("images"); //stringa
("https://robohash.org/193.35.5.176.png"); //stringa

//-----------------------------------------------------------------------------//

//2. Di che tipo è la costante x?
//Oggetto
const x = {
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};

//2.1 Qual è la sua chiave?
//Images

//2.2 Di che tipo è il suo valore?
//Array chiuso in []

//-------------------------------------------------------------------------------------//

//3. Di che tipo è la costante images?
//Array, il suo tipo è object
const images = ["image_1", "image_2", "image_3", "image_4", "image_5"];

//3.1 Di che tipo sono i suoi elementi?
//String

//3.2 Scrivi e testa in console un comando che generi come risposta 'image_3"
// images.splice(2,1)

//3.3 Scrivi e testa in console un comando che elimini il primo elemento di images
//images.shift()

//3.4 Scrivi e testa in console un comando che aggiunga un elemento "image_0" in cima alla lista
//images.unshift(image_0)

//3.5 Scrivi e testa in console un comando che aggiunga un elemento "image_6" alla fine della lista
//images.push ("image_6")

//Scrivi e testa in console un comando che stampi il valore della lunghezza di images
//images.length

//4 Di che tipo è la costante sample?
//Oggetto

const sample = {
  permission: "ALL",
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
  ],
};

//4.1 Qual è la sua chiave o quali sono le sue chiavi?
// Permission e products

//4.2 Di che tipo è il suo valore (o valori)?
//una strigna e un array

//4.3 Scrivi e testa in console un comando che stampi la chiave (o le chiavi) di sample
//console.log(Object.keys(sample))

//4.4 Scrivi e testa in console un comando che stampi il valore (o valori) di sample
//Object.values(sample)

//5. Creare un mock.
//Tutto deve essere inserito dentro un array di nome "mock".
//Gli oggetti nell'array devono contenere le seguenti chiavi: id, todo, completed, userName
//Scegliete i valori a piacere, ma con un senso (id->numero, todo->qualcosa da fare, completed->booleano.....)
//L'array deve contenere almeno 4 oggetti


//Stampare l'id del secondo oggetto
//Verificare se la chiave "todo" è presente in un determinato oggetto

const mock = [
    {id:1,
    todo: "fare la spesa",
        completed: false,
        userName: "Luca"},
    {id: 2,
    todo: "chiamare Sara",
    completed: false,
    userName: "Chiara"},
    {id: 3,
    todo: "andare in palestra",
    completed: true,
    userName: "Claudio"},
    {id: 4,
      todo: "lavare i piatti",
      completed: false,
      userName: "Marco",

    }]

    console.log(mock[0])
    console.log(mock[1].id)
    console.log(mock[2].hasOwnProperty("todo"))
        
log.clear

//Lista della spesa
const lista = ["Pane", "Pasta", "Latte", "Olio"];
// chiedere all'utente quale elemento della lista vuole rimuovere
const cosaRimuovere = prompt ("Scegli qualcosa da rimuovere");
// - chiedere l'elemento da togliere: indice / stringa
const element = lista[index];

for (let index = 0; index < lista.length; index++) {
  const alimentoCorrente = lista[index];
  
}

if (alimentoCorrente === cosaRimuovere)
{lista.splice(index, 1)};

console.log(lista);

// - fare un ciclo fino a trovare l'elemento e toglierlo usando lista.splice()

// Altro esercizio
// Scrivere un codece che dato un input numerico riesca a determinare il fattoriale
const input = prompt ("Numero di cui calcolare il fattoriale");
const numberInput = Number(input);
let output = 0;

for (let index = numberInput; index >= 1; index--) {
  output *= index;
  
}

console.log(`Il fattoriale di ${numberInput} è: ${output}`);

//for (initialExpression; condition; updateExpression)

/*The initialExpression initializes and/or declares variables and executes only once.
The condition is evaluated.
If the condition is false, the for loop is terminated.
If the condition is true, the block of code inside of the for loop is executed.
The updateExpression updates the value of initialExpression when the condition is true.
The condition is evaluated again. This process continues until the condition is false.*/

/* Scrivere il codice che data un input numerico 
     dell'utente riesca a determinare il fattoriale di quel numero;

     5 -> 5 * 4 * 3 * 2 * 1 = 120;
     4 -> 4 * 3 * 2 * 1 = 24;
  */
     const input = prompt('Numero di cui calcore il fattoriale');
     const numberInput = Number(input);
     let output = 0;
   
     // ...
   
     console.log(output) // 5!
   // partendo dal passato dall'utente eseguire un loop
     // che parte dal numero dato ed arriva ad 1,
     // ad ogni ciclo sommare il nuovo valore calcolato


//Es. sommare 10 volte il numero 5 con un ciclo while
let somma = 0;
let contatore = 0;

while (contatore < 10) {
  somma += 5; contatore++;
}
console.log (somma)



// Definiamo una variabile a cui assegniamo il valore 100 sottraiamo il numero 3 per 10 volte

let numeroPartenza = 100;
let sottrazione = 3
let contatore1 = 0;
while (contatore < 10) {
  numeroPartenza -= sottrazione; contatore ++;
}
console.log (numeroPartenza)


//Date due stringe Leone e Leotta verificare se esistono lettere uguali (uguale valore, tipo e posizione)

let a = "Leone";
let b = "Leotta";
let hannoLettereUguali; 

for (let index = 0; index < a.length; index++) {
  if (a[index]===b[index]){
    hannoLettereUguali=true;
    break;
  } else { hannoLettereUguali= false}
}

if (hannoLettereUguali){
  console.log("ci sono lettere uguali");
  } else {console.log("Non ci sono lettere uguali")}

  //Trovare i primi 15 numeri multipli di 3. Attenzione: utilizzare un solo ciclo; le variabili non devono essere create esternamente al ciclo

  for(let y = 0, i = 0; y < 15; y++, i=i+3){
    if(i == 0){
        console.log("multiplo di 3:" + 1);
    }
    else
        console.log("multiplo di 3: " + i);
}

// Stampare i  primi 20 nimeri pari

var count = 0;
var number = 2;

while (count < 20) {
  console.log(number);
  number += 2;
  count++;
}

/*1) Dato il seguente array ["gatto", "cane", "renna", "pinguino", "coccodrillo"]:
Stampare tutte le parole con doppie consonanti (ad esempio renna);
Aggiungere altri tre animali.
Sommare tutte le letter dell'array.*/

let array = ["gatto","cane","renna","pinguino","coccodrillo"];
for(let i = 0; i < array.length; i++){ // scorro le singole parole
    console.log("STAMPO PAROLA:" +array[i]);
    let parolaSingola = array[i]; 
    for(let y = 0; y < parolaSingola.length; y++ ){
        console.log("STAMPO LETTERA:", array[i][y], " altra stampa", parolaSingola[y]);
        if(parolaSingola[y] == parolaSingola[y+1]){
            console.log("Doppioni trovati" + parolaSingola[y]);
            console.log(parolaSingola);
        }
    }
}
array.push("leone", "canguro","topo")
console.log(array);
let animale = "leone,canguro,topo";

// sommare tutte le lettere dell'array
let contatore = 0;
for(let i = 0; i < array.length; i++){
    contatore += array[i].length;
}
console.log("HO " ,  contatore, " lettere");



/*2) Dato il seguente array [3,2,31,23,4]
Visualizzare il primo e l'ultimo elemento.
Aggiungere gli elemento 21,7,4;
Stampare tutti i numeri pari;
Eliminare 'elemento con valore 2 */
let arrayNumbers = [3,2,31,23,4];
var primoElemento = arrayNumbers[0];
console.log(primoElemento);
var ultimoElemento = arrayNumbers[4];
console.log(ultimoElemento);
arrayNumbers.push(21,7,4);
console.log(arrayNumbers);

for (i=0; i<arrayNumbers.length; i++) {
  let numero = arrayNumbers[i];
  if (numero%2 ===0){
    console.log(numero);
  }
}

for (let i=0; i < arrayNumbers.length; i++){
  if(arrayNumbers[i]==2) {
    arrayNumbers.splice(i,1);
  }
}
console.log(arrayNumbers)

//4) Dato un array di interi [1,3,6,14,7,2,50] invertire le posizioni.

let numeriPrima = [1,3,6,14,7,2,50];
console.log(numeriPrima.reverse);

// ESERCIZIO -  Proviamo a scrivere una function
  function capitalize(word) {
    // substring/slice + .at() + toUpperCase
    

  

  const word = "ciao"; //definiamo variabile ciao
  const primaLettera = word.charAt(0);// Prediamo la prima lettera e la mettiamo in una variabile
  console.log(primaLettera);
  //prendere la prima lettere e la rendo maiuscola
  //prendo tutti i caratteri dopo la prima
  //metto insieme i due pezzi
  //mi compiaccio di quello che ho fatto

  const altriCaratteri = ciao.slice(1);
  console.log (altriCaratteri);

  const capitalized = primaLettera + altriCaratteri;
  console.log(capitalized);

  return capitalized; // torna la parola con la prima lettera maiuscola;
  }

  console.log(capitalize("luca")); // ->  Luca
  console.log(capitalize("pippo")); // -> Pippo
  console.log(capitalize("pluto")); // -> PluTo

  // ESERCIZIO -  Data una variabile count
  // scrivere una function che ne incrementa il valore
  // scrivere una function che ne decrementa il valore
  let count = 0;
  function increment() {}
  function decrement() {}

  increment();
  console.log(count); // 1

  decrement();
  console.log(count); // 0

  increment();
  console.log(count); // 1


 // Esercizio
  // scrivere due funzioni:

  // La prima accetta una parametro numerico un torna un booleano (true/false)
  // in base al fatto che il parametro sia divisibile per due o meno.

  // La seconda function accetta due parametri:
  // il primo è un numero
  // il secondo è la funzione a cui verrà passato il primo parametro.
  // eseguire la funzione del secondo parametro solo per numeri diversi da 0;
  // stampare a schermo il risultato della seconda function

  console.clear();

  function isEven(num) {
    return num % 2 === 0;
  }
  function isOdd(num) {
    // return !isEven(num);
    return num % 2 !== 0;
  }

  function validateNumber(number, validateFn) {
    if (number === 0) {
      console.error("Inserisci un numero diverso da zero");
      return;
    }

    if (typeof validateFn !== "function") {
      console.error("Inserisci una function valida");
      return;
    }

    const resultOfValidation = validateFn(number);

    if (resultOfValidation === true) {
      console.log("la validazione di " + number + " ha tornato true");
    } else {
      console.log("la validazione di " + number + " ha tornato false");
    }

    const testo = resultOfValidation ? "evviva!" : "oh no!";
    console.log(testo);
  }

  validateNumber(10, isEven); // è vero
  validateNumber(0, isEven); // torna messaggio di errore
  validateNumber(5, isEven); // non è vero
  validateNumber(5, isOdd); // non è vero
  validateNumber(10, isOdd); // non è vero
})();
