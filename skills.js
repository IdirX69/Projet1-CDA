const frontTitle = document.querySelector(".title-front");
const frontSkillsPosition = frontTitle.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  const frontSkillsOffset = -300;

  if (window.pageYOffset > frontSkillsPosition + frontSkillsOffset) {
    frontTitle.classList.add("animate-left");
  } else {
    frontTitle.classList.remove("animate-left");
  }
});
const frontSkills = document.querySelector(".front-skills");
const frontLogo = document.querySelector(".skills-logo");
const frontLogoPosition = frontLogo.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  let frontLogoOffset = -300;
  if (window.pageYOffset > frontLogoPosition + frontLogoOffset) {
    frontLogo.classList.add("animate-right");
  } else {
    frontLogo.classList.remove("animate-right");
  }
});

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
  var revealPoint = 150;
  var revealElement = document.querySelector(".title-front");
  for (var i = 0; i < revealElement.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = revealElement[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      revealElement[i].classList.add("animate-left");
    } else {
      revealElement[i].classList.remove("animate-left");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
 */
