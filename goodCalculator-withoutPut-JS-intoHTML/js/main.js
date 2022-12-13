(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");
  let del = document.querySelector(".back");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      console.log(value);
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      console.log(screen.value);
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function () {
    screen.value = "";
  });

  del.addEventListener("click", function () {
    let exp = document.getElementById("screen").value;

      document.getElementById("screen").value = exp.substring(0, exp.length - 1);
  });
})();
