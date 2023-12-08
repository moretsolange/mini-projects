let output = document.querySelector(".kgs");
let convertBtn = document.querySelector(".btn");
let input = document.querySelector(".gramsInput");

convertBtn.addEventListener("click", function () {
  let inputValue = getInputValue();
  if (inputValue <= 0) {
    alert(`Adj meg egy valós számot!`);
  } else {
    let result = inputValue / 1000; //float
    //result = result.toFixed(2); //string
    //result = parseFloat(result); //float
    result = result.toLocaleString("hu-HU"); //string
    document.querySelector(".kgs").value = result;
  }
});

document.querySelector(".gramsInput").addEventListener("blur", () => {
  let inputValue = getInputValue();
  //inputValue.toLocaleString("en-US").replaceAll(",", " ");
  inputValue = inputValue.toLocaleString("hu-HU");
  input.value = inputValue;
});

function getInputValue() {
  return parseInt(input.value.replaceAll(" ", ""));
}
