const rollBtn = document.getElementById("rollBtn");
const heading = document.querySelector("h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const diceSound = document.getElementById("diceSound");

rollBtn.addEventListener("click", function () {
  // Play dice shuffle sound
  diceSound.currentTime = 0;
  diceSound.play();

  // Shake animation
  img1.classList.add("shake");
  img2.classList.add("shake");

  setTimeout(() => {
    // Generate random dice values
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;

    // Update dice images
    img1.src = "./images/dice" + random1 + ".png";
    img2.src = "./images/dice" + random2 + ".png";

    // Remove shake animation
    img1.classList.remove("shake");
    img2.classList.remove("shake");

    // Display winner
    if (random1 > random2) {
      heading.innerHTML = "🚩 Player 1 Wins!";
    } else if (random2 > random1) {
      heading.innerHTML = "Player 2 Wins! 🚩";
    } else {
      heading.innerHTML = "🤝 Draw!";
    }
  }, 500);
});
