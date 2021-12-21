const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const checkWinner = document.querySelector(".Winner");
const Game = document.querySelector(".game");
const modal = document.querySelector(".modal");
const btnGameOver = document.querySelector(".btn");
const modalContent = document.querySelector(".modal-content");
let Winner = 0;
document.addEventListener("keydown", (event) => {
  jump();
});
const jump = () => {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
};

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Жаль ты проиграл");
    Winner = 0;
  } else {
    Winner++;
    checkWinner.innerHTML = Winner;
  }
  if (Winner === 50000) {
    modal.classList.add("hide");
    modalContent.classList.add("active");
    Game.classList.add("none");
  }
}, 300);
