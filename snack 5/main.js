let array = [];
let x;

let container = document.getElementById("container");

for(i = 0; i < 6; i++){

    x = Number(prompt(`Inserisci numero ${i + 1}`));

    if(x % 2 != 0){
        array.push(x);
    }    
}

for(i = 0; i < array.length; i++){
    container.innerHTML += `<div>Numero ${i+1}: ${array[i]}</div>`
}