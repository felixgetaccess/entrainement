function inverserOrdreMots(chaine) {
  // Séparer la chaîne en un tableau de mots
  var mots = chaine.split(" ");

  // Inverser l'ordre des mots dans le tableau
  mots.reverse();

  // Rejoindre les mots en une seule chaîne séparée par des espaces
  var chaineInverse = mots.join(" ");

  // Retourner la chaîne inversée
  return chaineInverse;
}
