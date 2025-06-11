const targetWord = "perl";
const guessedLetters = new Set();
let display = ["p", "_", "_", "l"];

document.getElementById("wordDisplay").innerText = display.join(" "); //p _ _ l

document.getElementById("submitBtn").onclick = function () {
  const input = document.getElementById("letterInput");
  const guess = input.value;
  const statusMsg = document.getElementById("statusMsg");
  statusMsg.innerText = "";

  if (!/^[a-z]$/.test(guess)) {     // Check karta hain valid hain ki nahi!
    statusMsg.innerText = " Please enter a valid single letter.";
    input.value = "";
    return;
  }

  if (guessedLetters.has(guess)) {
    statusMsg.innerText = "You have already guessed that letter!";
    input.value = "";
    return;
  }

  guessedLetters.add(guess);

  let found = false;
  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i] === guess && display[i] === "_") {
      display[i] = guess;
      found = true;
    }
  }

  document.getElementById("wordDisplay").innerText = display.join(" "); //Three

  if (!found) {
    alert("Wrong guess!");
  }

  if (display.join("") === targetWord) {
   alert("Congratulations! You guessed the word.");
  }

  input.value = "";
};
