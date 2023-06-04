const getBtn = document.getElementById("menu-btn");
const getNav = document.getElementById("menu")

function navToggle() {
    getBtn.classList.toggle("open");
    getNav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

getBtn.addEventListener("click", navToggle);



const getImgSwitcher = document.getElementById("img-switcher");
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

function ImgSwitcher() {
    let rundom = Math.floor(Math.random() * images.length);
    let url = images[rundom];
    getImgSwitcher.style.backgroundImage = `url(${url})`;
}

let num = 4
setInterval(() => 
{

    if (num > 9){
        num = 4;
    }
    getImgSwitcher.style.backgroundImage = `url(styles/img${num}.jpg)`;
    num++;   
}, 5000);
