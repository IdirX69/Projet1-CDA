const navBar = document.querySelector(".navigation");
const target = document.getElementById("text-target");
let array = [
  "Communication",
  "Collaboration",
  "Créativité",
  "Adaptabilité",
  "Autonomie",
  "Esprit d'équipe",
  "Empathie",
  "Leadership",
  "Curiosité",
  "Persévérance",
  "Organisation",
];
let wordIndex = 0;
let letterIndex = 0;
const testPR = 100;
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.style.opacity = "0";
  letter.style.animation = "anim 4.5s ease forwards";
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
        }, 2000);
      }
    }, 40);
  };
  loop();
}, 13000);

// mouse effect

document.addEventListener("mousemove", (e) => {
  let container = document.getElementById("circle-container");
  let circle = document.createElement("em");
  let x = e.x;
  let y = e.y;
  circle.style.left = x + 25 + "px";
  circle.style.top = y + 70 + "px";
  circle.style.zIndex = 1000;

  let size = Math.random() * 50;
  circle.style.width = 10 + size + "px";
  circle.style.height = 10 + size + "px";
  container.appendChild(circle);
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
let title = "Bonjour, je m'appelle Wild";
let paragrphe =
  "En tant que développeur web passionné, mon objectif est de fournir des solutions créatives et efficaces, en tenant compte des besoins et des attentes des utilisateurs, pour rendre leur navigation sur le web plus agréable et fluide.";
let iAmWild = "Je suis developpeur web fullstack";
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

setTimeout(() => {
  titleLoop(iAmWild, devText, devtextIndex);
}, 1500);
titleLoop(title, welcomeTitle, lIndex);
setTimeout(() => {
  titleLoop(paragrphe, homeParagraph, pIndex);
}, 3000);

const icons = document.querySelectorAll(".social-network .fa-brands");
icons.forEach((icon) => {
  icon.addEventListener("mouseover", (e) => {
    icon.style.transform = `translate(${e.offsetX - 20}px,${e.offsetY - 13}px)`;
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "";
  });
});
