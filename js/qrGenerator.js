

const input = document.querySelector(".qr_input");
const btn_generate = document.querySelector(".qr_btn");
const QRgenerated = document.querySelector(".qr_img");

const QRcontainer = document.querySelector(".qr_container");
QRcontainer.classList.add("inactive");

QRcontainer.sty
btn_generate.addEventListener("click", () =>{
    const value = input.value;
    if(!value){
        return;
    }else{
        const newQR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        QRgenerated.src = newQR;
        QRcontainer.classList.remove("inactive"); 
    }
});


// Crear funcion para descargar img QR
// crear funcion para compartir qr
