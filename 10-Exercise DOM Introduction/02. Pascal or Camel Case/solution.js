function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  let convention = document.getElementById('naming-convention').value;
  let textAsArr = text.split(' ');
  let result = '';
  if (convention !== 'Camel Case' && convention !== 'Pascal Case') {
    result = 'Error!';
  }
  else {
    if (convention === 'Camel Case') {
      result += textAsArr[0];
    }
    else if (convention === 'Pascal Case') {
      result += textAsArr[0].substring(0, 1).toUpperCase() + textAsArr[0].substring(1);
    }
    textAsArr.shift();
    textAsArr.forEach(element => {
      result += element.substring(0, 1).toUpperCase() + element.substring(1);
    })

  }
  document.getElementById('result').textContent = result;
}

