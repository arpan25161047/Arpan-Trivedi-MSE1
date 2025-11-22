// TravelMate JavaScript

// ✅ 1. Auto-update footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// ✅ 2. Mobile menu toggle
const menuBtn = document.querySelector("[data-menu-open]");
const navLinks = document.querySelector(".site-nav");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });
}

// ✅ 3. Booking Form Validation
const form = document.getElementById("inquiryForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dest = document.getElementById("dest").value.trim();
    const start = document.getElementById("start").value.trim();
    const end = document.getElementById("end").value.trim();
    const msg = document.getElementById("formMsg");

    if (!name || !email || !dest || !start || !end) {
      msg.textContent = "⚠️ Please fill out all fields.";
      msg.style.color = "#dc2626";
      msg.style.display = "block";
      return;
    }

    msg.textContent = "✅ Your inquiry has been submitted successfully!";
    msg.style.color = "#16a34a";
    msg.style.display = "block";
    form.reset();
  });
}
