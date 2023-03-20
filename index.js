const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop < showOnPx) {
    backToTopButton.classList.add("hidden");
  } else {
    backToTopButton.classList.remove("hidden");
  }
});

const goToTop = () => {
  document.body.scrollIntoView({ behavior: "smooth" });
};

backToTopButton.addEventListener("click", goToTop);

const form = document.querySelector("#form");

// Récupérer la valeur des champs nom et email
const nom = document.querySelector("#name");
const email = document.querySelector("#email");
const Messg = document.querySelector("#msg");

form.onsubmit = function (event) {
  event.preventDefault();

  // Contrôle sur le nom
  if (nom.value === "") {
    alert("Vous devez compléter votre nom !");
    nom.style.backgroundColor = "#a50f0f";
  } else {
    nom.style.backgroundColor = "#096024";
  }

  // Contrôle sur l'email
  if (email.value === "") {
    alert("Vous devez compléter votre adresse email");

    email.style.backgroundColor = "#a50f0f";
    return false;
  } else {
    email.style.backgroundColor = "#096024";
  }
  form.addEventListener("submit", () => {
    alert("Merci");
    email.value = "";
    email.style.backgroundColor = "";
    nom.value = "";
    nom.style.backgroundColor = "";
    Messg.value = "";
  });
};
