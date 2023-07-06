function trierLivresParTitre(livres) {
  // Utilisation de la méthode sort() pour trier les livres par titre
  livres.sort(function(a, b) {
    var titreA = a.titre.toLowerCase();
    var titreB = b.titre.toLowerCase();

    if (titreA < titreB) {
      return -1;
    } else if (titreA > titreB) {
      return 1;
    } else {
      return 0;
    }
  });

  return livres;
}
