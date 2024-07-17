import { header } from "./Utillis/header.js";
import { sendEmail } from "./Utillis/contact-details.js";
header;

document.querySelector("form").addEventListener("submit", (e) => {
  const name = document.querySelector(".name");
  const email = document.querySelector(".email");
  const phone = document.querySelector(".phone");
  const message = document.querySelector(".message");

  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const phoneError = document.querySelector(".phone-error");
  const messageError = document.querySelector(".message-error");
  const btn = document.querySelector("button");

  e.preventDefault();
  const nameValidation = name.value.includes(" ") || name.value.length < 3;
  const emallValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    );

  const countryCodes = ["091", "081", "070", "090", "080"];

  const phoneValidation = countryCodes.some(
    (elem) =>
      phone.value.match("^" + elem) &&
      phone.value.length > 10 &&
      phone.value.length < 12
  );

  if (nameValidation) {
    name.focus();
    nameError.style.display = "flex";
    // btn.disabled;
  } else if (!nameValidation) {
    if (email.value.length === 0) {
      nameError.style.display = "none";
      emailError.style.display = "flex";
      emailError.innerHTML = "Email Address is required";
      email.focus();
    } else if (!emallValidation) {
      nameError.style.display = "none";
      emailError.style.display = "flex";
      email.focus();
      emailError.innerHTML = "Invalid email";
    } else if (emallValidation) {
      if (phone.value.length === 0) {
        phone.focus();
        emailError.style.display = "none";
        phoneError.style.display = "flex";
        phoneError.innerHTML = "Phone is required";
      } else if (!phoneValidation) {
        phone.focus();
        emailError.style.display = "none";
        phoneError.style.display = "flex";
        phoneError.innerHTML = "Invalid phone number";
      } else if (!message.value.length) {
        message.focus();
        phoneError.style.display = "none";
        messageError.style.display = "flex";
        messageError.innerHTML = "Message is required";
      } else if (message.value.length) {
        messageError.style.display = "none";
        const details = {
          title: "Details From Designo",
          name: name.value,
          email: email.value,
          phone: phone.value,
          message: message.value,
        };

        // setTimeout(() => {
        //   btn.innerText = "SUBMITTING";
        // }, 1000);

        sendEmail(details);
        name.value = "";
        phone.value = "";
        email.value = "";
        message.value = "";
        // window.location.href = "index.html";
      }
    }
  }
});
