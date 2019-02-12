AOS.init();

window.onscroll = navScrollChange;

window.onresize = changeMenuStyle;

window.onload = () => {
    navScrollChange()
    changeMenuStyle()
};

function navScrollChange() {
    if(window.innerWidth < 992){
        return;
    }

    let navbarStyle = document.getElementById('navbar').style;
    let brandStyle = document.getElementById('nav-brand').style;
    let navLinks = document.getElementsByClassName('nav-link');

    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        navbarStyle.padding = "0.25em 3em 0.25em 3em";
        navbarStyle.backgroundColor = "rgb(58, 175, 126)";
        navbarStyle.boxShadow = "0px 3px 10px 0px rgba(32,97,69,1)";

        //Logo Color
        brandStyle.color = "white";
        brandStyle.letterSpacing = "2px";

        //Navlink Color
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.add('headerScroll');
        }
    } else {
        navbarStyle.padding = "1.5em 3em 1.5em 3em";
        navbarStyle.backgroundColor = "transparent";
        navbarStyle.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
        
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
    let navMenuStyle = document.getElementById('nav-menu').style;
    let navLinkStyle = document.getElementById('nav-links').style;
    
    if(window.innerWidth >= 992) {
        navMenuStyle.display = "none";
        navLinkStyle.display = "flex";
    } else {
        navMenuStyle.display = "flex";
        navLinkStyle.display = "none";
    }
}