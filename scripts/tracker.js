var totalTime = 0;

setInterval(function trackTime() {
  totalTime++;
  document.getElementById("time").innerHTML = "Total time spent: " + totalTime + "s";
}, 1000);

var clicks = 0;

window.onclick = function () {
  clicks++;
  document.getElementById("clicks").innerHTML = "Total number of mouse clicks: " + clicks;
}

var keyPress = 0;

window.onkeydown = function () {
  keyPress++;
  document.getElementById("key").innerHTML = "Total number of key presses: " + keyPress;
}

window.onkeyup = function () {
  var username = document.getElementById("login_username").value.length;
  var password = document.getElementById("login_password").value.length;
  var username2 = document.getElementById("register_username").value.length;
  var password2 = document.getElementById("register_password").value.length;
  var confirmPassword2 = document.getElementById("register_password2").value.length;
  var address = document.getElementById("register_address").value.length;
  var email = document.getElementById("register_email").value.length;
  var zipcode = document.getElementById("register_zipcode").value.length;
  var country = document.getElementById("register_country").value.length;
  var language = document.getElementById("register_language").value.length;
  var name1 = document.getElementById("register_name").value.length;
  var about = document.getElementById("register_bio").value.length;
  var charsTyped = username + username2 + password + password2 + confirmPassword2 + address + email
    + zipcode + country + language + name1 + about;
  document.getElementById("chars").innerHTML = "Total number of characters typed: " + charsTyped;
}

function showTracking() {
  var trackingData = document.getElementById("hidden-div")
  trackingData.style.visibility = "visible";
}

function hideTracking() {
  var trackingData = document.getElementById("hidden-div")
  trackingData.style.visibility = "hidden";
}