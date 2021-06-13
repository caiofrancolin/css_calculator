document.getElementById('calculation').addEventListener('keydown', e => {
  console.log(e.key)

  if (!Number(e.key) && e.key != '/' && e.key != '*' && e.key != '+' && e.key != '-' 
      && e.key != ',' && e.key != '%' && e.key != '.' && e.key != '(' && e.key != ')'
      && e.key != 'ArrowLeft' && e.key != 'ArrowRight' && e.key != 'Backspace'
      && e.key != 'Home' && e.key != 'End' && e.key != 'Delete') {
    e.preventDefault()
  }
  if (e.key == 'Enter') {
    document.getElementById('result').value = eval(document.getElementById('calculation').value)
  }
});

document.getElementById('result').addEventListener('keydown', e => {
  e.preventDefault()
});

document.getElementById('pag').addEventListener('keydown', e => {
  if (e.key == 'Escape') {
    document.getElementById('calculation').value = ''
    document.getElementById('result').value = ''
  }
});

function writeNum(value) {
  var calc = document.getElementById('calculation')
  var result = document.getElementById('result')

  if (value === "CE") {
    calc.value = ''
    result.value = ''
  } else {
    if (typeof(value) == 'number') {
      calc.value += value
      result.value = eval(calc.value)
    } else {
      if (value == '=') {
        result.value = Number(eval(calc.value))?eval(calc.value):''
      } else {
        calc.value += value
      }
    }
  }
}
