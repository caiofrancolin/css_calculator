object.addEventListener("click", writeNum);

function writeNum(value) {
  var calc = document.getElementById('calculation')
  var result = document.getElementById('result')
 
  if (value === "CE") {
    calc.value = ''
    result.value = ''
  } else {
    if (value == '=') {
      result.value = eval(calc.value)
    } else {
      calc.value += value
      result.value = eval(calc.value)
    }
  }
}