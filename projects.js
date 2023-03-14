const textWrapper = document.querySelector(".title-project");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
const bgAnimate = document.querySelector(".project-background");
const odAnimate = document.querySelector(".project-od");
const apigAnimate = document.querySelector(".project-apig");

const animeCss = () => {
  bgAnimate.classList.add("animate");
  odAnimate.classList.add("apparition");
  apigAnimate.classList.add;
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
        delay: 3000,
      });
  }, 1200);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".title-project").style.visibility = "hidden";
      animeCss();
      animeJs();
    } else {
      bgAnimate.classList.remove("animate");
      document.querySelector(".title-project").style.visibility = "hidden";
    }
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      textWrapper.style.visibility = "hidden";
      setTimeout(function () {
        animeJs(), 100;
      });
    }
  });
});

observer.observe(document.querySelector(".project-background"));
observer.observe(odAnimate);
sectionObserver.observe(document.querySelector("#project"));
