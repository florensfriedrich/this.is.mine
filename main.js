const mountain = document.querySelector(".mountain");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const headline2 = document.querySelector(".headline2");
const headline3 = document.querySelector(".headline3");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");

const tl = new TimelineMax();

tl.fromTo(
  mountain,
  1,
  { height: "0%" },
  { height: "95%", ease: Power2.easeInOut }
)
  .fromTo(
    mountain,
    1,
    { width: "100%" },
    { width: "95%", ease: Power2.easeInOut }
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(hamburger, 0.75, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline2, 1.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline3, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(link2, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(link1, 1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");
