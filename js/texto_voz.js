// Se inicializa API speechSynthesis
var synth = window.speechSynthesis;

// captura de  las referencias de todos los elementos DOM involucrados en la IU

const voice_generator_container = document.getElementById("six");
const texto = document.getElementById("text-input");
const btn_generate_voice = document.querySelector(".btn_generate_voice");
const lista_voces = document.getElementById("voces");
const onda_sonora = document.querySelector("#onda_sonora");


var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voces = [];

//Definición de función que genea la lista de voces disponibles para elegir

function generarListaVoces(){
    voces = speechSynthesis.getVoices();

    // Se recorre el arreglo voces y por cada elemento se crea un option que se agrega al select
    for (let i=0; i < voces.length; i++){
        const opcion = document.createElement("option");
        opcion.textContent = `${voces[i].name} (${voces[i].lang})`;
        if(voces[i].default){
            opcion.textContent += " --DEFAULT";
        }
        opcion.setAttribute("data-lang", voces[i].lang);
        opcion.setAttribute("data-name", voces[i].name);
        lista_voces.appendChild(opcion);
    }

}

// Llamada a la función 
generarListaVoces();

// Configuración para que funcione en Mozzila
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = generarListaVoces;
}


btn_generate_voice.addEventListener("click",hablar);

function hablar(){
   
    if (!texto.value) {
        animarOnda();
        synth.speak(new SpeechSynthesisUtterance("Primero, ingrese un texto para pronunciar por favor"));
        desanimarOnda();
        return;
    }
    animarOnda();
    const hablar_esto = new SpeechSynthesisUtterance(texto.value);
    desanimarOnda();
    // Se obtiene la voz que quiero utilizar
    const opcion_seleccionda = lista_voces.selectedOptions[0].getAttribute('data-name');
    // var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    // Se busca en la lista de voces la opción seleccionada comparando el atributo name.
    for(i = 0; i < voces.length ; i++) {
        if(voces[i].name === opcion_seleccionda) {
            hablar_esto.voice = voces[i];
            break;
        }
    }

    //se configura con el valor correpondiente a la propiedad pitch y rate

    hablar_esto.pitch = pitch.value;
    hablar_esto.rate = rate.value;

    //se produce la reproducción 
    synth.speak(hablar_esto);

}

//se modifica valore de cada input

pitch.onchange = function() {
    pitchValue.textContent = pitch.value;
  }
  
rate.onchange = function() {
    rateValue.textContent = rate.value;
}
  
//Función para animar onda sonora

function animarOnda(){
    for (let i=1; i<42; i++){
        const path= document.getElementById("Vector_"+i)
        path.classList.toggle("path_animado") 
    }
}
   
function desanimarOnda(){
    console.log("desaniumando onda")
    // for (let i=1; i<42; i++){
    //     const path= document.getElementById("Vector_"+i)
    //     path.classList.remove("path_animado") 
    // }
}


