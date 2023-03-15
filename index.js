
const form = document.querySelector("#form");

// Récupérer lavaleur des champs nom et email
   const nom = document.getElementById('name');
   const email = document.getElementById('email');

form.onsubmit = function (event) {

  event.preventDefault();

    // Contrôle sur le nom
    if (nom.value === '') {
        
        document.getElementById('name').style.backgroundColor = "red";
        document.getElementById('name').style.color = "#FFF";

        return alert('Vous devez compléter votre nom !');
        // Permet de bloquer l'envoi du formulaire
       
    }
    else {
        document.getElementById('name').style.backgroundColor = "#9C6";
    }

    // Contrôle sur l'email
    if (email.value === '') {
        
        document.getElementById('email').style.backgroundColor = "red";
        document.getElementById('email').style.color = "#FFF";
      return alert('Vous devez compléter votre adresse email');
    }

    else {
        document.getElementById('email').style.backgroundColor = "#9C6";
    }
}
