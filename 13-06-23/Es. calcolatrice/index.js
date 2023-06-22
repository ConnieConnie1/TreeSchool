
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

const output = document.getElementById('output');

function printInput(){
  output.innerHTML = (`Il nome e cognome sono :  ${input1.value} ${input2.value}`);
}

//Cambio colore

const colors = ["red", "green", "blue", "yellow", "purple", "gray", "white"];

let randomI = Math.floor(Math.random() * colors.length);
randomI = colors[randomI]

setTimeout(() => {
    document.body.style.backgroundColor = randomI;
  }, "1000");

  
