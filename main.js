/*============================= MOSTRAR E ESCONDER MENU =============================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*===== MOSTRAR MENU =====*/
/* Validar se a constante existe */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== ESCONDER MENU =====*/
/* Validar se a constante existe */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*============================= REMOVER MENU MOBILE =============================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // Quando clicamos em cada nav__link, removemos a classe show-menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============================= SANFONA SKILLS =============================*/
const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach(el => {
  el.addEventListener('click', toggleSkills)
})

/*============================= QUALIFICATION TABS =========================*/

/*============================= SERVICES MODAL =============================*/

/*============================= PORTIFOLIO SWIPER ===========================*/

/*============================= TESTIMONIAL =================================*/

/*============================= SCROLL SECTIONS ACTIVE LINK ==================*/