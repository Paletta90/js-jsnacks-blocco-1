let word1 = String(prompt("Inserisci una parola"));
let word2 = String(prompt("Inserisci una seconda parola"));

let container = document.getElementById("container");

if(word1.length > word2.length){
    container.innerHTML = `La prima parola (${word1} --> lenght: ${word1.length}) è più lunga della seconda parola (${word2} --> length: ${word2.length})`
}else if(word1.length < word2.length){
    container.innerHTML = `La prima parola (${word1} --> lenght: ${word1.length}) è più corta della seconda parola (${word2} --> length: ${word2.length})`
}else{
    container.innerHTML = `Le due parole hanno stessa lunghezza`
}