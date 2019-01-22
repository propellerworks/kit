const menuIcon = document.querySelector('.menu-icon'),
  menu = document.querySelector('.navigation');

menuIcon.addEventListener('click', () => menu.classList.toggle('mobile'));