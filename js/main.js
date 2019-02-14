AOS.init();

let navMenuToggled = false;

const navMenuButton = document.getElementById('nav-menu');

window.onscroll = navScrollChange;

window.onresize = changeMenuStyle;

window.onload = () => {
    navScrollChange()
    changeMenuStyle()
};

navMenuButton.onclick = toggleNavMenuButton;

function toggleNavMenuButton() {
    navigator.vibrate([25]);

    let navLinks = document.getElementById('nav-links').style;
    if (!navMenuToggled) {
        navMenuToggled = true;
        navLinks.display = "flex";
    } else {
        navMenuToggled = false;
        navLinks.display = "none";
    }
}

function navScrollChange() {
    let navbarStyle = document.getElementById('navbar').style;
    let brandStyle = document.getElementById('nav-brand').style;
    let navLinks = document.getElementsByClassName('nav-link');

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
        brandStyle.color = "black";
        brandStyle.letterSpacing = "5px";

        //Navlink Color
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('headerScroll');
        }
    }
}

function changeMenuStyle() {
    let navbarStyle = document.getElementById('navbar').style;
    let navMenuStyle = document.getElementById('nav-menu').style;
    let navLinkStyle = document.getElementById('nav-links').style;
    let brandStyle = document.getElementById('nav-brand').style;

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

let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },
});