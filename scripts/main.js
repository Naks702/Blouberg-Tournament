function formValidation() {
  let isValid = true;
  let firstname = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let cellphone = document.getElementById("cellphone").value.trim();
  let email = document.getElementById("email").value.trim();

  document.getElementById("validateFirstName").innerHTML = "";
  document.getElementById("validateLastName").innerHTML = "";
  document.getElementById("validateCellphone").innerHTML = "";
  document.getElementById("validateEmail").innerHTML = "";

  if (firstname === "") {
    document.getElementById("validateFirstName").innerHTML = "Enter first name";
    isValid = false;
  } else if (lastName === "") {
    document.getElementById("validateLastName").innerHTML = "Enter last name";
    isValid = false;
  } else if (cellphone === "" || cellphone.length !== 10 || isNaN(cellphone)) {
    document.getElementById("validateCellphone").innerHTML = "Enter valid cellphone";
    isValid = false;
  } else if (
    email === "" ||
    !email.includes("@") ||
    !email.includes(".com") ||
    email.indexOf("@") === 0
  ) {
    document.getElementById("validateEmail").innerHTML = "Enter valid email";
    isValid = false;
  }

  return isValid;
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

/* ===============================
   SLIDER (HOMEPAGE)
================================== */

let slides = document.querySelector("#slides");

// Remove empty slides
Array.from(slides.children).forEach(slide => {
  if (!slide.getAttribute("src") || slide.getAttribute("src").trim() === "") {
    slide.remove();
  }
});

let totalSlides = slides.children.length;
let dotContainer = document.querySelector("#dots");
let index = 1; // Start from the first "real" slide

// Clone first and last slide for seamless looping
let firstClone = slides.children[0].cloneNode(true);
let lastClone = slides.children[totalSlides - 1].cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slides.firstElementChild);

slides.style.transform = `translateX(-${index * 100}%)`;

let dots = [];
for (let i = 0; i < totalSlides; i++) {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => goToSlide(i));
  dotContainer.appendChild(dot);
  dots.push(dot);
}

function updateSlide() {
  slides.style.transition = "transform 0.6s ease-in-out";
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[(index - 1 + totalSlides) % totalSlides].classList.add("active");
}

function changeSlide(d) {
  if (index >= totalSlides + 1) return;
  index += d;
  updateSlide();
}

slides.addEventListener("transitionend", () => {
  if (slides.children[index].isSameNode(firstClone)) {
    slides.style.transition = "none";
    index = 1;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
  if (slides.children[index].isSameNode(lastClone)) {
    slides.style.transition = "none";
    index = totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
});

function goToSlide(n) {
  index = n + 1; // account for the clone offset
  updateSlide();
}

// Buttons
document.getElementById("prevBtn").addEventListener("click", () => changeSlide(-1));
document.getElementById("nextBtn").addEventListener("click", () => changeSlide(1));

// Auto slide every 5 seconds
setInterval(() => changeSlide(1), 5000);

// Initialize
updateSlide();

//JQuery to show scoresheet from different fixtures

$(document).ready(function(){
  var $scoresheet = $("#scoresheet");
   
  function move(){
    var width = $(window).width();
    var containerWidth = $("#scoresheet").width()
    var elementWidth = $scoresheet.outerWidth();

    $scoresheet.css({left: containerWidth})
    $scoresheet.animate({left: -elementWidth},
      {duration:25000,
        easing: "linear",
        complete: move
      }

    )
    
  }

  $scoresheet.hover(
    function(){$(this).stop(true);},
    function(){move()}
                    
  
);


  move();

   
})
//Script for our search functionality


let searchTerm = document.getElementById("searchInput");
let matchList = document.getElementById("list");
let matches = matchList.getElementsByTagName("li");
searchTerm.addEventListener('keyup', searchSite)

function searchSite(){
 const filter  = searchTerm.value.toLowerCase();
 for (let i = 0; i < matches.length; i++) {
  const text = matches[i].textContent.toLowerCase();
  matches[i].style.display = text.includes(filter) ? "" : "none";
  
 }

}