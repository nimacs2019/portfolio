// ...........js for nav section.............
var sidemenuEl = document.getElementById("sidemenu");

function openmenu() {
  sidemenuEl.style.right = "0";
}

function closemenu() {
  sidemenuEl.style.right = "-200px";
}

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabs = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabs[i].classList.add("active");

    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByClassName("tab-content")[i].classList.add("active");

    tabIndicator.style.left = `calc(calc(100% / 2) * ${i})`;
  });
}
