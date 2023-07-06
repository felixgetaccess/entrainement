function filtrerNombresPairs(tableau) {
    var tableauPairs = [];
  
    for (var i = 0; i < tableau.length; i++) {
      if (tableau[i] % 2 === 0) {
        tableauPairs.push(tableau[i]);
      }
    }
  
    return tableauPairs;
  }
  