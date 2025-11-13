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

let gallery = document.querySelector('.gallery-container');
gallery = document.querySelector('.gallery');
slides = document.querySelectorAll('.slide');
let index = 0;
function showSlide(i) {
  index += i; 
  if (index < 0) {
    index = slides.length - 1;
  } 
  else if (index >= slides.length) {
    index = 0;
  }
  gallery.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => {
  showSlide(1);
}, 5000);
// slide controls
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
prevBtn.addEventListener('click', () => {
  showSlide(-1);
});
nextBtn.addEventListener('click', () => {
  showSlide(1);
}); 


//slide dots
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentSlide(idx + 1);
  });
});

/* ===============================
   END OF SLIDER
================================== */




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


 
 // hamburger menu
    const hamburger = document.querySelector(".hamburgerIcon");
    const navLinks = document.getElementById("navLinks");
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
      
    });
    
    // Close menu when a link is clicked (for better UX on mobile)
    const navLinkItems = document.querySelectorAll(".nav-link");
    navLinkItems.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
    // end of hamburger menu

    //enquiry form validation
    function validateEnquiryForm() {
      let isValid = true;
      let name = document.getElementById("name").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let enquiryType = document.getElementById("enquiry-type").value;
      let donate = document.getElementById("donate").value;
      let donationAmount = document.getElementById("donation-amount").value.trim();

      document.getElementById("validateName").innerHTML = "";
      document.getElementById("validatePhone").innerHTML = "";
      document.getElementById("validateEnquiryType").innerHTML = "";
      document.getElementById("validateDonate").innerHTML = "";
      document.getElementById("validateDonationAmount").innerHTML = "";

      if (name === "") {
        document.getElementById("validateName").innerHTML = "Enter your name";
        isValid = false;
      } else if (phone === "" || phone.length !== 10 || isNaN(phone)) {
        document.getElementById("validatePhone").innerHTML = "Enter valid phone number";
        isValid = false;
      } else if (enquiryType === "") {  
        document.getElementById("validateEnquiryType").innerHTML = "Select an enquiry type";
        isValid = false;
      } else if (donate === "") {  
        document.getElementById("validateDonate").innerHTML = "Select donation preference";
        isValid = false;
      } else if (donate === "yes" && (donationAmount === "" || isNaN(donationAmount) || Number(donationAmount) <= 0)) { 
        document.getElementById("validateDonationAmount").innerHTML = "Enter valid donation amount";
        isValid = false;
      } 
      return isValid;

    }   
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


