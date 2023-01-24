const btn = document.getElementById("hamburger_btn");
const panel = document.querySelector(".panel");

const desplegarMenu = () => {
    panel.classList.toggle("is-active")
}

btn.addEventListener("click",desplegarMenu);