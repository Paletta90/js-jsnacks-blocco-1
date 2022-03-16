let x = Number(prompt("Inserisci un numero x"));
let y = Number(prompt("inserisci un numero y"));

let container = document.getElementById("container");

if (!isNaN(x) && !isNaN(y)) {

    if (x > y) {
        container.innerHTML = `x: ${x} è maggiore di y: ${y}`
    } else if (x < y) {
        container.innerHTML = `x: ${x} è minore di y: ${y}`
    } else {
        container.innerHTML = `x: ${x} è uguale a y: ${y}`
    }
    
}else{
    alert("Inserire dei numeri");
}