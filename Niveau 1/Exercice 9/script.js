var nombreAleatoire = Math.floor(Math.random() * 100) + 1;
var tentative = 0;

function devinerNombre() {
  var proposition = parseInt(prompt("Devinez le nombre (entre 1 et 100) :"));
  tentative++;

  if (proposition < nombreAleatoire) {
    console.log("Trop petit !");
    devinerNombre();
  } else if (proposition > nombreAleatoire) {
    console.log("Trop grand !");
    devinerNombre();
  } else {
    console.log("Bravo ! Vous avez deviné le nombre en " + tentative + " tentative(s).");
  }
}
