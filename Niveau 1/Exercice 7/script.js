function trouverMotPlusLong(tableauMots) {
    var motPlusLong = "";
  
    for (var i = 0; i < tableauMots.length; i++) {
      if (tableauMots[i].length > motPlusLong.length) {
        motPlusLong = tableauMots[i];
      }
    }
  
    console.log("Le mot le plus long est : " + motPlusLong);
  }
  
  // Exemple d'utilisation
  var mots = ["chien", "chat", "éléphant", "souris"];
  trouverMotPlusLong(mots);