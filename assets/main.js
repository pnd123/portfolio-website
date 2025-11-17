/* ===========================================================
   CLEAN | SMOOTH | NO-SHAKE MAIN SCRIPT
   =========================================================== */

/* ----- LENIS SMOOTH SCROLL SETUP ----- */
const lenis = new Lenis({
  duration: 1.1,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
  smoothTouch: false,
});

// Single RAF driver (no GSAP ticker!)
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ----- GSAP + SCROLLTRIGGER SETUP ----- */
gsap.registerPlugin(ScrollTrigger);

/* ----- HERO SECTION ANIMATIONS ----- */
gsap.from(".featured-name", { y: 50, opacity: 0, duration: 1, delay: 0.2 });
gsap.from(".featured-text-info", { y: 50, opacity: 0, duration: 1, delay: 0.4 });
gsap.from(".featured-text-btn", { y: 50, opacity: 0, duration: 1, delay: 0.6 });

/* ----- HORIZONTAL PROJECT SECTION ----- */
const section = document.querySelector(".projects");
const wrapper = document.querySelector(".projects-wrapper");

if (section && wrapper) {
  gsap.to(wrapper, {
    x: () => -(wrapper.scrollWidth - section.offsetWidth),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => "+=" + (wrapper.scrollWidth - section.offsetWidth),
      pin: true,
      scrub: 1,
      markers: false, // turn ON only for debugging
      invalidateOnRefresh: true
    }
  });
}

/* ----- NAV MENU TOGGLE ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- NAV SHADOW ON SCROLL ----- */
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (window.scrollY > 50) navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
  else navHeader.style.boxShadow = "none";
}
window.addEventListener("scroll", headerShadow);

/* ----- TYPING EFFECT ----- */
new Typed(".typedText", {
  strings: ["Designer", " Freelancer", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- SCROLLREVEAL ----- */
const sr = ScrollReveal({ origin: "top", distance: "60px", duration: 1000, reset: false });

sr.reveal(".featured-text-card");
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".internship-card", { interval: 200 });
sr.reveal(".top-header");

ScrollReveal({ origin: "left", distance: "80px", duration: 2000, reset: false })
  .reveal(".about-info", { delay: 100 })
  .reveal(".contact-info", { delay: 100 });

ScrollReveal({ origin: "right", distance: "80px", duration: 2000, reset: false })
  .reveal(".skills-box", { delay: 100 })
  .reveal(".form-control", { delay: 100 });

/* ----- NAVIGATION WITH LENIS (FINAL FIX) ----- */


/* ----- MODALS ----- */
document.querySelectorAll(".more-details-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    document.getElementById(this.getAttribute("data-modal")).style.display = "block";
  });
});

document.querySelectorAll(".modal .close").forEach(closeBtn => {
  closeBtn.addEventListener("click", function () {
    this.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", function (e) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
