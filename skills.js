// Wrap every letter in a span

const skillTitleWrapper = document.querySelector(".skills-title");
skillTitleWrapper.innerHTML = skillTitleWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
const skillBgAnimate = document.querySelector(".skill-background");

const skillAnimeCss = () => {
  skillBgAnimate.classList.add("animate");
};

const skillAnimeJs = () => {
  setTimeout(function () {
    const skillTitleWrapper = document.querySelector(".skills-title");
    skillTitleWrapper.style.opacity = 1;
    skillTitleWrapper.style.visibility = "visible";
    anime
      .timeline({ loop: false })
      .add({
        targets: ".skills-title .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1800,
        delay: (el, i) => 200 * i,
      })
      .add({
        targets: ".skills-title",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 7000,
      });
  }, 950);
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skillAnimeCss();
      skillAnimeJs();
    }
  });
});

skillObserver.observe(document.querySelector(".skills-section"));
skillObserver.observe(document.querySelector("#skill-background"));

let skillsLogos = document.querySelectorAll(".skills-logo img");
let logoDivs = document.querySelectorAll(".skills-logo");

logoDivs.forEach((div) => {
  div.addEventListener("click", (event) => {
    let clickedLogo = event.target;
    clickedLogo.classList.add("remove");
    setTimeout(() => {
      clickedLogo.remove();
      if (div.childElementCount <= 0) {
        div.classList.add("remove");
      }
    }, 1000);
  });
});
