// Interacción 2 Analog Clock

const svg = `
<svg class="icon clock" viewBox="0 0 32 32">
    <g>
        <text x="15" y="6" fill="#60b0d2" font-size="2">12</text>
        <text x="23" y="8" fill="#60b0d2" font-size="2">1</text>
        <text x="26" y="13" fill="#60b0d2" font-size="2">2</text>
        <text x="27" y="18" fill="#60b0d2" font-size="2">3</text>
        <text x="26" y="23" fill="#60b0d2" font-size="2">4</text>
        <text x="22" y="28" fill="#60b0d2" font-size="2">5</text>
        <text x="15" y="30" fill="#60b0d2" font-size="2">6</text>
        <text x="8" y="28" fill="#60b0d2" font-size="2">7</text>
        <text x="5" y="23" fill="#60b0d2" font-size="2">8</text>
        <text x="3" y="18" fill="#60b0d2" font-size="2">9</text>
        <text x="4" y="13" fill="#60b0d2" font-size="2">10</text>
        <text x="8" y="8" fill="#60b0d2" font-size="2">11</text>
        <text x="13" y="23" fill="#60b0d2" font-size="2">QUARTZ</text>

        <rect id="agujaMinutos" transform="rotate(0 16 17)" x="15.386" y="6.464" width="1.227" height="11.439" />

        <rect id="agujaHora" transform="rotate(0 16 17)" x="15.386" y="10.291" width="1.227" height="7.626" />

        <rect id="agujaSegundos" transform="rotate(0 16 17)" x="15.88" y="7.46" fill="#ccc" width="0.24" height="9.83" />

        <path d="M15.879,2.531c-8.14,0-14.739,6.599-14.739,14.739c0,8.14,6.599,14.739,14.739,14.739s14.739-6.6,14.739-14.739 C30.618,9.13,24.02,2.531,15.879,2.531z M15.879,30.852c-7.511,0-13.6-6.089-13.6-13.6c0-7.511,6.089-13.601,13.6-13.601	c7.511,0,13.6,6.089,13.6,13.601C29.479,24.763,23.391,30.852,15.879,30.852z" />
    </g>
 </svg>
 `
const clockContainer1 = document.getElementById("two");
clockContainer1.innerHTML = `<h1>Analog clock</h1> ${svg}`;

setInterval(encenderReloj,1000);

function encenderReloj(){
    const horaActual = new Date();
    const MINUTO = 60;
    const HORA = 60 * MINUTO;
    const segundos = horaActual.getSeconds();
    const minutos = (horaActual.getMinutes() * MINUTO) + segundos;
    const horas = (horaActual.getHours() * HORA) + minutos;

    document.getElementById('agujaSegundos').setAttribute('transform', 'rotate(' + 360 * (segundos / MINUTO) + ',16,17)');
    document.getElementById('agujaMinutos').setAttribute('transform', 'rotate(' + 360 * (minutos / HORA) + ',16,17)');
    document.getElementById('agujaHora').setAttribute('transform', 'rotate(' + 360 * (horas / (12 * HORA)) + ',16,17)');
    
}

encenderReloj();