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
    right: "100%",
    scale: 1.5,
    rotate: -5,
    ease: "power1.out"
})