/*Introduction to Web Design and Computer Principles CSCI-UA 4 - 003 
HW: JavaScript
Subi Hwang
April 18, 2023*/

/*1. A revised version of the previous website with JavaScript interactivity, 
externally applied in a .js document (2 points)*/

//2. At least two DOM queries (1 point)

//3. At least two functions that are called with DOM events (2 points)

//4. One of the functions should update page content and one of the 
//functions should change a CSS property (2 points)

//First function changing image "opacity" of java.png, c++.png, and js.png - change a CSS property
//First DOM query
let images = document.querySelectorAll('main > figure > a > img');

function changeOpacity() {
  images[0].style.opacity = '0.2'; 
  images[1].style.opacity = '0.2';
  images[2].style.opacity = '0.2';

  //"this" refers to the HTML element that received the event
  this.style.opacity = '1'; 
  
}
//Second function resetting image "opacity" of java.png, c++.png, and js.png - change a CSS property
//reset opacity of each image
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

function changeHeader2(){
 languageName.textContent = 'Click to View the Selected Language Information';
}

function resetHeader2(){
 languageName.textContent = 'Three Main Programming Languages';
}

const header1 = document.getElementById("header1");

//5. The JavaScript Date object, used to identify the day of the week (1 point)
/*6. A JavaScript decision structure to modify another element of the web page 
uniquely for each day of the week (2 points)*/

const date = new Date();
const weekday = date.getDay();

if (weekday === 0) {
  header1.textContent = "Programming Languages (FYI: today is Sunday)";

} else if (weekday === 1) {
  header1.textContent = "Programming Languages (FYI: today is Monday)";

} else if (weekday === 2) {
  header1.textContent = "Programming Languages (FYI: today is Tuesday)";

} else if (weekday === 3) {
  header1.textContent = "Programming Languages (FYI: today is Wednesday)";

} else if (weekday === 4) {
  header1.textContent = "Programming Languages (FYI: today is Thursday)";

} else if (weekday === 5) {
  header1.textContent = "Programming Languages (FYI: today is Friday)";

} else {
  header1.textContent = "Programming Languages (FYI: today is Saturday)";

}

//At least two functions that are called with DOM events (2 points)
//Event listeners for hover on - change opacity of images 
images[0].addEventListener('pointerover', changeOpacity);
images[1].addEventListener('pointerover', changeOpacity);
images[2].addEventListener('pointerover', changeOpacity);

//Event listeners for hover off - reset opacity of images 
images[0].addEventListener('pointerout', resetOpacity);
images[1].addEventListener('pointerout', resetOpacity);
images[2].addEventListener('pointerout', resetOpacity);

//Event listeners for hover on - change the text content of header 2 
images[0].addEventListener('pointerover', changeHeader2);
images[1].addEventListener('pointerover', changeHeader2);
images[2].addEventListener('pointerover', changeHeader2);

//Event listeners for hover off - reset the text content of header 2 
images[0].addEventListener('pointerout', resetHeader2);
images[1].addEventListener('pointerout', resetHeader2);
images[2].addEventListener('pointerout', resetHeader2);

