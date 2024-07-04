export function header() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.querySelector("header").classList.add("header-shawdow");
    } else {
      document.querySelector("header").classList.remove("header-shawdow");
    }

    const menu = document.querySelector(".menu");
    const cancel = document.querySelector(".cancel");
    menu.classList.remove("remove-menu");
    cancel.classList.remove("r-cancel");

    document.querySelector(".pop-menu").classList.remove("show-pop-bar");
  });

  document.querySelector(".menu").addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    const cancel = document.querySelector(".cancel");

    menu.classList.add("remove-menu");
    cancel.classList.add("r-cancel");

    document.querySelector(".pop-menu").classList.toggle("show-pop-bar");
  });

  document.querySelector(".cancel").addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    const cancel = document.querySelector(".cancel");
    menu.classList.remove("remove-menu");
    cancel.classList.remove("r-cancel");
    console.log("ddx");

    document.querySelector(".pop-menu").classList.toggle("show-pop-bar");
  });

  window.addEventListener("onloaded", () => {
    if (window.scrollY > 50) {
      document.querySelector("header").classList.add("header-shawdow");
    } else {
      document.querySelector("header").classList.remove("header-shawdow");
    }
  });
}
