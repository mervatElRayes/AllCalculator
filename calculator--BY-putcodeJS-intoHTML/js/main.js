function display(value) {
  document.getElementById("result").value += value;
}

//function for clear any charcher into screen
function clearScreen() {
  document.getElementById("result").value = "";
  // document.getElementById("result").value = "0";
}

// this function for evaluation the expression and return result
function calculate() {
  let num = document.getElementById("result").value;

  if (num != "") {
    document.getElementById("result").value = eval(num);
  } else {
    num = 0;
  }
  // let q = eval(p);
  // document.getElementById("result").value = q;
}

function back() {
  let exp = document.getElementById("result").value;
  document.getElementById("result").value = exp.substring(0, exp.length - 1);
  // document.getElementById("result").value = 0;

  if (exp == 0) {
    document.getElementById("result").value = "";
  }
}
