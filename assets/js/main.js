// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// if(navToggle){
//    navToggle.addEventListener('click', () =>{
//       navMenu.classList.add('show-menu')
//    })
// }

// if(navClose){
//    navClose.addEventListener('click', () =>{
//       navMenu.classList.remove('show-menu')
//    })
//  }

// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () =>{
//    const navMenu = document.getElementById('nav-menu')
//    navMenu.classList.remove('show-menu')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
 }
 

window.addEventListener('scroll', blurHeader)

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   emailjs.sendForm('service_dpdr19c','template_58gqdza','#contact-form','2rJh_Hsf1mpyyKCU1')
      .then(() =>{
         contactMessage.textContent = 'Message sent successfully ✅! We appreciate your confidence in our services, soon will get back to you.'
         setTimeout(() =>{
            contactMessage.textContent = ''
         }, 5000)
         contactForm.reset()

      }, () =>{
         contactMessage.textContent = 'Message not sent (service error) ❌'
      })
}

contactForm.addEventListener('submit', sendEmail)

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			   sectionTop = current.offsetTop - 58,
			   sectionId = current.getAttribute('id'),
			   sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		// if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
		// 	sectionsClass.classList.add('active-link')
		// }else{
		// 	sectionsClass.classList.remove('active-link')
		// }                                                    
	})
}

window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})

const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Agregar clase show-menu a nav menu
        nav.classList.toggle('show-menu')
        // Agregar show-icon para mostrar y ocultar el icono del menú
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /*=============== SHOW DROPDOWN MENU ===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item')
 
 // 1. Selecionar cada dropdown item
 dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button') 
 
     // 2. Selecionar cada click del botón
     dropdownButton.addEventListener('click', () =>{
         // 7. Seleccionar la clase show-dropdown actual
         const showDropdown = document.querySelector('.show-dropdown')
         
         // 5. Llamar a la funcion toggleItem
         togglesItem(item)
 
         // 8. Remover la clase show-dropdown de otros items
         if(showDropdown && showDropdown!== item){
             togglesItem(showDropdown)
         }
     })
 })
 
 // 3. Crear una función para mostrar el dropdown
 const togglesItem = (item) =>{
     // 3.1. Selecionar cada dropdown content
     const dropdownContainer = item.querySelector('.dropdown__container')
 
     // 6. Si el mismo item contiene la clase show-dropdown, remover
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         // 4. Agregar el height maximo al dropdown content y agregar la clase show-dropdown
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }
 
 /*=============== DELETE DROPDOWN STYLES ===============*/
 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 
 // Función para eliminar estilos desplegables en modo móvil cuando el navegador cambia de tamaño
 const removeStyle = () =>{
     // Validar si la media query llega a 1118px
     if(mediaQuery.matches){
         // Removemos el estilo de height de dropdown container
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
 
         // Removemos la clase show-dropdown de dropdown item
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)