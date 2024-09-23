'use strict'

const noppa = document.getElementById("dice");

noppa.addEventListener("click", function() {
  console.log("Noppaa painettu")

  const randomNumber = Math.floor(Math.random() * 6) + 1;

  const nopankuva = noppa.querySelector("img");

  nopankuva.src = `./img/${randomNumber}.png`;
})