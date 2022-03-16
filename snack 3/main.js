let tot = 0;

let container = document.getElementById("container");

for (i = 0; i < 10; i++) {

    tot += Number(prompt(`Inserisci numero ${i + 1}`))
}

container.innerHTML = `Totale: ${tot}`