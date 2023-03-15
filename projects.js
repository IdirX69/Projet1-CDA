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
  apigAnimate.classList.add("animate");
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

const projectImgs = document.querySelectorAll("#project img");
const projectTitle = document.querySelectorAll("#project h3");

const projectImgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const img = entry.target;
    const title = entry.target;

    switch (true) {
      case entry.isIntersecting:
        if (!img.classList.contains("apparition")) {
          img.classList.add("apparition");
          title.classList.add("apparition");
        } else {
          img.classList.remove("apparition");
          void img.offsetWidth;
          img.classList.add("apparition");
        }
        img.classList.remove("animation-reset");
        break;
      case !entry.isIntersecting:
        img.classList.add("animation-reset");
        break;
    }
  });
});

projectImgs.forEach((img) => {
  projectImgObserver.observe(img);
});
projectTitle.forEach((title) => {
  projectImgObserver.observe(title);
});
observer.observe(document.querySelector(".project-background"));
sectionObserver.observe(document.querySelector("#project"));
