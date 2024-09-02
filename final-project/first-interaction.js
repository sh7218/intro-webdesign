/*Introduction to Web Design and Computer Principles CSCI-UA 4 - 003 
HW: Final Project
Subi Hwang
May 2, 2023*/

// At least two DOM queries (0.5 point)
//There should be at least one function that is called in response to a DOM event (1.5 points)

//First DOM query
let images = document.querySelectorAll('img');

//The function should update page content and/or change CSS properties (1 point)
//First function changing image "opacity" - change CSS properties
function changeOpacity() {
  images[0].style.opacity = '0.2'; 
  images[1].style.opacity = '0.2';
  images[2].style.opacity = '0.2';

  //"this" refers to the HTML element that received the event
  this.style.opacity = '1'; 
  
}
//Second function resetting image "opacity" - change CSS properties
function resetOpacity() {
  images[0].style.opacity = '1'; 
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
}

//Third function - update page content (change to text)
//Second DOM query
//DOM query that accesses <h2> elements 
let header2 = document.getElementsByTagName('h2'); 
      //Assign h2 to a variable
      let languageName = header2[0]; 

function changeHeader2Imessage(){
 languageName.textContent = 'Contact via imessage';
}
function changeHeader2Email(){
 languageName.textContent = 'Contact via email';
}
function changeHeader2Instagram(){
 languageName.textContent = 'Contact via instagram';
}

function resetHeader2(){
 languageName.textContent = 'Contact Info';
}

const header1 = document.getElementById("header1");


//Event listeners for hover on - change opacity of images 
images[0].addEventListener('pointerover', changeOpacity);
images[1].addEventListener('pointerover', changeOpacity);
images[2].addEventListener('pointerover', changeOpacity);

//Event listeners for hover off - reset opacity of images 
images[0].addEventListener('pointerout', resetOpacity);
images[1].addEventListener('pointerout', resetOpacity);
images[2].addEventListener('pointerout', resetOpacity);

//Event listeners for hover on - change the text content of header 2 
images[0].addEventListener('pointerover', changeHeader2Imessage);
images[1].addEventListener('pointerover', changeHeader2Email);
images[2].addEventListener('pointerover', changeHeader2Instagram);

//Event listeners for hover off - reset the text content of header 2 
images[0].addEventListener('pointerout', resetHeader2);
images[1].addEventListener('pointerout', resetHeader2);
images[2].addEventListener('pointerout', resetHeader2);

