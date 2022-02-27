// Get data

// Validate data
function validateForm() {
  const surname = document.querySelector("#surname").value;
  const firstname = document.querySelector("#firstname").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  const message = document.querySelector("#message").value;

  // REGEX VARIABLES
  // SURNAME
  const surnameRegex = /^[a-z](.*[a-z])?$/gim;
  // NAME
  const firstnameRegex = /^[a-z](.*[a-z])?$/gim;
  // MOBILE
  const mobileRegex = /^\D*0(\D*\d){9}\D*$/;
  // MAIL
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!surnameRegex.test(surname)) {
    document.getElementById("surnamerror").innerHTML =
      "Please enter a valid surname";
    return false;
  } else {
    document.getElementById("surnamerror").innerHTML = null;
  }

  if (!firstnameRegex.test(firstname)) {
    document.getElementById("firstnameerror").innerHTML =
      "Please enter a valid first name";
    return false;
  } else {
    document.getElementById("firstnameerror").innerHTML = null;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailerror").innerHTML =
      "Please enter a valid email";
    return false;
  } else {
    document.getElementById("emailerror").innerHTML = null;
  }

  if (mobile && !mobileRegex.test(mobile)) {
    document.getElementById("mobileerror").innerHTML =
      "Please enter a valid mobile number";
    return false;
  } else {
    document.getElementById("mobileerror").innerHTML = null;
  }

  if (message.replace(/\s/g, "") === "") {
    document.getElementById("messageerror").innerHTML = "Message is mandatory";
    return false;
  } else {
    document.getElementById("messageerror").innerHTML = null;
  }

  return true;
}

// Get the modal
var modal = document.getElementById("modal_container");

// Get the button that opens the modal
var btn = document.getElementById("open");

var closeBtn = document.getElementById("close");

// When the user clicks the button, open the modal
btn.onclick = function () {
  if (validateForm() === true) {
    modal.style.display = "block";
  }
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
