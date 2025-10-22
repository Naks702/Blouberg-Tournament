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
let totalSlides = slides.children.length;
let dotContainer = document.querySelector("#dots");
let index = 0;

// create dots
for (let i = 0; i < totalSlides; i++) {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => goToSlide(i));
  dotContainer.appendChild(dot);
}

let dots = document.querySelectorAll(".dot");

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function changeSlide(d) {
  index = (index + d + totalSlides) % totalSlides;
  updateSlide();
}

function goToSlide(n) {
  index = n;
  updateSlide();
}

// Prev / Next buttons
document.getElementById("prevBtn").addEventListener("click", () => changeSlide(-1));
document.getElementById("nextBtn").addEventListener("click", () => changeSlide(1));

// Initialize
updateSlide();

// Auto slide every 5 seconds
setInterval(() => changeSlide(1), 5000);
