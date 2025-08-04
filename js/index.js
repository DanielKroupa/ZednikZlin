import {
    Carousel,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Carousel });

  const toggleMenu = document.querySelector('#mobileMenu');

  const menuButton = document.querySelector("#kontakt") 

  toggleMenu.onclick = () => {
    toggleMenu.classList.toggle("hamburger-toggle")
  }

  menuButton.onclick = () => {
    menuButton.classList.toggle("hamburger-toggle")
  }





