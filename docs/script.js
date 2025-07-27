const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const textInfoDisplay = document.getElementById("result");

checkButton.addEventListener("click", () => {
  
  const inputValue = inputText.value;
  const inputValueLower =inputValue.toLowerCase();
  let cleaned = inputValueLower.replace(/[^a-z0-9]/gi, "");
  const reversed = cleaned.split("").reverse().join("");

  if (cleaned === "") {
    alert("Invalid Input")
  } else if (cleaned === reversed) {
    textInfoDisplay.innerText = `${inputValue} is a palindrome`;
  } else {
    textInfoDisplay.innerText = `${inputValue} is not a palindrome`;
  };
});