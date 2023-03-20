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

/* const form = document.querySelector("#form");

// Récupérer la valeur des champs nom et email
const nom = document.querySelector("#name");
const email = document.querySelector("#email");
const Messg = document.querySelector("#msg");

form.onsubmit = function (event) {
  event.preventDefault();

  // Contrôle sur le nom
  if (nom.value === "") {
    nom.style.backgroundColor = "#a50f0f";
  } else {
    nom.style.backgroundColor = "#096024";
  }

  // Contrôle sur l'email
  if (email.value === "") {
    email.style.backgroundColor = "#a50f0f";
    return false;
  } else {
    email.style.backgroundColor = "#096024";
  }
  form.addEventListener("submit", () => {
    email.value = "";
    email.style.backgroundColor = "";
    nom.value = "";
    nom.style.backgroundColor = "";
    Messg.value = "";
  });
};
 */
const submitButton = document.querySelector(".submit-button");
const messageEmpty = document.querySelector("#message-error");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = document.querySelector(".email-input").value;
  const emailInput = document.querySelector(".email-input");
  const nameValue = document.querySelector(".name-input").value;
  const nameInput = document.querySelector(".name-input");
  const messageValue = document.querySelector(".user-message").value;
  const messageInput = document.querySelector(".user-message");

  switch (true) {
    case emailValue === "" && nameValue === "" && messageValue === "":
      emailInput.style.backgroundColor = "#ea1212";
      nameInput.style.backgroundColor = "#ea1212";
      messageInput.style.backgroundColor = "#ea1212";

      messageEmpty.innerHTML = "Veuillez remplir tous les champs";
      break;
    case nameValue === "":
      messageEmpty.innerHTML = "Veuillez renseigner votre nom";
      break;
    case emailValue === "":
      messageEmpty.innerHTML = "Veuillez renseigner une adresse email";
      break;
    case messageValue === "":
      messageInput.style.backgroundColor = "#ea1212";
      messageEmpty.innerHTML = "Veuillez insérer un message";
      break;
    case (messageInput.style.backgroundColor = "#ea1212" && !emailValue):
      messageInput.style.backgroundColor = "";
      break;
  }
});
