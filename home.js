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