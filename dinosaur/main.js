const buttonGame = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
let audio = new Audio("Fon.mp3");
setTimeout(() => {
  modalContent.classList.add("active");
}, 300);
buttonGame.addEventListener("click", () => {
  modal.classList.add("hide");
  audio.src = "Fon.mp3";
  audio.autoplay = true;
  audio.loop = true;
});
