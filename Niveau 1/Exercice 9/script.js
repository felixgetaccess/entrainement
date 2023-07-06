function estPalindrome(mot) {
  var motInverse = mot.split("").reverse().join("");

  if (mot === motInverse) {
    console.log(mot + " est un palindrome.");
  } else {
    console.log(mot + " n'est pas un palindrome.");
  }
}

// Exemple d'utilisation
var mot = "radar";
estPalindrome(mot);
