const login_username = document.getElementById("login_username");
const login_password = document.getElementById("login_password");
const login_form = document.getElementById("login");
const register_name = document.getElementById("register_name");
const register_email = document.getElementById("register_email");
const register_username = document.getElementById("register_username");
const register_password = document.getElementById("register_password");
const register_password2 = document.getElementById("register_password2");
const register_address = document.getElementById("register_address");
const register_zipcode = document.getElementById("register_zipcode");
const register_country = document.getElementById("register_country");
const register_language = document.getElementById("register_language");
const register_agree = document.getElementById("register_agree");
const register_form = document.getElementById("register");

login_form.addEventListener('submit', event => {
    
    if(!login_password.classList.contains("valid") || 
        !login_username.classList.contains("valid")){
        event.preventDefault();
        validateLoginUsername();
        validateLoginPassword();
    }
});

register_form.addEventListener('submit', event => {
    
    if(!register_name.classList.contains("valid") || 
        !register_email.classList.contains("valid") || 
        !register_username.classList.contains("valid") || 
        !register_password.classList.contains("valid") || 
        !register_password2.classList.contains("valid") ||
        !register_zipcode.classList.contains("valid") || 
        !register_country.classList.contains("valid") ||
        !register_language.classList.contains("valid") ||
        !register_agree.checked){
        event.preventDefault();
        validateRegisterName();
        validateRegisterEmail();
        validateRegisterUsername();
        validateRegisterPassword();
        validateRegisterPassword2();
        validateRegisterZipCode();
        validateRegisterCountry();
        validateRegisterLanguage();
    }
});


function notEmpty(element){
    const value = element.value.trim();
    const message = element.parentElement.querySelector(".message");
    if(value == ''){
        element.classList.add("invalid");
        element.classList.remove("valid");
        message.innerHTML = "This field cannot be empty";
    }
    else {
        element.classList.add("valid");
        element.classList.remove("invalid");
        message.innerHTML = "";
    }
}

function isUppercaseLetter(str){
    let code = str.codePointAt(0);
    return (code >= 65 && code < 91);
}

function isLowercaseLetter(str){
    let code = str.codePointAt(0);
    return (code >= 97 && code < 123);
}

function isLetter(str){
    return isLowercaseLetter(str) || isUppercaseLetter(str);
}

function isNumber(str){
    let code = str.codePointAt(0);
    return (code >= 48 && code < 58);
}

function isSpecialChar(str){
    return !isLetter(str) && !isNumber(str);
}

function validateLoginUsername(){
    const username = login_username.value.trim();
    const message = login_username.parentElement.querySelector(".message");
    notEmpty(login_username);
    if(username.length < 5 || username.length > 12){
        login_username.classList.add("invalid");
        login_username.classList.remove("valid");
        message.innerHTML = "Must be between 5 and 12 characters";
    }
    else{
        login_username.classList.add("valid");
        login_username.classList.remove("invalid");
        message.innerHTML = "";
    }
}

function validateLoginPassword(){
    notEmpty(login_password);
}



function validateRegisterName(){
    const name = register_name.value.trim();
    const message = register_name.parentElement.querySelector(".message");
    notEmpty(register_name);
    for(var i = 0; i < name.length; i++) {
        if(!isLetter(name[i])){
            register_name.classList.add("invalid");
            register_name.classList.remove("valid");
            message.innerHTML = "Must only contain letters";
            break;
        }
    }
}

function validateRegisterEmail(){
    const email = register_email.value.trim();
    const message = register_email.parentElement.querySelector(".message");
    notEmpty(register_email);
    const regex = /([A-Za-z0-9]+\.)*[A-Za-z0-9]+@([A-Za-z0-9]+\.)*[A-Za-z0-9]+/;
    if(!regex.test(email)){
        register_email.classList.add("invalid");
        register_email.classList.remove("valid");
        message.innerHTML = "Not a valid email";
    }
}


function validateRegisterUsername(){
    const username = register_username.value.trim();
    const message = register_username.parentElement.querySelector(".message");
    notEmpty(register_username);
    if(username.length < 5 || username.length > 12){
        register_username.classList.add("invalid");
        register_username.classList.remove("valid");
        message.innerHTML = "Must be between 5 and 12 characters";
    }
    else if(!isUppercaseLetter(username[0]) && isLetter(username[username.length-1])){
        register_username.classList.add("invalid");
        register_username.classList.remove("valid");
        message.innerHTML = "Must start with a capital letter and end with a number/special character";
    }
    else{
        register_username.classList.add("valid");
        register_username.classList.remove("invalid");
        message.innerHTML = "";
    }
}

function validateRegisterPassword(){
    const password = register_password.value.trim();
    const message = register_password.parentElement.querySelector(".message");
    notEmpty(register_password)
    if(password.length < 12){
        register_password.classList.add("invalid");
        register_password.classList.remove("valid");
        message.innerHTML = "Must be longer than 12 characters";
        return;
    }
    let hasCapital = false;
    let hasNumber = false;
    let hasLowercase = false;
    let hasSymbol = false;
    for(var i = 0; i < password.length; i++) {
        if(isLowercaseLetter(password[i])){
            hasLowercase = true;
        }
        if(isUppercaseLetter(password[i])){
            hasCapital = true;
        }
        if(isNumber(password[i])){
            hasNumber = true;
        }
        if(isLowercaseLetter(password[i])){
            hasSymbol = true;
        }
    }
    if(!hasCapital || !hasLowercase || !hasSymbol || !hasNumber){
        register_password.classList.add("invalid");
        register_password.classList.remove("valid");
        message.innerHTML = "Must contains letters, capital, numbers and special characters";
    }
    else{
        register_password.classList.add("valid");
        register_password.classList.remove("invalid");
        message.innerHTML = "";
    }
}

function validateRegisterPassword2(){
    const password = register_password2.value.trim();
    const message = register_password2.parentElement.querySelector(".message");
    if(password != register_password.value.trim()){
        register_password2.classList.add("invalid");
        register_password2.classList.remove("valid");
        message.innerHTML = "Passwords do not match";
    }
    else{
        register_password2.classList.add("valid");
        register_password2.classList.remove("invalid");
        message.innerHTML = "";
    }
}

function validateRegisterZipCode(){
    const zip = register_zipcode.value.trim();
    const message = register_zipcode.parentElement.querySelector(".message");
    if(zip.length != 6 ||
        !isNumber(zip[0]) ||
        !isNumber(zip[1]) ||
        !isNumber(zip[2]) ||
        !isNumber(zip[3]) ||
        !isLetter(zip[4]) ||
        !isLetter(zip[5])){
        register_zipcode.classList.add("invalid");
        register_zipcode.classList.remove("valid");
        message.innerHTML = "zip code contains 4 digits and 2 letters";
    }
    else{
        register_zipcode.classList.add("valid");
        register_zipcode.classList.remove("invalid");
        message.innerHTML = "";
    }
}

function validateRegisterCountry(){
    const country = register_country.value.trim();
    const message = register_country.parentElement.querySelector(".message");
    let valid = country.length > 0;
    notEmpty(register_country);
    for(var i = 0; i < country.length; i++){
        if(!(isLetter(country[i]) || country[i] == ' ' || country[i] == '-')){
            register_country.classList.add("invalid");
            register_country.classList.remove("valid");
            message.innerHTML = "cannot contain digits or special characters";
            valid = false;
            break;
        }
    }
    if(valid){
        register_country.classList.add("valid");
        register_country.classList.remove("invalid");
        message.innerHTML = "";
    }
}

function validateRegisterLanguage(){
    const language = register_language.value.trim();
    const message = register_language.parentElement.querySelector(".message");
    let valid = language.length > 0;
    notEmpty(register_language);
    for(var i = 0; i < language.length; i++){
        if(!(isLetter(language[i]) || language[i] == ' ' || language[i] == '-')){
            register_language.classList.add("invalid");
            register_language.classList.remove("valid");
            message.innerHTML = "cannot contain digits or special characters";
            valid = false;
            console.log(language[i], i);
            break;
        }
    }
    if(valid){
        register_language.classList.add("valid");
        register_language.classList.remove("invalid");
        message.innerHTML = "";
    }
}
