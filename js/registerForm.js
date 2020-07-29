//Global Variables
var el_register_firstname = document.getElementById('register_firstname');
var el_error_register_firstname = document.getElementById('error_register_firstname');

var el_register_lastname = document.getElementById('register_lastname');
var el_error_register_lastname = document.getElementById('error_register_lastname');

var el_register_email = document.getElementById('register_email');
var el_error_register_email = document.getElementById('error_register_email');

var el_register_password = document.getElementById('register_password');
var el_error_register_password = document.getElementById('error_register_password');

var el_register_residentApproval = document.getElementById('register_residentApproval');
var el_error_register_residentApproval = document.getElementById('error_register_residentApproval');

var el_register_norobot = document.getElementById('register_norobot');
var el_error_register_norobot = document.getElementById('error_register_norobot');

//Event Listeners
el_register_firstname.addEventListener('blur', validate_register_firstname, false);
el_register_lastname.addEventListener('blur', validate_register_lastname, false);
el_register_email.addEventListener('blur', validate_register_email, false);
el_register_password.addEventListener('blur', validate_register_password, false);
el_register_residentApproval.addEventListener('blur', validate_register_residentApproval, false);

//First Name Validation Function
function validate_register_firstname(){
    if(el_register_firstname.value == ""){
        //alert("Missing First Name");
        el_error_register_firstname.innerHTML = "<p class=\"alert alert-danger\">You must enter a first name.</p>"
        return false;
    } else {
        el_error_register_firstname.innerHTML = "";
        return true;
    }
}

//Last Name Validation Function
function validate_register_lastname(){
    if(el_register_lastname.value == ""){
        //alert("Missing Last Name");
        el_error_register_lastname.innerHTML = "<p class=\"alert alert-danger\">You must enter a last name.</p>"
        return false;
    } else {
        el_error_register_lastname.innerHTML = "";
        return true;
    }
}

//Email Validation Function
function validate_register_email(){
    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(el_register_email.value == ""){
        //alert("Missing Email Address");
        el_error_register_email.innerHTML = "<p class=\"alert alert-danger\">You must enter a valid Email address.</p>"
        return false;
    } else if(!el_register_email.value.match(regEmail)){
        el_error_register_email.innerHTML = "<p class=\"alert alert-danger\">This is not a valid Email address.</p>"

    } else {

        el_error_register_email.innerHTML = "";
        return true;
    }
}

//Password Validation Function
function validate_register_password(){
    if(el_register_password.value == ""){
        //alert("Missing Password");
        el_error_register_password.innerHTML = "<p class=\"alert alert-danger\">You must enter a password.</p>"
        return false;
    } else {
        el_error_register_password.innerHTML = "";
        return true;
    }
}

//Resident Approval Validation
function validate_register_residentApproval(){
    if(el_register_residentApproval.value == ""){
        //alert("Missing Approval Code");
        el_error_register_residentApproval.innerHTML = "<p class=\"alert alert-danger\">You must enter a valid Resident Approval Code.</p>"
        return false;
    } else {
        el_error_register_residentApproval.innerHTML = "";
        return true;
    }
}

//Check Box Validation Function
function validate_register_norobot() {
    if (!el_register_norobot.checked) {
        //alert("Missing Comments");
        el_error_register_norobot.innerHTML = "<p class=\"alert alert-danger\">Please verify that you are not a robot.</p>"
        return false;
    } else {
        el_error_register_norobot.innerHTML = "";
        return true;
    }
}

//Form Validation Function
function validate_register_form(){
    if(validate_register_firstname() && validate_register_lastname() && validate_register_email() && validate_register_password() && validate_register_residentApproval() && validate_register_norobot()){
        return true;
    } else {
        return false;
    }
}