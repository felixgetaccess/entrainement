function obtenirDiviseurs(nombre) {
  var diviseurs = [];

  // Itérer de 1 à la moitié du nombre pour trouver les diviseurs
  for (var i = 1; i <= nombre / 2; i++) {
    if (nombre % i === 0) {
      diviseurs.push(i);
    }
  }

  // Ajouter le nombre lui-même comme diviseur
  diviseurs.push(nombre);

  return diviseurs;
}
