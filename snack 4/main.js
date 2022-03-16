let array = ["Marco", "Paolo", "Davide", "Simone", "Andrea"]
let check = false;

let container = document.getElementById("container");

let invitato = prompt("Inserire nome invitato");


for(i = 0; i < array.length; i++){
    if(invitato == array[i]){
        check = true;
    }
}

if(check){
    container.innerHTML = `${invitato} puoi entrare alla festa`;
}else{
    container.innerHTML = `${invitato} non sei stato invitato`;

}