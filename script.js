// ===== Smooth Scroll =====
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
  });
});

// ===== Active Nav =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop, height = section.clientHeight;
    if (pageYOffset >= top - height / 3) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

// ===== Scroll Top Btn =====
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);
Object.assign(scrollBtn.style, {
  position: "fixed", bottom: "25px", right: "25px", background: "#e63946",
  color: "#fff", border: "none", borderRadius: "50%", width: "45px", height: "45px",
  fontSize: "1.3rem", cursor: "pointer", boxShadow: "0 0 10px rgba(230,57,70,0.5)",
  display: "none", transition: "0.3s"
});
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ===== Contact Form =====
const contactForm = document.querySelector(".contact form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("📩 Thank you! Your message has been sent successfully.");
    contactForm.reset();
  });
}

// ===== Hamburger =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// ===== Fade-In Animation =====
const fadeEls = document.querySelectorAll(".fade-in");
const appear = () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) el.classList.add("show");
  });
};
window.addEventListener("scroll", appear);
appear();

// ===== Typewriter =====
const text = "Frontend Developer | JavaScript Enthusiast | Learner 💻";
const typeEl = document.getElementById("typewriter");
let i = 0;
function typingEffect() {
  if (i < text.length) {
    typeEl.textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}
typingEffect();
