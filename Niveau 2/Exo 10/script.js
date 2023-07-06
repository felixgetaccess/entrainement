function trouverElementsCommuns(tableau1, tableau2) {
  var elementsCommuns = [];

  // Parcourir le premier tableau
  for (var i = 0; i < tableau1.length; i++) {
    var element = tableau1[i];

    // Vérifier si l'élément existe dans le deuxième tableau
    if (tableau2.includes(element)) {
      // Ajouter l'élément à la liste des éléments communs
      elementsCommuns.push(element);
    }
  }

  return elementsCommuns;
}
