document.getElementById("spinButton").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();

  if (name === "") {
    alert("Please enter your name to play.");
    return;
  }

  // Generate a random amount between 190 and 280
  const randomAmount = Math.floor(Math.random() * (250 - 190 + 1)) + 190;
  
  // Randomly select an emoji
  const emojis = ["💸", "🎉", "🌟", "🏆"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  const resultMessage = `${name}, you have won £${randomAmount} ${randomEmoji}! Enjoy your photography session! 📸`;

  document.getElementById("result").textContent = resultMessage;
});

// Trigger the Play button with the Enter key
document
  .getElementById("nameInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("spinButton").click();
    }
  });
