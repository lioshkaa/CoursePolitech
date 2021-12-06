let img = document.querySelector(".hide");
let game = document.querySelectorAll(".game");
let modal = document.querySelector(".quiz-over-modal");
let btnTryAgain = document.getElementById("btn-try-again");
let modalTwo = document.querySelector(".modal");
let btnTryAgainTwo = document.getElementById("btn-tr-again");
alert("Привет!, нажми на смурфика и он спрячется!");
img.addEventListener("click", () => {
  computer();
  alert("Найди его!");
  var audio = new Audio(); 
  audio.src = "The Minions.mp3"; 
  audio.autoplay = true;
});
function computer() {
  computerChoice = Math.floor(Math.random() * game.length);
  console.log(computerChoice);
  if (computerChoice == 0) {
    computerChoice = 3;
  }
  if (computerChoice === 1) {
    img.style.display = "block";
    img.style.position = "absolute";
    img.style.top = "200px";
    img.style.left = "600px";
  } else if (computerChoice === 2) {
    img.style.display = "block";
    img.style.position = "absolute";
    img.style.top = "200px";
    img.style.left = "190px";
  } else if (computerChoice == 3) {
    img.style.display = "block";
    img.style.position = "absolute";
    img.style.top = "200px";
    img.style.right = "300px";
  }

  for (option of game) {
    option.addEventListener("click", (el) => {
      if (parseInt(el.target.dataset.id) === computerChoice) {
        img.style.display = "block";
        img.style.position = "absolute";
        img.style.top = "500px";
        modal.classList.add("active");
      } else {
        modalTwo.classList.add("active");
      }
    });
  }
}
btnTryAgain.addEventListener("click", () => {
  window.location.reload();
});
btnTryAgainTwo.addEventListener("click", () => {
  window.location.reload();
});
