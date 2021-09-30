//access dom elements
const body = document.querySelector('body')
const menuToggle = document.querySelector('.toggle')
const links = document.querySelectorAll('.nav-menu a')

console.log(links)

menuToggle.addEventListener('click', () => {
    body.classList.toggle('active')
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('active')
    console.log('works')
  })
})

//img carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}