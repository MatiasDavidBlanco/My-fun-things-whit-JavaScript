

const input = document.querySelector(".qr_input");
const btn_generate = document.querySelector(".qr_btn");
const QRgenerated = document.querySelector(".qr_img");
const btn_download = document.getElementById("btn_download");
const btn_share = document.getElementById("btn_share");

const QRcontainer = document.querySelector(".qr_container");
QRcontainer.classList.add("inactive");


btn_generate.addEventListener("click", () =>{
    const value = input.value;
    if(!value){
        console.log("enter text")
        input.classList.add("alerta");
     
    }else{
        input.classList.remove("alerta");
        const newQR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        QRgenerated.src = newQR;
        QRcontainer.classList.remove("inactive"); 
    }
});

btn_download.addEventListener("click", () => {
    btn_download.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    btn_download.target = "_blank"


});

// crear funcion para compartir qr
