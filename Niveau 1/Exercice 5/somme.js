function calculerSommeTableau() {
  var tableau = [1, 2, 3, 4, 5]; // Exemple de tableau de nombres

  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }

  console.log("La somme des nombres dans le tableau est : " + somme);
}
