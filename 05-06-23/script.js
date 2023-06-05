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
        

