// chiedo se è un numero positivo positivo o negativo, se nessuno delle sue condizioni si verifica, allora è uguale a zero

// esempio con un numero positivo
var num1 =(1)

if (num1 > 0) {console.log ("numero positivo")}
else if (num1 < 0){console.log ("numero negativo")}
else {console.log ("numero zero")}

//esempio con numero negativo
var number = -1;
if (number > 0 ){
    console.log("numero positivo")
} else if(number < 0){
    console.log("numero negativo")
} else {
    console.log(0);
}

//capire se un numero è pari o dipari

var num = prompt("inserisci numero")
if (num %2 ==0) {console.log ("pari")}
else {console.log ("dispari")}