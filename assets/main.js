/* ----- LENIS SMOOTH SCROLL SETUP ----- */
const lenis = new Lenis({
  duration: 0.8, // slightly faster
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
  smoothTouch: false,
})

// Animation frame loop
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

/* ----- GSAP + SCROLLTRIGGER SETUP ----- */
gsap.registerPlugin(ScrollTrigger)

// Sync Lenis with ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})



/* ----- GSAP ANIMATIONS ----- */

// HERO SECTION animations
gsap.from(".featured-name", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
})

gsap.from(".featured-text-info", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.4,
})

gsap.from(".featured-text-btn", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.6,
})



// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Select section and wrapper
const section = document.querySelector(".projects");
const wrapper = document.querySelector(".projects-wrapper");

// Apply horizontal scroll effect
gsap.to(wrapper, {
  x: () => -(wrapper.scrollWidth - section.offsetWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => "+=" + (wrapper.scrollWidth - section.offsetWidth),
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    //markers: true // enable to debug trigger positions
  }
});


/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- 
    window.onscroll = function() {headerShadow()}; */

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (window.scrollY > 50)
     {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Designer"," Freelancer","Developer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  reset: false
})


  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- INTERNSHIP BOX -- */
  sr.reveal('.internship-card',{interval: 200})

  /* -- PROJECT -- */
  //sr.reveal('.about-containers',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */

// Smooth Scroll for Nav Links using Lenis
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    lenis.scrollTo(target, {
      offset: -50,   // adjust if navbar height changes
      duration: 1.2, // smoother scrolling
      easing: (t) => 1 - Math.pow(1 - t, 3)
    });
  });
});

let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scrolling DOWN → hide navbar
    navbar.classList.add("hide");
  } else {
    // scrolling UP → show navbar
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

//-------------------------------------------------------------------------------

  // Open modal
document.querySelectorAll('.more-details-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});


// Close modal
document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.addEventListener('click', function() {
    this.closest('.modal').style.display = 'none';
  });
});

// Close if clicked outside
window.addEventListener('click', function(e) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
