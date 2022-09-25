function solve() {

    let selectToDropDown = document.getElementById('selectMenuTo');
    
    let hexadecimalOption = document.createElement('option')
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal'
    selectToDropDown.appendChild(hexadecimalOption);
    
    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectToDropDown.appendChild(binaryOption);

    let button = document.getElementsByTagName('button')[0];
    
    button.addEventListener('click', () =>  {
        let result = document.getElementById('result');
        let inputData = document.getElementById('input');
        let inputNumber = Number(inputData.value);

        if(selectToDropDown.value === 'hexadecimal'){
            result.value = inputNumber.toString(16).toUpperCase();
        }
        else if(selectToDropDown.value === 'binary'){
            result.value = inputNumber.toString(2);
        }
    })
}
