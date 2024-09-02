/*Introduction to Web Design and Computer Principles CSCI-UA 4 - 003 
HW: Final Project
Subi Hwang
May 2, 2023*/

/* A responsive nav bar with a SVG icon. */

let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {

  navigation.classList.toggle('toggle');
  header.classList.toggle('toggle');
}

menuIcon.addEventListener('click', toggleNav);