
const form = document.querySelector("#form");

// Récupérer la valeur des champs nom et email
const nom = document.querySelector('#name');
const email = document.querySelector('#email');
const Messg = document.querySelector('#msg')

form.onsubmit = function (event) {

  event.preventDefault();

  // Contrôle sur le nom
  if (nom.value === '') {

    alert('Vous devez compléter votre nom !');
    nom.style.backgroundColor = "#a50f0f";

  }
  else {
    nom.style.backgroundColor = "#096024";
  }

  // Contrôle sur l'email
  if (email.value === '') {

    alert('Vous devez compléter votre adresse email');

    email.style.backgroundColor = "#a50f0f";
    return false
  }

  else {
    email.style.backgroundColor = "#096024";
  }
  form.addEventListener('submit', () => {
    alert('Merci')
    email.value = ''
    email.style.backgroundColor = ''
    nom.value = ''
    nom.style.backgroundColor = ''
    Messg.value = ''
  })
}
