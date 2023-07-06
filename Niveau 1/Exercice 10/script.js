function calculerSuiteFibonacci() {
  var n = parseInt(prompt("Entrez le nombre de termes de la suite de Fibonacci :"));

  var termes = [0, 1];
  for (var i = 2; i < n; i++) {
    var nouveauTerme = termes[i - 1] + termes[i - 2];
    termes.push(nouveauTerme);
  }

  console.log("Les " + n + " premiers termes de la suite de Fibonacci sont :");
  for (var j = 0; j < n; j++) {
    console.log(termes[j]);
  }
}
