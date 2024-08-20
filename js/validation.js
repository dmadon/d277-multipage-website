let contactForm = document.getElementById("contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let email2 = document.getElementById("email2");
let message = document.getElementById("message");
let firstNameAlert = document.getElementById("firstNameAlert");
let lastNameAlert = document.getElementById("lastNameAlert");
let emailAlert = document.getElementById("emailAlert");
let email2Alert = document.getElementById("email2Alert");
let emailCompareAlert = document.getElementById("emailCompareAlert");
let messageAlert = document.getElementById("messageAlert");

// set initial status for all form fields
let validFirst = false;
let validLast = false;
let validEmail = false;
let validMessage = false;

// regex pattern for validating correct email address format
let emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// event listeners for each form input
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
email2.addEventListener("input", validateEmail);
message.addEventListener("input", validateMessage);
contactForm.addEventListener("submit", validateForm);

// validation functions for each form input
function validateFirstName (event){
    if(firstName.value.length < 2){
        firstName.style.backgroundColor = "pink";
        firstNameAlert.style.display = "inline";
        validFirst = false;
    }
    else{
        firstName.style.backgroundColor = "transparent";
        firstNameAlert.style.display = "none";
        validFirst = true;
    }
};

function validateLastName(event){
    if(lastName.value.length < 2){
        lastName.style.backgroundColor = "pink";
        lastNameAlert.style.display = "inline";
        validLast = false;
    }
    else{
        lastName.style.backgroundColor = "transparent";
        lastNameAlert.style.display = "none";
        validLast = true;
    }
};

function validateEmail(event){
    if(!email.value.match(emailValidator)){
        email.style.backgroundColor = "pink";
        emailAlert.style.display = "inline";
        validEmail = false;
    }
    else{
        email.style.backgroundColor = "transparent";
        emailAlert.style.display = "none";
        validEmail = true;
    }

    if(!email2.value.match(emailValidator)){
        email2.style.backgroundColor = "pink";
        email2Alert.style.display = "inline";
        validEmail = false;
    }
    else{
        email2.style.backgroundColor = "transparent";
        email2Alert.style.display = "none";
        validEmail = true;
    }

    if(email.value != email2.value){
        emailCompareAlert.style.display = "inline";
        validEmail = false;
    }
    else{
        emailCompareAlert.style.display = "none";
        validEmail = true;
    }




};

// function compareEmails(event){


// }

function validateMessage(event){
    if(message.value.length < 2){
        message.style.backgroundColor = "pink";
        messageAlert.style.display = "inline";
        validMessage = false;
    }
    else{
        message.style.backgroundColor = "transparent";
        messageAlert.style.display = "none";
        validMessage = true;
    }
};

function validateForm(event){    
    if(!validFirst || !validLast || !validEmail || !validMessage){
        event.preventDefault();        
        validateFirstName();
        validateLastName();
        validateEmail();
        validateMessage();
        // compareEmails();
    }
};