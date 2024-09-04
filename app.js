let result = document.querySelector(".result");
let email_adress = document.querySelector(".email_adress");
let email_input = document.getElementById("email_input");
let errors_email = document.querySelector(".errors-email");
let subscribe = document.querySelector(".subscribe");
let dimiss_btn = document.querySelector(".dimiss_btn");
let container = document.querySelector(".container");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
subscribe.onclick = () => {
  let isValid = true;
  if (email_input.value == "" || !emailPattern.test(email_input.value)) {
    errors_email.innerHTML = "your email is required";
    isValid = false;
  } else {
    isValid = true;
    errors_email.innerHTML = "";
  }
  if (isValid) {
    show_result();
  }
};

// show result subscribing===========
const show_result = () => {
  container.style.display = "none";
  result.style.display = "flex";
  email_adress.innerHTML = email_input.value;
};
//dimiss all===========
dimiss_btn.onclick = () => {
  container.style.display = "flex";
  result.style.display = "none";
  email_adress.innerHTML = "";
  email_input.value = "";
};
