// darkmode
const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const lightDarkInfo = document.querySelector("#light-dark-info");
const toggleCircle = document.querySelector(".toggle-circle");
const html = document.querySelector("html");

darkModeToggle.addEventListener("click", () => {
  if (darkModeToggle.checked) {
    darkMode.classList.remove("hidden");
    setTimeout(() => {
      html.classList.add("dark");
      darkMode.classList.add("hidden");
      lightDarkInfo.innerHTML = `Dark Mode`;
      toggleCircle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }, 1500);
  } else {
    lightMode.classList.remove("hidden");
    setTimeout(() => {
      html.classList.remove("dark");
      lightMode.classList.add("hidden");
      lightDarkInfo.innerHTML = `light Mode`;
      toggleCircle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }, 1500);
  }
});

// fixed navbar
window.onscroll = () => {
  const header = document.querySelector("header");
  const arrowUp = document.querySelector("#arrow-up");
  const fixNav = header.offsetTop;

  window.pageYOffset > fixNav
    ? header.classList.add("navbar-fixed")
    : header.classList.remove("navbar-fixed");

  window.pageYOffset > fixNav
    ? arrowUp.classList.remove("hidden")
    : arrowUp.classList.add("hidden");
};

// hamburger menu
const hamburger = document.querySelector("#hamburger-toggle");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("scale-0");
});
