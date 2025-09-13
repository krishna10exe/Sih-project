gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".abouts",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#solo",{
    top: "120%",
    right: "108%",
    scale: 1.5,
    rotate: -5,
    ease: "power1.out"
})

  ScrollReveal().reveal('.d1', {
    duration: 3000,
    origin: 'top',
    distance: '50px',
    // reset: true
  });

    ScrollReveal().reveal('.d2', {
    duration: 3000,
    origin: 'top',
    distance: '50px',
    // reset: true
  });

    ScrollReveal().reveal('.side', {
    duration: 3000,
    origin: 'right',
    distance: '50px',
    // reset: true
  });
    ScrollReveal().reveal('.about-right', {
    duration: 2000,
    origin: 'right',
    distance: '50px',
    // reset: true
  });
    ScrollReveal().reveal('.left', {
    duration: 2000,
    origin: 'top',
    distance: '50px',
    reset: true
  });