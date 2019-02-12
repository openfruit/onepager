AOS.init();

window.onscroll = function () {navScrollChange()};

window.onresize = function () {navResizeChange()};

window.onload = function () {};

function navScrollChange() {
    if(window.innerWidth >= 992) {
        if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
            document.getElementById('navbar').style.padding = "0.25em 3em 0.25em 3em";
            document.getElementById('navbar').style.backgroundColor = "rgb(58, 175, 126)";
            document.getElementById('navbar').style.boxShadow = "0px 3px 10px 0px rgba(32,97,69,1)";
    
            
            //Logo Color
            document.getElementById('nav-brand').style.color = "white";
            document.getElementById('nav-brand').style.letterSpacing = "2px";
    
            //Navlink Color
            for (let i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
                document.getElementsByClassName('nav-link')[i].classList.add('headerScroll');
            }
        } else {
            document.getElementById('navbar').style.padding = "1.5em 3em 1.5em 3em";
            document.getElementById('navbar').style.backgroundColor = "transparent";
            document.getElementById('navbar').style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
            
            //Logo Color
            document.getElementById('nav-brand').style.color = "black";
            document.getElementById('nav-brand').style.letterSpacing = "5px";
    
            //Navlink Color
            for (let i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
                document.getElementsByClassName('nav-link')[i].classList.remove('headerScroll');
            }
        }
    }
}

function navResizeChange() {
    if(window.innerWidth >= 992) {
        document.getElementById('nav-menu').style.display = "none";
        document.getElementById('nav-links').style.display = "flex";
    } else {
        document.getElementById('nav-menu').style.display = "flex";
        document.getElementById('nav-links').style.display = "none";
    }
}

function onLoadChecks() {
    navResizeChange();
}