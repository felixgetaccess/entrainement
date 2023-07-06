function estPalindrome(chaine) {
  // Supprimer les caractères non alphabétiques et convertir en minuscules
  var chaineTraitee = chaine.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Vérifier si la chaîne traitée est égale à sa version inversée
  var chaineInverse = chaineTraitee.split("").reverse().join("");

  return chaineTraitee === chaineInverse;
}
