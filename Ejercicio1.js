function encontrarPatron(cadena, patron)
{
  
  var encontrados = 0;

  for (let i = 0; i < cadena.length; i++) {
 
    if(cadena.indexOf(patron, i) === i) {
      encontrados++;
    }
  }
  return encontrados;
}

function totalPatrones(cadena, arrayPatrones) {

  var resultadoTotal = 0;

 for (var i=0; i< arrayPatrones.length; i++){
    resultadoTotal = resultadoTotal 
    + encontrarPatron(cadena.toLowerCase(), arrayPatrones[i].toLowerCase());
 }

  return resultadoTotal;
}

var textoUsuario=prompt('Introduce cadena de texto a verificar: ');

var listaPatrones = ["AA","BCA","RBT","JT"]; 



console.log(totalPatrones(textoUsuario, listaPatrones));
