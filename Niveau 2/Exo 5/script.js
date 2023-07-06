function compterVoyelles(chaine) {
  var voyelles = ["a", "e", "i", "o", "u"];
  var compteur = 0;

  // Convertir la chaîne en minuscules pour un comptage insensible à la casse
  var chaineMinuscules = chaine.toLowerCase();

  for (var i = 0; i < chaineMinuscules.length; i++) {
    if (voyelles.includes(chaineMinuscules[i])) {
      compteur++;
    }
  }

  return compteur;
}
