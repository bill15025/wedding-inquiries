const getBtn = document.getElementById("menu-btn");
const getNav = document.getElementById("menu")

function navToggle() {
    getBtn.classList.toggle("open");
    getNav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

getBtn.addEventListener("click", navToggle);