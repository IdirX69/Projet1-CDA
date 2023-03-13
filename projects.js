const textWrapper = document.querySelector(".title-project");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
const bgAnimate = document.querySelector(".project-background");

const animeCss = () => {
  bgAnimate.classList.add("animate");
};

const animeJs = () => {
  setTimeout(function () {
    const textWrapper = document.querySelector(".title-project");
    textWrapper.style.opacity = 1;
    textWrapper.style.visibility = "visible";
    anime
      .timeline({ loop: false })
      .add({
        targets: ".title-project .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1800,
        delay: (el, i) => 200 * i,
      })
      .add({
        targets: ".title-project",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 7000,
      });
  }, 950);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animeCss();
      animeJs();
    }
  });
});

observer.observe(document.querySelector("#project"));
observer.observe(document.querySelector(".project-background"));
