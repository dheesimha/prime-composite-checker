let input = document.getElementById("text-field");

document.querySelector("button").addEventListener("click", () => {
  let inputValue = input.value;
  let key = 1;
  //console.log(inputValue);
  inputValue = parseInt(inputValue);

  for (i = 2; i <= inputValue - 1; i++) {
    if (inputValue % i === 0) {
      key = 0;
      break;
    }
  }

  if (!key) {
    document.getElementById("num-para").innerHTML =
      inputValue + " is a composite number";
  } else {
    document.getElementById("num-para").innerHTML =
      inputValue + " is a prime number";
  }
});
