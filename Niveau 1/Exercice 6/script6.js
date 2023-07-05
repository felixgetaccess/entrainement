function verifierPairOuImpair() {
  var nombre = parseFloat(document.getElementById("nombre").value);
  
  if (nombre % 2 === 0) {
    console.log(nombre + " est un nombre pair.");
  } else {
    console.log(nombre + " est un nombre impair.");
  }
}
