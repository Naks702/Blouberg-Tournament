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

  /* ============================
     LIGHTBOX GALLERY
  =============================*/
  const images = document.querySelectorAll(".gallery-container .slider img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");

  if (images) {
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

  /* enquiry form validation*/
  window.validateEnquiryForm = function () {
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
      } else if (phone === "" || phone.length !== 10 || isNaN(phone) ) {
        document.getElementById("validatePhone").innerHTML = "Enter valid phone number";
        isValid = false;
      }else if(regex.test(phone)){
        console.log("its match")
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





