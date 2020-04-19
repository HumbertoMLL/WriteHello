var tope = 0;
var intervalo;
function mensaje() {
  console.log("hola desde javascript");
  tope++;
  if (tope >= 10) {
    clearInterval(intervalo);
  }
}
function intervalo() {
  intervalo = setInterval(mensaje, 1000);
}
intervalo();
