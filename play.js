const word = "12-06-36";
const wordArr = word.split("");
// const wordArr = ["p",""r,"e","s","u","m","p","t","u","o","u","s"];
//                   0   1   2   3   4   5   6   7   8   9   10  11
const guessedWord = "____________"; // TODO: programatically do thid
const guesses = [];
const wordElem = document.getElementById("wordElem");

wordElem.innerHTML = guessedWord;

function clearAndFocus(elem) {
  elem.value = "";
  elem.focus();
}

function updateGuessedWord(guesses) {
  let newGuessedWordArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    const letter = wordArr[i];
    if (guesses.includes(letter)) {
      newGuessedWordArr.push(letter);
    } else {
      newGuessedWordArr.push("_");
    }
  }
  // wordElem.innerHTML = guessedWord;
  return newGuessedWordArr.join("");
}

function guess() {
  /**
   * We need a word...
   *       Random words...
   * What happens when this button gets clicked
   *     press enter same thing as click?
   * get the guess
   * check to see if they guess this before ✅
   * Check if the letter is correct or not ✅
   * Correct letter populates in correct spot in the word above ✅
   * Tell them its an incorrect letter (feedback) ✅
   * clear the input after the click guess and focus it ✅
   * auto submit once word is solved
   */
  // get the guess
  const guessElem = document.getElementById("guessElem");
  const userGuess = guessElem.value.toLowerCase();
  if (guesses.includes(userGuess)) {
    clearAndFocus(guessElem);
    return giveFeedback("You guessed that :P " + guesses, "normal");
  }
  guesses.push(userGuess);
  // is it right or wrong?
  if (!word.includes(userGuess)) {
    // guessed wrong
    return giveFeedback("You guessed wrong", "fail");
  }
  // guess right
  giveFeedback("You guessed right", "success");

  const updatedWord = updateGuessedWord(guesses);
  wordElem.innerHTML = updatedWord;

  clearAndFocus(guessElem);

  // are there any letters left to guess?
  if (word === updatedWord) {
    // if (true) {
    // guessed wrong
    const numberOfGuesses = guesses.length;
    return goToFinishPage(`Wow you guessed ${numberOfGuesses} times!`);
  }
  moreGuesses(guesses.length);
}

function setMessage(msg) {
  localStorage.setItem("msg", msg);
}
function moreGuesses(numberOfGuesses) {
  if (numberOfGuesses >= 15) {
    goToFinishPage("You lost, you took to many guesses");
  }
}

function goToFinishPage(msg) {
  setMessage(msg);
  window.location = "/finish.html";
}

function giveFeedback(feedback, type) {
  const feedbackElem = document.getElementById("feedback");
  feedbackElem.innerHTML = feedback;
  feedbackElem.className = type;
}
