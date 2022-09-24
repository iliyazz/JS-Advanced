function calc() {
    // TODO: sum = num1 + num2
    let firstNumber = document.getElementById("num1").value;
    let secondNumber = document.getElementById("num2").value;
    let result = Number(firstNumber) + Number(secondNumber);
    document.getElementById('sum').value = result;
}
