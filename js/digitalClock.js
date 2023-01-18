const clockContainer2 = document.getElementById("three");
clockContainer2.innerHTML = "<h1>Digital clock</h1>";
const marco = document.createElement("div");
const patita1 = document.createElement("div");
patita1.classList.add("patitas");
patita1.classList.add("der");
const patita2 = document.createElement("div");
patita2.classList.add("patitas");
patita2.classList.add("izq");
const boton = document.createElement("div");
boton.classList.add("boton");

marco.classList.add("marco_reloj");

clockContainer2.appendChild(marco);
clockContainer2.appendChild(patita1);
clockContainer2.appendChild(patita2);
clockContainer2.appendChild(boton);


setInterval(encenderReloj,1000);

function encenderReloj(){
    const horaActual = new Date();
    const segundos = horaActual.getSeconds();
    const minutos = horaActual.getMinutes();
    const horas = horaActual.getHours();
    marco.innerHTML=`<h1>${horas} : ${minutos} : ${segundos}</h1>`    
}

encenderReloj();

