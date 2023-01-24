var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var slider = document.getElementById("slider");

function move_to_login_form() {
  loginForm.style.left = "65px";
  registerForm.style.left = "410px";
  slider.style.left = "0px";
}

function move_to_register_form() {
  loginForm.style.left = "-290px";
  registerForm.style.left = "65px";
  slider.style.left = "110px";
}