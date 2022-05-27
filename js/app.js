'use strict';

// nav variables
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    body.classList.toggle('no-scroll');
})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        body.classList.toggle('no-scroll');
    })
});