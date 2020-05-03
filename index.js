import ryuMoveset from "./ryuMoveset.js";

const butWrap = document.querySelector(".moveset-btn-wrap");
const buttons = document.querySelectorAll(".moveset-btn");
const imgAction = document.querySelector("#img-action");

function showMoveset({ target }) {
  const action = target.dataset.action;
  buttons.forEach((el) => el.classList.remove("active-btn"));

  if (action) {
    target.classList.add("active-btn");
    imgAction.alt = action;
    imgAction.src = ryuMoveset[action];
  }
}

butWrap.addEventListener("click", showMoveset);
