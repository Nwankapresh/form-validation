let myForm = document.getElementById("my-form");
let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
 let name= document.getElementById("form-name").value;
if(name.length==0){
    nameError.innerHTML="Name is required";
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML="Write full name";
    return false;
}
    nameError.innerHTML="Good"
    return true;

}

function validateEmail(){
    let email= document.getElementById("form-email").value;
    if(email.length==0) {
        emailError.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Email invalid";
        return false;
    }
        emailError.innerHTML="Good";
        return true;
}

function validatePhone(){
    let phone= document.getElementById("form-phone").value;
    if(phone==0) {
        phoneError.innerHTML="Phone number required";
        return false;
    }
    if(!phone.length != 11){
        phoneError.innerHTML="Phone number should be 11 digits";
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML="Only digits please";
        return false;
    }
        phoneError.innerHTML="Good";
        return true;
}

function validateMessage(){
    let message= document.getElementById("form-message").value;
    let required= 50;
    let left= required-message.length;
    if(message.length==0){
        messageError.innerHTML="Field required";
        return false;
    }
    if(left >0){
        messageError.innerHTML=left + " more characters required";
        return false;
    }
        messageError.innerHTML="Good";
        return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.display="block";
        submitError.innerHTML="Please fix error to submit";
        setTimeout(function(){submitError.style.display="none";}, 3000);
        return false;
    }
    
}
//Prevent form from submitting, if condition is not met
myForm.addEventListener("submit", onSubmit);
    function onSubmit(e){
        if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
            e.preventDefault();
            return false;
        }
    }