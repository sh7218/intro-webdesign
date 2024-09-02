/*Introduction to Web Design and Computer Principles CSCI-UA 4 - 003 
HW: JavaScript
Subi Hwang
April 18, 2023*/

/*Extra Credit) Assignment is submitted on time and includes a responsive nav bar 
with a custom SVG icon. (3 points extra credit)*/

let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {

  navigation.classList.toggle('toggle');
  header.classList.toggle('toggle');
}

menuIcon.addEventListener('click', toggleNav);