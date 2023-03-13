// const frontTitle = document.querySelector(".title-front");
// const frontSkillsPosition = frontTitle.getBoundingClientRect().top;

// window.addEventListener("scroll", () => {
//   const frontSkillsOffset = -300;

//   if (window.pageYOffset > frontSkillsPosition + frontSkillsOffset) {
//     frontTitle.classList.add("animate-left");
//   } else {
//     frontTitle.classList.remove("animate-left");
//   }
// });
// const frontSkills = document.querySelector(".front-skills");
// const frontLogo = document.querySelector(".skills-logo");
// const frontLogoPosition = frontLogo.getBoundingClientRect().top;

// window.addEventListener("scroll", () => {
//   let frontLogoOffset = -300;
//   if (window.pageYOffset > frontLogoPosition + frontLogoOffset) {
//     frontLogo.classList.add("animate-right");
//   } else {
//     frontLogo.classList.remove("animate-right");
//   }
// });

/* window.addEventListener("scroll", () => {
  if (window.pageYOffset > frontLogoPosition + frontLogoOffset) {
    frontLogo.classList.add("animate-right");
  }
});
 */
/* window.addEventListener("scroll", () => {
  if (frontLogo.getBoundingClientRect().top < window.scrollY) {
    frontLogo.classList.add("animate-right");
  } else {
    frontLogo.classList.remove("animate-right");
  }
});

const { scrollTop, clientHeight } = document.documentElement;

 */
/* function scrollReveal() {
  const revealPoint = 150;
  var revealElement = document.querySelector(".title-front");
  for (let i = 0; i < revealElement.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElement[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      revealElement[i].classList.add("animate-left");
    } else {
      revealElement[i].classList.remove("animate-left");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
 */

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
skillObserver.observe(document.querySelector(".skill-background"));
