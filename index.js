const openButton = document.querySelector("header > button");
const deNav = document.querySelector("nav");
const sluitButton = document.querySelector("nav button");

openButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);

function openMenu() { 
    deNav.classList.add("toonMenu");
}

function sluitMenu() {
    deNav.classList.remove("toonMenu"); 
  }