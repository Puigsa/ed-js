function esPrimo(numero) {
for (var i=2; i < numero; i++){
    if (numero % i == 0){
        return false;
    }
    
}
return true;

}

function esPalindromo(cadena) {
    
    let cadenaReverse = cadena.split("").reverse().join("");
    if (cadena == cadenaReverse){
    return true;
    }
    return false;
}

var numeroPrompt = parseInt(prompt("Introduce el número X (se comprobará desde 1 hasta X)"));

var arrayPrimos = [];
var arrayPalindromo = [];
var arrayAmbos = [];
for (var i=1; i<=numeroPrompt; i++){
 var primo = esPrimo(i);
 if (primo){
    arrayPrimos.push(i);
 }
 var palindromo = esPalindromo(i.toString());
 if (palindromo){
    arrayPalindromo.push(i);
 }
 if (primo && palindromo){
    arrayAmbos.push(i);
 }

}

console.log("PRimos: " + arrayPrimos);
console.log("Palindromos: " + arrayPalindromo);
console.log("Primos y palindromos: " + arrayAmbos);







