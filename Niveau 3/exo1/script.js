function compterOccurrencesCaracteres(chaine) {
    var occurrences = {};
  
    // Parcourir chaque caractère de la chaîne
    for (var i = 0; i < chaine.length; i++) {
      var caractere = chaine[i];
  
      // Vérifier si le caractère existe dans l'objet des occurrences
      if (occurrences[caractere]) {
        // Incrémenter le nombre d'occurrences du caractère existant
        occurrences[caractere]++;
      } else {
        // Ajouter le caractère à l'objet des occurrences avec un compteur initial de 1
        occurrences[caractere] = 1;
      }
    }
  
    return occurrences;
  }
  