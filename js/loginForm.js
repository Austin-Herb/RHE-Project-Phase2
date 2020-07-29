//Global Variables
var el_login_email = document.getElementById('login_email');
var el_error_login_email = document.getElementById('error_login_email');

var el_login_password = document.getElementById('login_password');
var el_error_login_password = document.getElementById('error_login_password');

//Event Listeners
el_login_email.addEventListener('blur', validate_login_email, false);
el_login_password.addEventListener('blur', validate_login_password, false);

//Email Validation Function
function validate_login_email(){
    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(el_login_email.value == ""){
        //alert("Missing Email Address");
        el_error_login_email.innerHTML = "<p class=\"alert alert-danger\">You must enter a valid Email address.</p>"
        return false;
    } else if(!el_login_email.value.match(regEmail)){
        el_error_login_email.innerHTML = "<p class=\"alert alert-danger\">This is not a valid Email address.</p>"

    } else {

        el_error_login_email.innerHTML = "";
        return true;
    }
}

//Password Validation Function
function validate_login_password(){
    if(el_login_password.value == ""){
        //alert("Missing Password");
        el_error_login_password.innerHTML = "<p class=\"alert alert-danger\">You must enter a password.</p>"
        return false;
    } else {
        el_error_login_password.innerHTML = "";
        return true;
    }
}

//Form Validation Function
function validateForm(){
    if(validate_login_email() && validate_login_password()){
        return true;
    } else {
        return false;
    }
}