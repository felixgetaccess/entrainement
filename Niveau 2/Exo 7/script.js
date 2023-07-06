function calculerMoyenne(nombres) {
  var somme = 0;

  // Calculer la somme de tous les nombres dans le tableau
  for (var i = 0; i < nombres.length; i++) {
    somme += nombres[i];
  }

  // Calculer la moyenne en divisant la somme par le nombre d'éléments dans le tableau
  var moyenne = somme / nombres.length;

  return moyenne;
}
