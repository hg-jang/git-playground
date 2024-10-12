const $num1Input = document.querySelector("#num1") as HTMLInputElement;
const $num2Input = document.querySelector("#num2") as HTMLInputElement;
const $addButton = document.querySelector("#add") as HTMLButtonElement;
const $addResult = document.querySelector("#add-result") as HTMLSpanElement;

$addButton.addEventListener("click", () => {
  const num1 = +$num1Input.value;
  const num2 = +$num2Input.value;

  $addResult.innerText = (num1 + num2).toString();
});

console.log("ADD 001");
console.log("ADD 002");
console.log("ADD 003");
