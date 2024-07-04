import { header } from "./Utillis/header.js";

header();

window.addEventListener("scroll", () => {
  const firstCont = document.querySelector(".first-container");
  const secondCont = document.querySelector(".second-container");
  const headerEl = document.querySelector("header");
  const thirdEl = document.querySelector(".third-container");
  const lastEl = document.querySelector(".last-container");
  const footerEl = document.querySelector("footer");

  if (window.scrollY > firstCont.offsetTop - headerEl.offsetHeight) {
    document.querySelector(".web-design").classList.add("web-design-anime");
    document.querySelector(".app-design").classList.add("app-design-anime");
    document
      .querySelector(".grapic-design")
      .classList.add("grapic-design-anime");
  }

  if (window.scrollY > thirdEl.offsetHeight) {
    document.querySelector(".possion-text").classList.add("possiontext");
    document.querySelector(".resource-text").classList.add("resourcetext");
    document.querySelector(".friendly-text").classList.add("friendlytext");
    document.querySelector(".passion").classList.add("passion-img");
    document.querySelector(".resource").classList.add("resource-img");
    document.querySelector(".friendly").classList.add("friendly-img");
  }

  if (window.scrollY > thirdEl.offsetTop - 120 + 80) {
    document.querySelector(".last-cont-text h1").classList.add("last-h1");
    document.querySelector(".last-cont-text span").classList.add("last-span");
    document.querySelector(".last-cont-content a").classList.add("last-a");
  }

  if (window.scrollY > window.innerHeight) {
    document
      .querySelector("footer .content .header .right-section ul")
      .classList.add("footer-ul");
    document
      .querySelectorAll("footer .content .body .contact span")
      .forEach((elem) => {
        elem.classList.add("footer-span");
      });
    document
      .querySelectorAll("footer .content .body .social-link img")
      .forEach((elem) => {
        elem.classList.add("footer-img");
      });
  }
});

window.addEventListener("onloaded", () => {
  const firstCont = document.querySelector(".first-container");
  const secondCont = document.querySelector(".second-container");
  const headerEl = document.querySelector("header");
  const thirdEl = document.querySelector(".third-container");
  const lastEl = document.querySelector(".last-container");
  const footerEl = document.querySelector("footer");

  if (window.scrollY > firstCont.offsetTop - headerEl.offsetHeight) {
    document.querySelector(".web-design").classList.add("web-design-anime");
    document.querySelector(".app-design").classList.add("app-design-anime");
    document
      .querySelector(".grapic-design")
      .classList.add("grapic-design-anime");
  }

  if (window.scrollY > thirdEl.offsetHeight) {
    document.querySelector(".possion-text").classList.add("possiontext");
    document.querySelector(".resource-text").classList.add("resourcetext");
    document.querySelector(".friendly-text").classList.add("friendlytext");
    document.querySelector(".passion").classList.add("passion-img");
    document.querySelector(".resource").classList.add("resource-img");
    document.querySelector(".friendly").classList.add("friendly-img");
  }

  if (window.scrollY > thirdEl.offsetTop - 120 + 80) {
    document.querySelector(".last-cont-text h1").classList.add("last-h1");
    document.querySelector(".last-cont-text span").classList.add("last-span");
    document.querySelector(".last-cont-content a").classList.add("last-a");
  }

  if (window.scrollY > window.innerHeight - 80) {
    document
      .querySelector("footer .content .header .right-section ul")
      .classList.add("footer-ul");
    document
      .querySelectorAll("footer .content .body .contact span")
      .forEach((elem) => {
        elem.classList.add("footer-span");
      });
    document
      .querySelectorAll("footer .content .body .social-link img")
      .forEach((elem) => {
        elem.classList.add("footer-img");
      });
  }
});
