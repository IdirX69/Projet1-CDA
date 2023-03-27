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

//// ANIMATION SKILLS ///

const frontSkills = document.querySelector(".front-skills");
const backSkills = document.querySelector(".back-skills");
const toolSkills = document.querySelector(".tools-skills");

/* function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showfrontSkills() {
  if (isInViewport(frontSkills)) {
    frontSkills.classList.add("show");
  } else {
    frontSkills.classList.remove("show");
  }
}

window.addEventListener("scroll", showfrontSkills);
 */

const frontSkillsgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const div = entry.target;

    switch (true) {
      case entry.isIntersecting:
        if (!div.classList.contains("show")) {
          div.classList.add("show");
        } else {
          div.classList.remove("show");
          void div.offsetWidth;
          div.classList.add("show");
        }
        div.classList.remove("animation-reset");
        break;
      case !entry.isIntersecting:
        div.classList.add("animation-reset");
        break;
    }
  });
});

frontSkillsgObserver.observe(frontSkills);
frontSkillsgObserver.observe(backSkills);
frontSkillsgObserver.observe(toolSkills);
