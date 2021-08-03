function getGuesses() {
  return localStorage.getItem("numberOfGuesses");
}
let newNumberOfGuesses = getGuesses();
const resultElem = document.getElementById("result");
resultElem.innerHTML = `It took ${newNumberOfGuesses} times!`;
// resultElem.innerHTML = 'Wow you guessed ' + newNumberOfGuesses + 'times!';
