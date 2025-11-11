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



/* ===============================
   SLIDER (HOMEPAGE)
================================== */

let slideIndex = 1;
showSlides();

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("slides")
  let dots = document.getElementsByClassName("dots")
   for(i = 0; i<slides.length; i++){
    slides[i].style.display="none"
   }
   slideIndex++;
   if(slideIndex >slides.length){
    slideIndex =1
   }
   for(i=0; i<dots.length; i++){
     dots[i].className = dots[i].className.replace("active","")
   }
   slides[slideIndex -1].style.display ="block";
   dots[slideIndex - 1].className += "active"
   setTimeout(showSlides, 2000)
}
function updateSlide() {
  slides.style.transition = "transform 0.6s ease-in-out";
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[(index - 1 + totalSlides) % totalSlides].classList.add("active");
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

function changeSlide(n) {
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
   
    var containerWidth = $("#scoresheet").width()
    var elementWidth = $scoresheet.outerWidth();

    $scoresheet.css({left: containerWidth, color:"green"})
    $scoresheet.animate({left: -elementWidth},
      {duration:25000,
        easing: "linear",
        complete: move
      }

    )
    
  }

  $scoresheet.hover(
    function(){
      $(this).stop(true);
    },
    
    function(){
      
      move()

    }
                    
  //for animation mobile responsiveness
);
$(window).on("resize", function (){
  if($scoresheet.is(":animated")){
    $scoresheet.stop(true)
  
  }
  move()
})

  move();

   
})




//Script for our search functionality

const cards = document.querySelectorAll(".card")
const searchBtn = document.getElementById("searchBtn")
const searchInput = document.getElementById("searchInput")
searchBtn.addEventListener('click', () =>{
  const query =searchInput.value.toLowerCase().trim();
  cards.forEach(card =>{
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card.querySelector(".card-description").textContent.toLowerCase();

    if(title.includes(query) || description.includes(query))
      card.style.display = "flex";
    else{
      card.style.display = "none";
    }

  })
})

<<<<<<< HEAD

 
 // hamburger menu
    const hamburger = document.querySelector(".hamburgerIcon");
    const navLinks = document.getElementById("navLinks");
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
      
    });
    
    
   
=======
//         serviceCards.forEach(card => {
//           const text = card.textContent.toLowerCase();
//           if (text.includes(searchValue)) {
//             card.style.display = "block";
//           } else {
//             card.style.display = "none";
//           }
//         });
//       });
//     });
document.addEventListener("DOMContentLoaded", function() {
      const searchInput = document.getElementById("searchInput");
      const serviceCards = document.querySelectorAll(".article-Container .card");
      searchInput.addEventListener("keyup", function(e) {
        const searchValue = e.target.value.toLowerCase(); 
        serviceCards.forEach(card => {
          const title = card.querySelector(".card-title").textContent.toLowerCase();
          const description = card.querySelector(".card-description").textContent.toLowerCase();
          if (title.includes(searchValue) || description.includes(searchValue)) {
            card.style.display = "block";   
          } else {
            card.style.display = "none";    
          } 
        });
      } );
    } );
    // hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".mainNavContainer");
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      
    });
>>>>>>> ca1c177b66dd7d62060d92d4a8564b554b50bb96
