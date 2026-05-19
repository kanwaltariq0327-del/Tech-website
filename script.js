const openMenuButton = document.querySelector("#open-menu-button");
const closeMenuButton = document.querySelector("#close-menu-button");
const menu = document.querySelector(".menu");
const anchors = document.querySelectorAll(".anchor");
const navBtn = document.querySelector(".nav-btn");

//   HAMBURGER MENU
openMenuButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu");
});
//   CLOSE MENU
closeMenuButton.addEventListener('click', () => openMenuButton.click());

//  CLOSE MENU WHEN CLICK ON LINK
anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

//  CLOSE MENU WHEN CLICK ON NAV BUTTON
navBtn.addEventListener('click', () => {
    document.body.classList.remove("show-mobile-menu");
})



//   CLOSE MENU WHEN CLICK OUTSIDE
document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !openMenuButton.contains(e.target)) {
        document.body.classList.remove("show-mobile-menu");
        }
})


//    SLIDER
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    0: {
        slidesPerView : 1
    },
    768: {
        slidesPerView : 2
    },
    1024: {
        slidesPerView : 3
    },
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});


// ANIMATION PROCESS:

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target);
      entry.target.classList.add("show");
    }else{
      entry.target.classList.remove("show")
    }
  })
}, {})

const animationElement = document.querySelectorAll (".animation");
const animateElement = document.querySelectorAll (".member-list");

animationElement.forEach(el => observer.observe(el));
animateElement.forEach(el => observer.observe(el));