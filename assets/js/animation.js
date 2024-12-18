const scrollRevealOption = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};

ScrollReveal().reveal(".left-1", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".left-2", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

ScrollReveal().reveal(".left-3", {
  ...scrollRevealOption,
  origin: "left",
  delay: 800,
});

ScrollReveal().reveal(".right-1", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800,
});

ScrollReveal().reveal(".title", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about__container .about__image", {
  ...scrollRevealOption,
  origin: "right",
});
