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
let title = "Bonjour je suis Wild";
let paragrphe =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus tenetur culpa distinctio quaerat odit numquam atque ratione dolorem, adipisci doloribus.";

const createTitle = (word, element, index) => {
  const letter = document.createElement("span");
  letter.textContent = word[index];
  element.appendChild(letter);
};

pIndex = 0;
lIndex = 0;
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
  }, 60);
};

titleLoop(title, welcomeTitle, lIndex);
setTimeout(() => {
  titleLoop(paragrphe, homeParagraph, pIndex);
}, 2200);
