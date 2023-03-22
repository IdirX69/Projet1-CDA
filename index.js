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
const form = document.querySelector(".form");

function createBusinessCard() {
  const nameValue = document.querySelector(".name-input").value;
  const emailValue = document.querySelector(".email-input").value;
  const messageValue = document.querySelector(".user-message").value;

  const businessCard = document.querySelector(".business-card");
  const businessCardContent = businessCard.querySelector(
    ".business-card-content"
  );
  businessCardContent.querySelector(".welcome-user").textContent = nameValue;

  businessCardContent.querySelector(".email").textContent = emailValue;
  businessCardContent.querySelector(".message").textContent = messageValue;

  businessCard.style.display = "flex";
  businessCard.classList.add("rotated");

  // Afficher le contenu de la carte à la fin de l'animation
  setTimeout(() => {
    businessCardContent.style.display = "block";
  }, 1000);
}

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

  if (emailValue !== "") {
    emailInput.style.backgroundColor = "rgba(0, 255, 255, 0.032)";
  }

  if (nameValue !== "") {
    nameInput.style.backgroundColor = "rgba(0, 255, 255, 0.032)";
  }

  if (messageValue !== "") {
    messageInput.style.backgroundColor = "rgba(0, 255, 255, 0.032)";
  }

  if (emailValue !== "" && nameValue !== "" && messageValue !== "") {
    form.style.display = "none";
    submitButton.style.display = "none";
    createBusinessCard();
    emailInput.value = "";
    nameInput.value = "";
    messageInput.value = "";
    messageEmpty.innerHTML = "";
  } else {
    // Si un ou plusieurs composants ne sont pas remplis ont effectue ces vérifications

    switch (true) {
      case emailValue === "" && nameValue === "" && messageValue === "":
        nameInput.style.backgroundColor = "#ea1212";
        emailInput.style.backgroundColor = "#ea1212";

        messageInput.style.backgroundColor = "#ea1212";

        messageEmpty.innerHTML = "Veuillez remplir tous les champs";
        break;
      case emailValue === "" && nameValue === "":
        emailInput.style.backgroundColor = "#ea1212";
        nameInput.style.backgroundColor = "#ea1212";

        messageEmpty.innerHTML = "Veuillez remplir les champs manquants";
        break;
      case emailValue === "" && messageValue === "":
        emailInput.style.backgroundColor = "#ea1212";
        messageInput.style.backgroundColor = "#ea1212";

        messageEmpty.innerHTML = "Veuillez remplir les champs manquants";
        break;
      case nameValue === "" && messageValue === "":
        nameInput.style.backgroundColor = "#ea1212";
        messageInput.style.backgroundColor = "#ea1212";

        messageEmpty.innerHTML = "Veuillez remplir tous les champs";
        break;
      case nameValue === "":
        messageEmpty.innerHTML = "Veuillez renseigner votre nom";
        break;
      case emailValue === "":
        emailInput.style.backgroundColor = "#ea1212";

        messageEmpty.innerHTML = "Veuillez renseigner une adresse email";
        break;
      case messageValue === "":
        messageInput.style.backgroundColor = "#ea1212";
        messageEmpty.innerHTML = "Veuillez insérer un message";
        break;
    }
  }
});
