/*============================== MENU SHOW Y HIDDEN ==================================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav-close')

/*========== MENU SHOW ==========*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========== MENU HIDDEN ==========*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*==================================== REMOVE MENU MOBILE =======================================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*================================== ACCORDION İNTERESTS ========================================= */
const interestContent = document.getElementsByClassName('interest__content'),
    interestHeader = document.querySelectorAll('.interest__header')

function toggleInterests() {
    let itemclass = this.parentNode.className;

    for (i = 0; i < interestContent.length; i++) {
        interestContent[i].className = 'interest__content interest__close';
    }
    if (itemclass === 'interest__content interest__close') {
        this.parentNode.className = 'interest__content interest__open';
    }
}
interestHeader.forEach((eL) => {
    eL.addEventListener('click', toggleInterests)
})


/*==================================== ACCORDION SKILLS ==========================================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach((eL) => {
    eL.addEventListener('click', toggleSkills)
})


/*====================================== SERVICES MODAL =========================================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/*====================================== PORTFOLIO SWIPER  ===============================================*/
let swiper1 = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


/*=================================== SCROLL SECTIONS ACTIVE LINK ===========================================0*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*========================================== CHANGE BACKGROUND HEADER =====================================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 150) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/*=================================== SHOW SCROLL UP ======================================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 580) {
        scrollUp.classList.add('show-scroll')
    }
    else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)


/*============================================ DARK LIGHT THEME ================================================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


var message = "Web sitemde sağ tıklama engeli vardır. Yazıları kopyalamak için CTRL + C kısayolunu kullanabilirsiniz.";
function clickIE4() {
    if (event.button == 2) {
        alert(message);
        return false;
    }
}

function clickNS4(e) {
    if (document.layers || document.getElementById && !document.all) {
        if (e.which == 2 || e.which == 3) {
            alert(message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS4;
}
else if (document.all && !document.getElementById) {
    document.onmousedown = clickIE4;
}
document.oncontextmenu = new Function("alert(message);return false")


/* var openBtn = document.querySelector(".about__button");

openBtn.addEventListener("click",() => {
  
  var veri = prompt("Lütfen görüntülemek için parolayı yazınız...");
  if(veri === "332826"){
     alert("Şifre doğru! CV'yi görüntülemek için bu mesajı kapatın.");
  }
  else{
    alert("Şifre yanlış!");
  }
}); */

/* ======================================================================================================== */

/* const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg__loading");
let load = 0;
const blurring = () => {
    load++;
    if (load > 99) clearInterval(int);
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 3, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
let int = setInterval(blurring, 80); */