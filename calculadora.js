const uno= document.querySelector("#uno");
const dos= document.querySelector ("#dos")
const tres= document.querySelector("#tres");
const cuatro= document.querySelector ("#cuatro")
const cinco= document.querySelector("#cinco");
const seis= document.querySelector ("#seis")
const siete= document.querySelector("#siete");
const ocho= document.querySelector ("#ocho")
const nueve= document.querySelector("#nueve");
const cero= document.querySelector ("#cero")
const digitos = document.querySelector(".digitos");
const tablero = document.querySelector(".tablero");
const punto = document.querySelector("#punto");
const suma = document.querySelector("#suma");
const restar = document.querySelector("#restar");
const multiplicacion = document.querySelector("#multiplicacion");
const division = document.querySelector("#division");
const porcentaje = document.querySelector("#porcentaje");
const igualdad = document.querySelector("#igualdad");
const borrar = document.querySelector("#borrar");
const borrarTodo = document.querySelector("#borrarTodo");



uno.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "1";
    } else {
      digitos.textContent += "1";
    }
});

dos.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "2";
    } else {
      digitos.textContent += "2";
    }
});

tres.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "3";
    } else {
      digitos.textContent += "3";
    }
});

cuatro.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "4";
    } else {
      digitos.textContent += "4";
    }
});

cinco.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "5";
    } else {
      digitos.textContent += "5";
    }
});

seis.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "6";
    } else {
      digitos.textContent += "6";
    }
});

siete.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "7";
    } else {
      digitos.textContent += "7";
    }
});

ocho.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "8";
    } else {
      digitos.textContent += "8";
    }
});

nueve.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "9";
    } else {
      digitos.textContent += "9";
    }
});

cero.addEventListener("click", function(){
    if (digitos.textContent === "0") {
      digitos.textContent = "0";
    } else {
      digitos.textContent += "0";
    }
});

punto.addEventListener("click", function(){
    
    digitos.textContent += ".";
    
});

borrarTodo.addEventListener("click", function(){
    
    digitos.textContent = "0";
    
});


borrar.addEventListener("click", function(){
    digitos.textContent = digitos.textContent.slice(0, -1);
});

suma.addEventListener("click", function(){
    operacion = "+";
    primerValor = parseFloat(digitos.textContent);
    digitos.textContent = "";
});

restar.addEventListener("click", function(){
  operacion = "-";
  primerValor = parseFloat(digitos.textContent);
  digitos.textContent = "";
});

multiplicacion.addEventListener("click", function(){
  operacion = "x";
  primerValor = parseFloat(digitos.textContent);
  digitos.textContent = "";
});

division.addEventListener("click", function(){
  operacion = "&#247;";
  primerValor = parseFloat(digitos.textContent);
  digitos.textContent = "";
});

porcentaje.addEventListener("click", function(){
  operacion = "%";
  primerValor = parseFloat(digitos.textContent);
  digitos.textContent = primerValor/100;
  
});
  
igualdad.addEventListener("click", function(){
  segundoValor = parseFloat(digitos.textContent);
  if(operacion === "+"){
    digitos.textContent = primerValor + segundoValor;
  } else if(operacion === "-"){
    digitos.textContent = primerValor - segundoValor;
  } else if (operacion === "x"){
    digitos.textContent = primerValor * segundoValor;
  } else if (operacion === "&#247;"){
    digitos.textContent = primerValor / segundoValor;
  } 
});


