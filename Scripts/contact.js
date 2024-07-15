import { header } from "./Utillis/header.js";

header;

document.querySelector("form").addEventListener("click", (e) => {
  const name = document.querySelector(".name");
  const email = document.querySelector(".email");
  const phone = document.querySelector(".phone");
  const message = document.querySelector(".message");

  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const phoneError = document.querySelector(".phone-error");
  const messageError = document.querySelector(".message-error");

  e.preventDefault();
  if ("") {
    console.log("error");
  } else {
    console.log("ok");
  }
});
