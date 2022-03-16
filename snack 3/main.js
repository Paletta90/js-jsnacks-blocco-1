let array = [];
let tot = 0;

let container = document.getElementById("container");

for (i = 0; i < 10; i++) {

    array[i] = Number(prompt(`Inserisci numero ${i + 1}`));

    if (!isNaN(array[i])) {
        tot += array[i];
    } else {
        alert("Inserire un numero");
    }
    
}

container.innerHTML = `Totale: ${tot}`