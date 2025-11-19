//search functionality on service page
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const cards = document.querySelectorAll(".card");

  function searchServices() {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const desc = card.querySelector(".card-description").textContent.toLowerCase();

      card.style.display =
        title.includes(query) || desc.includes(query)
          ? "block"
          : "none";
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", searchServices);
  }
  if (searchBtn) {
    searchBtn.addEventListener("click", searchServices);
  }
  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".mainNavContainer");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  /* lightbox functionality*/
  const images = document.querySelectorAll(".gallery-container .slider img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");

  if (images.length > 0 && lightbox && lightboxImg) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }


 
  


//collapsible sections
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


  if (document.getElementById("map")) {
    let map = L.map('map').setView([-26.2865, 28.2066], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-26.2865, 28.2066])
      .addTo(map)
      .bindPopup('Our Location: Klippoortjie, Germiston')
      .openPopup();
  }

});

  function contactFormValidation() {
    const firstName = document.getElementById("firstName").value.trim();
    const cellphone = document.getElementById("cellphone").value.trim();
    const email = document.getElementById("email").value.trim();

    const regexNumber = /^[0-9]{10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    // Clear previous errors
    document.getElementById("validateFirstName").innerHTML = "";
    document.getElementById("validateCellphone").innerHTML = "";
    document.getElementById("validateEmail").innerHTML = "";

    // Validate fields
    if (firstName === "") {
        document.getElementById("validateFirstName").innerHTML = "Please enter your first name";
        isValid = false;
    }
    if (!regexNumber.test(cellphone)) {
        document.getElementById("validateCellphone").innerHTML = "Please enter a valid 10-digit number";
        isValid = false;
    }
    if (!regexEmail.test(email)) {
        document.getElementById("validateEmail").innerHTML = "Please enter a valid email";
        isValid = false;
    }

    // Stop if invalid
    if (!isValid) return false;

    // SUCCESS → Replace form with message
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("formSubmit");

    form.style.display = "none"; // hide the form
    successMessage.style.display = "block";

    let countdown = 5;

    successMessage.innerHTML = `
        <div style="padding:20px; background:#d4edda; color:#green; border-radius:8px;">
            <h2>Thank you!</h2>
            <p>Your form was submitted successfully. We will be in touch soon.</p>
            <p>Redirecting in <span id="countdown">${countdown}</span> seconds...</p>
        </div>
    `;

    // Countdown every second
    const interval = setInterval(() => {
        countdown--;
        document.getElementById("countdown").textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = "ContactUs.html"; // ⭐ Change redirect page here
        }
    }, 1000);

    return false; // prevent refresh
}
// Show donation amount when user selects YES
function renderDonationAmountField() {
    const donate = document.getElementById("donate").value;
    const container = document.getElementById("donation-amount-container");

    if (donate === "yes") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
        document.getElementById("donation-amount").value = "";
        document.getElementById("validateDonationAmount").innerHTML = "";
    }
}

function validateEnquiryForm() {
    let isValid = true;

    // Input fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("cellphone").value.trim();
    let enquiry = document.getElementById("enquiry-type").value;
    let donate = document.getElementById("donate").value;
    let donationAmount = document.getElementById("donation-amount").value.trim();

    // Regex
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear errors
    document.getElementById("validateName").innerHTML = "";
    document.getElementById("validateEmail").innerHTML = "";
    document.getElementById("validatePhone").innerHTML = "";
    document.getElementById("validateEnquiryType").innerHTML = "";
    document.getElementById("validateDonate").innerHTML = "";
    document.getElementById("validateDonationAmount").innerHTML = "";

    // Name
    if (name === "") {
        document.getElementById("validateName").innerHTML = "Enter your name";
        isValid = false;
    }

    // Email
    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("validateEmail").innerHTML = "Enter a valid email address";
        isValid = false;
    }

    // Phone
    if (!phoneRegex.test(phone)) {
        document.getElementById("validatePhone").innerHTML = "Enter a valid 10-digit phone number";
        isValid = false;
    }

    // Enquiry Type
    if (enquiry === "") {
        document.getElementById("validateEnquiryType").innerHTML = "Select an enquiry type";
        isValid = false;
    }

    // Donation selection
    if (donate === "") {
        document.getElementById("validateDonate").innerHTML = "Select a donation preference";
        isValid = false;
    }

    // Donation amount required IF donate = yes
    if (donate === "yes") {
        document.getElementById("donation-amount-container").style.display = "block";

        if (donationAmount === "") {
            document.getElementById("validateDonationAmount").innerHTML = "Enter the donation amount";
            isValid = false;
        }
    }

    return isValid;
}
    
   
//collapsible sections with jQuery
$(document).ready(function() {
  $(".collapsible").click(function() {
    const content = $(this).next(".content");
    
    // Close other open sections
    $(".content").not(content).slideUp();
    
    // Toggle the one clicked
    // content.slideToggle();
    
    // Optional active highlight
    $(".collapsible").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
});

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









