var nameSpan = document.querySelector(".nameSpan");
var LNameSpan = document.querySelector(".LNameSpan");
var emailSpan = document.querySelector(".emailSpan");
var fName = document.querySelector(".name");
var lName = document.querySelector(".lname");
var contactEmail = document.querySelector(".contact-email");
var regName = /^[A-Z][a-zA-Z]*$/;
var regLName = /^[A-Z][a-zA-Z]*$/;
var regcontactEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var sendButton = document.querySelector(".form-btn");

fName.addEventListener("keyup", checkName);
lName.addEventListener("keyup", checkLName);
contactEmail.addEventListener("keyup", checkEmail);
sendButton.addEventListener("click", sendButtonClicked);

function checkName() {
  if (!regName.test(fName.value)) {
    nameSpan.innerHTML =
      "First letter must be uppercase, and the field must not be empty.";
  } else {
    nameSpan.innerHTML = "";
  }
}

function checkLName() {
  if (!regLName.test(lName.value)) {
    LNameSpan.innerHTML =
      "First letter must be uppercase, and the field must not be empty.";
  } else {
    LNameSpan.innerHTML = "";
  }
}

function checkEmail() {
  if (!regcontactEmail.test(contactEmail.value)) {
    emailSpan.innerHTML = "Enter a valid email adress.";
  } else {
    emailSpan.innerHTML = "";
  }
}

function sendButtonClicked() {
  alert("Message sent");
}
