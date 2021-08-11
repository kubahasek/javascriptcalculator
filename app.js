var gridItems = document.querySelectorAll(".grid-item");

var resultField = document.querySelector("#result-field");

var arr = [];

let arrStr = arr.join("");

gridItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.innerText == "AC") {
      resultField.value = "";
      arr = [];
    } else if (item.innerText == "=") {
      arr.push(resultField.value);
      let arrStr = arr.join("");
      let result = eval(arrStr);
      resultField.value = result;
    } else if (
      item.innerText == "+" ||
      item.innerText == "-" ||
      item.innerText == "*" ||
      item.innerText == "/"
    ) {
      arr.push(resultField.value);
      arr.push(item.innerText);
      resultField.value = "";
    } else if (item.innerText == "C") {
      let currentValue = resultField.value;
      resultField.value = currentValue.substring(0, currentValue.length - 1);
    } else {
      resultField.value += item.innerText;
    }
  });
});

window.addEventListener("load", () => {
  resultField.value = "";
});
