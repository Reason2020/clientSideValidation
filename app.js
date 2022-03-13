//Targeting the Submit Button
let submitBtn = document.querySelector(".submit");

//Form Validation Section
const formValidation = function (Event e) {
  //Targeting the input fields
  let firstName = document.querySelector(".fname").value;
  let lastName = document.querySelector(".lname").value;
  let contact = document.querySelector(".contact").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;

  //Setting the Patterns for the input fields
  let namePattern = /^[A-Z]{1}[a-z]{2,}$/g;
  let contactPattern = /^[9]{1}[0-9]{9}$/g;
  let emailPattern = /[A-Za-z]{5,}[0-9]{2,8}@[a-z]{3,}.[a-z.]{2,}$/g;
  let passwordPattern = /[A-Za-z0-9]{1,}[!@#$%^&*]{1}/g;

  let firstNameOk = namePattern.test(firstName);
  let lastNameOk = namePattern.test(lastName);
  let contactOk = contactPattern.test(contact);
  let emailOk = emailPattern.test(email);
  let passwordOk = passwordPattern.test(password);

  //Testing the values
  if (firstNameOk && contactOk && emailOk && passwordOk) {
    alert("Form Validation Successful");
  } else {
    alert("Failed");
  }
};

//Event Listener
submitBtn.addEventListener("click", formValidation);
