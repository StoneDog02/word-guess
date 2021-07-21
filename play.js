const word = "presumptuous";
const guesses = [];

function guess() {
  /**
   * We need a word...
   *       Random words...
   * What happens when this button gets clicked
   *     press enter same thing as click?
   * get the guess
   * check to see if they guess this before
   * Check if the letter is correct or not
   * Correct letter populates in correct spot in the word above
   * Tell them its an incorrect letter (feedback)
   * clear the input after the click guess focus it
   * auto submit once word is solved
   */
  // get the guess
  const userGuess = document.getElementById("guessEl").value;
  if (guesses.includes(userGuess)) {
    return alert("you guessed that :P " + guesses);
  }
  guesses.push(userGuess);
}
