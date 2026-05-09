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
