function calculerAireTriangle() {
    var base = parseFloat(document.getElementById("base").value);
    var hauteur = parseFloat(document.getElementById("hauteur").value);
  
    var aire = (base * hauteur) / 2;
    document.getElementById("resultat").textContent = "L'aire du triangle est : " + aire;
  }