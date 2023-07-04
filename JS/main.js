// hanburger-menu
const navMenu = document.querySelector(".nav-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const xMenu = document.querySelector(".xmenu");
const subButton = document.querySelector(".sub-btn");
const footerMail = document.querySelector("#footer-email");
const regFooterMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

hamburgerMenu.addEventListener("click", show);
xMenu.addEventListener("click", hide);
subButton.addEventListener("click", subButtonClicked);

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

// Sub button

function subButtonClicked() {
  if (!regFooterMail.test(footerMail.value)) {
    alert("Email is not valid");
  } else {
    alert("U are subscribed for newsletter");
  }
}

// carousel
