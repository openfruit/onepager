AOS.init();

const navMenuButton1 = document.getElementById('nav-link-1');
const navMenuButton2 = document.getElementById('nav-link-2');
const navMenuButton3 = document.getElementById('nav-link-3');
const navMenuButton4 = document.getElementById('nav-link-4');
const navMenuButton5 = document.getElementById('nav-link-5');
const navMenuButton = document.getElementById('nav-menu');

const downloadButton = document.getElementById('download');
const downloadOptIn = document.getElementById('download-opt-in');
const dsvgoOptIn = document.getElementById('dsvgo-opt-in');

let navMenuToggled = false;
let acceptedDsvgo = false;

let navLinkStyle = document.getElementById('nav-links').style;
let navbarStyle = document.getElementById('navbar').style;
let brandStyle = document.getElementById('nav-brand').style;
let navLinks = document.getElementsByClassName('nav-link');
let navMenuStyle = document.getElementById('nav-menu').style;

let dsvgoDisclaimerStyle = document.getElementById('dsvgo-disclaimer-box').style;
let optInDownload = document.getElementById('download-opt-in').style;

let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },
});

function hideNavbarLinksMobile() {
    if(window.innerWidth < 992 && navLinkStyle.display == "flex") {
        navLinkStyle.display = "none";
    } else {
        return;
    }
}

function navMenuButtonClick(navMenuButton, toNavigate) {
    navMenuButton.onclick = () => {
        hideNavbarLinksMobile();
    
        document.querySelector("#" + toNavigate).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
}

navMenuButtonClick(navMenuButton1, "section-1");
navMenuButtonClick(navMenuButton2, "section-2");
navMenuButtonClick(navMenuButton3, "section-3");
navMenuButtonClick(navMenuButton4, "section-4");
navMenuButtonClick(navMenuButton5, "section-5");

window.onscroll = () => {navScrollChange()};

window.onresize = () => {changeMenuStyle()};

window.onload = () => {
    navScrollChange()
    changeMenuStyle()
};

downloadButton.onclick = () => {toggleDsvgo()};

navMenuButton.onclick = () => {toggleNavMenuButton()};

dsvgoOptIn.onclick = () => {checkForDsvgoOptIn()};

function toggleNavMenuButton() {
    navigator.vibrate([25]);

    if (!navMenuToggled) {
        navMenuToggled = true;
        navLinkStyle.display = "flex";
    } else {
        navMenuToggled = false;
        navLinkStyle.display = "none";
    }
}

function toggleDsvgo() {
    dsvgoDisclaimerStyle.display = "flex";
}

function checkForDsvgoOptIn() {
    acceptedDsvgo = !acceptedDsvgo;

    if(acceptedDsvgo) {
        optInDownload.display = "inline-flex";
    } else {
        optInDownload.display = "none";
    }
}

function navScrollChange() {
    if(window.innerWidth < 992){
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('headerScroll');
        }
        return;
    }

    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        navbarStyle.padding = "0.25em 3em 0.25em 3em";
        navbarStyle.backgroundColor = "rgba(255,255,255,0.97)";
        navbarStyle.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";

        //Logo Color
        brandStyle.color = "black";
        brandStyle.letterSpacing = "2px";

        //Navlink Color
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.add('headerScroll');
        }
    } else {
        navbarStyle.padding = "1.5em 3em 1.5em 3em";
        navbarStyle.backgroundColor = "transparent";
        navbarStyle.boxShadow = "";
        
        //Logo Color
        brandStyle.color = "white";
        brandStyle.letterSpacing = "5px";

        //Navlink Color
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('headerScroll');
        }
    }
}

function changeMenuStyle() {
    if(window.innerWidth >= 992) {
        navMenuStyle.display = "none";
        navLinkStyle.display = "flex";
        navbarStyle.padding = "1.5em 3em 1.5em 3em";
        navScrollChange();
    } else {
        navbarStyle.backgroundColor = "white";
        navLinkStyle.color = "black";
        brandStyle.color = "black";
        navMenuStyle.display = "flex";
        navLinkStyle.display = "none";
        navbarStyle.padding = "0";
    }
}