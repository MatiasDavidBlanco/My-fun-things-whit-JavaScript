

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


// btn_share.addEventListener("click", () => {
//     btn_share.href = `href="whatsapp://send?text=https://elcssar.com`;
// })

//Creamos una función que se ejecutará cuando el usuario haga click en el botón
btn_share.addEventListener("click", (event) => {
 
  // Verificamos si el navegador tiene soporte para el API compartir
  if ("share" in navigator) {
    navigator
      .share({
        // Defino un título para la ventana de compartir
        title: "Comparte este QR en tu plataforma favorita",
 
        // Detecto la URL actual de la página 
        url: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
      })
 
      // Mensaje en Consola cuando se presiona el botón de compartir 
      .then(() => {
        console.log("Contenido Compartido !");
      })
      .catch(console.error);
  } else {
    // Si el navegador no tiene soporte para la API compartir, le enviamos un mensaje al usuario
    alert('Lo siento, este navegador no tiene soporte para recursos compartidos.')
  }
});

// crear funcion para compartir qr
