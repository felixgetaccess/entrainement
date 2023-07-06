function filtrerMotsMajuscule(tableau) {
  var tableauMajuscule = [];

  for (var i = 0; i < tableau.length; i++) {
    var mot = tableau[i];
    if (mot[0] === mot[0].toUpperCase()) {
      tableauMajuscule.push(mot);
    }
  }

  return tableauMajuscule;
}
