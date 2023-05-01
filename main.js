// hanburger-menu
const navMenu = document.querySelector(".nav-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const xMenu = document.querySelector(".xmenu");

hamburgerMenu.addEventListener("click", show);
xMenu.addEventListener("click", hide);

function show() {
  navMenu.style.display = "flex";
  navMenu.style.top = "0";
}

function hide() {
  navMenu.style.top = "-100%";
}

// sticky navbar
const navBar = document.querySelector(".navbar");

window.onscroll = () => {
  this.scrollY > 20
    ? navBar.classList.add("sticky")
    : navBar.classList.remove("sticky");
};

// carousel
