function estNombrePremier(nombre) {
  if (nombre <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      return false;
    }
  }

  return true;
}
