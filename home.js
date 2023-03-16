const navBar = document.querySelector(".navigation");
const target = document.getElementById("text-target");
let array = [
  "React",
  "Javascript",
  "Html",
  "Css",
  "Node Js",
  "Mysql",
  "Express",
  "React Native",
  "Graph QL",
];
let wordIndex = 0;
let letterIndex = 0;

// mouse effect

document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let circle = document.createElement("em");
  let x = e.x;
  let y = e.y;
  circle.style.left = x + -25 + "px";
  circle.style.top = y + -55 + "px";

  let size = Math.random() * 35;
  circle.style.width = 20 + size + "px";
  circle.style.height = 20 + size + "px";
  body.appendChild(circle);
  setTimeout(() => {
    circle.remove();
  }, 1800);
});

// Navigation

let lastScrollValue = 0;

document.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop;
  if (lastScrollValue < top) {
    navBar.classList.add("hidden");
  } else {
    navBar.classList.remove("hidden");
  }
  lastScrollValue = top;
});

const welcomeTitle = document.querySelector(".welcome-title");
const homeParagraph = document.querySelector(".paragraph");
const devText = document.querySelector(".dev-text");
let title = "Bonjour je suis Wild";
let paragrphe =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus tenetur culpa distinctio quaerat odit numquam atque ratione dolorem, adipisci doloribus.";
let iAmWild = "Et je suis developpeur web";
const createTitle = (word, element, index) => {
  const letter = document.createElement("span");
  letter.textContent = word[index];
  element.appendChild(letter);
};

pIndex = 0;
lIndex = 0;
devtextIndex = 0;
const titleLoop = (word, element, index) => {
  setTimeout(() => {
    if (index >= word.length) {
      index = 0;
    } else if (index < word.length) {
      createTitle(word, element, index);
      index++;
      titleLoop(word, element, index);
    } else {
      index = 0;
    }
  }, 40);
};

titleLoop(title, welcomeTitle, lIndex);
setTimeout(() => {
  titleLoop(paragrphe, homeParagraph, pIndex);
}, 2800);
setTimeout(() => {
  titleLoop(iAmWild, devText, devtextIndex);
}, 1500);

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.style.opacity = "0";
  letter.style.animation = "anim 5s ease forwards";
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2000);
};
setTimeout(() => {
  const loop = () => {
    setTimeout(() => {
      if (wordIndex >= array.length) {
        wordIndex = 0;
        letterIndex = 0;
        loop();
      } else if (letterIndex < array[wordIndex].length) {
        createLetter();
        letterIndex++;
        loop();
      } else {
        letterIndex = 0;
        wordIndex++;
        setTimeout(() => {
          loop();
        }, 2100);
      }
    }, 60);
  };
  createLetter();
  loop();
}, 1500);

const icons = document.querySelectorAll(".social-network .fa-brands");
icons.forEach((icon) => {
  icon.addEventListener("mouseover", (e) => {
    icon.style.transform = `translate(${e.offsetX - 20}px,${e.offsetY - 13}px)`;
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "";
  });
});
