const play= document.querySelector("#play");
const pausa= document.querySelector ("#pausa")
const seguir= document.querySelector("#seguir");
const horas= document.querySelector("#horas");
const minutos= document.querySelector ("#minutos")
const segundos= document.querySelector("#segundos");


let tiempo = 0;
let corriendo = false;

play.addEventListener("click", function() {
  if (!corriendo) {
    corriendo = true;
    tiempoInicio = setInterval(function() {
      tiempo++;
      horas.innerHTML = Math.floor(tiempo / 3600);
      minutos.innerHTML = Math.floor((tiempo % 3600) / 60);
      segundos.innerHTML = Math.floor(tiempo % 60);
    }, 1000);
  }
});

pausa.addEventListener("click", function() {
  if (corriendo) {
    corriendo = false;
    clearInterval(tiempoInicio);
  }
});

seguir.addEventListener("click", function() {
  if (corriendo) {
    clearInterval(tiempoInicio);
    corriendo = false;
  }
  
  tiempo = 0;
  horas.innerHTML = '00';
  minutos.innerHTML = '00';
  segundos.innerHTML = '00';
  
  seguir.click();
});