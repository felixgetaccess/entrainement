function calculerAireTriangle() {
    var base = parseFloat(prompt("Entrez la base du triangle :"));
    var hauteur = parseFloat(prompt("Entrez la hauteur du triangle :"));
  
    var aire = (base * hauteur) / 2;
    console.log("L'aire du triangle est : " + aire);
  }