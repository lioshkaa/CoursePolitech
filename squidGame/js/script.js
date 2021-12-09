const content = document.querySelector(".content");
const modal = document.querySelector(".modal");
const element = document.querySelector(".form");
const buttonGame = document.querySelector(".button");
const buttonNextPlay = document.querySelector(".buttonNextPlay");
const wrap = document.querySelector(".wrap");
const modalGame = document.querySelector(".modals");
const buttonPlayGame = document.querySelector(".buttonPlayGame");
let out = "";
let audio = new Audio();
setTimeout(() => {
  content.classList.add("active");
}, 500);
buttonGame.addEventListener("click", () => {
  modal.classList.add("hide");
  audio.src = "SquidGame.mp3";
  audio.autoplay = true;
  audio.loop = true;
});
buttonNextPlay.addEventListener("click", () => {
  let Name = element.name.value;
  if (Name == "") {
    alert("Заполни поля");
  } else {
    wrap.classList.add("link");
  }
});
let stop = false;
modalGame.addEventListener("click", () => {
  modalGame.classList.add("hide");
});
wrap.addEventListener("click", function (e) {
  if (stop == false) {
    let right = player.style.getPropertyValue("left");
    right = Number(right.substring(0, right.length - 2)) + 10;
    player.style.setProperty("left", right + "px");
  } else {
    out = "Ты проиграл";
    document.querySelector(".Winner").innerHTML = out;
    setInterval(() => {
      location.reload();
    }, 3000);
  }
});

setInterval(function () {
  doll = document.getElementById("doll");
  doll.classList.toggle("show");
  stop = !stop;
}, 4000);
