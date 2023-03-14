function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
    }
    
    function Verification() {
    // Récupérer lavaleur des champs nom et email
    var Nom = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    
    // Contrôle sur le nom
    if(Nom==''){
    alert('Vous devez compléter votre nom !');
    document.getElementById('name').style.backgroundColor="red";
    document.getElementById('name').style.color="#FFF";
    
    // Permet de bloquer l'envoi du formulaire
    return false;
    }
    else{
    document.getElementById('name').style.backgroundColor="#9C6";
    }
    
    // Contrôle sur l'email
    if(Email=='') {
    alert('Vous devez compléter votre adresse email');
    document.getElementById('email').style.backgroundColor="red";
    document.getElementById('email').style.color="#FFF";
    return false;
    }
    
    else{
    document.getElementById('email').style.backgroundColor="#9C6";
    }
    }
    