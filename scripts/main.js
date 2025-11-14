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
  };

  const map = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom:19,
  attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);
map.setView([-26.2846, 28.1986], 16);
L.marker([-26.2846, 28.1986])
        .addTo(map)
        .bindPopup('<b>Blouberg Tournament Office</b><br>Niemaan Rd, Klippoortjie')
        .openPopup();

});




// END DOMContentLoaded



/* hamburger menu toggles*/
$(document).ready(function () {
  $(".bar").click(function () {
    $(".mainNavContainer").toggle();
  });

  /* MOVING SCORESHEET BANNER
  */
  var $scoresheet = $("#scoresheet");

  function move() {
    var containerWidth = $("#scoresheet").width();
    var elementWidth = $scoresheet.outerWidth();

    $scoresheet.css({ left: containerWidth, color: "green" });
    $scoresheet.animate(
      { left: -elementWidth },
      {
        duration: 25000,
        easing: "linear",
        complete: move
      }
    );
  }

  if ($scoresheet.length) {
    $scoresheet.hover(
      function () {
        $(this).stop(true);
      },
      function () {
        move();
      }
    );

    $(window).on("resize", function () {
      if ($scoresheet.is(":animated")) {
        $scoresheet.stop(true);
      }
      move();
    });

    move();
  }

  /*collapsible functionality on About us page*/
  $(".collapsible").click(function () {
    const content = $(this).next(".content");

    $(".content").not(content).slideUp();
    content.slideToggle();

    $(".collapsible").not(this).removeClass("active");
    $(this).toggleClass("active");
  });

});
