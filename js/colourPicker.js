// Interacción 1 Colour picker

const paletaContainer = document.querySelector("#two");

const titulo = document.createElement("h1");
titulo.textContent = "Colour Picker";
const btn_1 = document.createElement("button");
const btn_2 = document.createElement("button");

btn_1.innerText = "Show palette";
btn_2.innerText = "Hide palette";

btn_1.classList.add("btn_primario");
btn_2.classList.add("btn_primario");

btn_1.addEventListener("click",desplegarPaleta);
btn_2.addEventListener("click",ocultarPaleta);

paletaContainer.appendChild(titulo);
paletaContainer.appendChild(btn_1);

function desplegarPaleta(){
    paletaContainer.innerHTML = 
    `
    <h1>Colour Picker</h1>
    <div class="arrows-container">
        <div class="arrow arrow-one"></div>
        <div class="arrow arrow-two"></div>
        <div class="arrow arrow-three"></div>
    </div>
    <input type="color" id="favcolor" name="favcolor">
    <button id="btn_copiar" class="btn_primario" onClick="copiarAlPortapapeles()">Copy HEX code</button>
    `
    paletaContainer.appendChild(btn_2);
}

function ocultarPaleta(){
    paletaContainer.innerHTML = "<h1>Colour Picker</h1>";
    paletaContainer.appendChild(btn_1);
}

function copiarAlPortapapeles() {
    navigator.clipboard
        .writeText(document.getElementById('favcolor').value)
        .then(
            success => labelCopiado(), err => console.log("error copying code")
        );
}

function labelCopiado(){
    btn_copiar.innerText = "Copied!";
    btn_copiar.classList.add("btn_copiado");
    
}

