const texto = "Bienvenido a funy thinghs with JavaScript";

const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

hablar(texto);
