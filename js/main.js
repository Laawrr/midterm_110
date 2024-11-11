// Document Ready
$(document).ready(function () {
  // Toggle Menu Open/Close
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("menu-open");
    $(".menu").toggleClass("active");
  });

  // Close menu when nav-link is clicked
  $(".nav-link").click(function () {
    $(".menu-toggle").toggleClass("menu-open");
    $(".menu").toggleClass("active");
  });
});


// Scroll Animations for Sections
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => section.classList.add("fade-in"));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });

  sections.forEach(section => observer.observe(section));
});

// Text Animation
const textWrapperMl3 = document.querySelector(".ml3");
const textWrapperLead = document.querySelector(".lead");

textWrapperMl3.innerHTML = textWrapperMl3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperLead.innerHTML = textWrapperLead.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
  });

anime.timeline({ loop: true })
  .add({
    targets: ".lead .letter",
    translateX: [40, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  })
  .add({
    targets: ".lead .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

// Form Validation
$(document).ready(function () {
  $("#myForm").on("submit", function (event) {
    let isValid = true;

    // Validate name
    if ($("#name").val().trim() === "") {
      isValid = false;
      alert("Please enter your name.");
    }

    // Validate email
    const email = $("#email").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      alert("Please enter a valid email address.");
    }

    // Validate message
    if ($("#message").val().trim() === "") {
      isValid = false;
      alert("Please enter a message.");
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
      return;
    }

    // Success message and form reset
    alert(`Thank you for your message, ${$("#name").val()}! We'll get back to you shortly.`);
    $("#myForm")[0].reset();
    event.preventDefault();

    window.location.href = "./index.html";
  });
});
