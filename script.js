let campoA = document.getElementById("a");
let campoB = document.getElementById("b");
let textResult = document.getElementById("text-result");
let buttonResult = document.getElementById("btn-result");
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let valueA = parseFloat(campoA.value);
  let valueB = parseFloat(campoB.value);
  if (valueA > valueB) {
    textResult.innerHTML = `O valor A (${valueA}) é maior que o valor B (${valueB})`;
    textResult.style.color = "red";
    valueA = "";
    valueB = "";
  } else if (valueB > valueA) {
    textResult.innerHTML = `O valor B (${valueB}) é maior que o valor A (${valueA})`;
    textResult.style.color = "green";
    valueA = "";
    valueB = "";
  } else {
    textResult.innerHTML = `O valor B (${valueB}) é igual que o valor A (${valueA})`;
    textResult.style.color = "red";
    valueA = "";
    valueB = "";
  }
});
