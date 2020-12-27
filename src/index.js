import "./styles.css";

var input = document.querySelector("#input");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

button.addEventListener("click", function out() {
  var inputF = input.value;
  if ((inputF % 4 === 0 && 0 !== inputF % 100) || 0 === inputF % 400) {
    output.innerText = "leh leap year";
  } else {
    output.innerText = "tauba tauba not a leap year";
  }
});
