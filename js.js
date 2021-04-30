const increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let number = document.getElementById("number");
x = 0;
increase.addEventListener("click", function () {
  x += 1;
  number.innerHTML = x;
});
decrease.addEventListener("click", function () {
  x -= 1;
  number.innerHTML = x;
});
reset.addEventListener("click", function () {
  x = 0;
  number.innerHTML = x;
});
