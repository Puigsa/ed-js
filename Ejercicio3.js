
var numeroPrompt, sumaTotal = 0, media, mayor, menor, contPares = 0, contImpares = 0;
var arrayLista = [];


do {
    numeroPrompt = parseInt(prompt("Introduce un número mayor que 1:"));
    if(numeroPrompt>1){
        arrayLista.push (numeroPrompt);
        sumaTotal = sumaTotal + numeroPrompt;
    }
    
    if (numeroPrompt%2==0 && numeroPrompt > 1 ){
        contPares++;
    }
    if (numeroPrompt%2!=0 && numeroPrompt>1){
        contImpares++;
    } 


}while (numeroPrompt >1);

media = sumaTotal/arrayLista.length;
mayor = Math.max(...arrayLista);
menor = Math.min(...arrayLista);

console.log("Lista de número introducidos: " + arrayLista);
console.log("Números pares: " + contPares);
console.log("Números Impares: " + contImpares);
console.log("Suma total: " + sumaTotal);
console.log("Media: " + media);
console.log("Mayor: " + mayor);
console.log("Menor: " + menor);
