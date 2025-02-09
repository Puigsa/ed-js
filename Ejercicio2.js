function esPrimo(numero) {
for (var i=2; i < numero; i++){
    if (numero % i == 0){
        return false;
    }
}

}

function esPalindromo(cadena) {
    cadena = numero.toString();
    cadenaReverse = cadena.reverse();
    if (cadena == cadenaReverse){
    return true;
    }
}

var numeroPrompt = parseInt(prompt("Introduce el número X (se comprobará desde 1 hasta X)"));

var arrayPrimos, arrayPalindromo, arrayAmbos = [];
for (var i=1; i<=numeroPrompt; i++){
 var primo = esPrimo(i);
 if (primo){
    arrayPrimos.push(i);
 }
 var palindromo = esPalindromo(i);
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







