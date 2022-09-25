function generateReport() {
    let checkBoxesArr =Array.from(document.querySelectorAll('input'));
    let checkedColumnNumbers = [];
    checkBoxesArr.forEach((element, index) => {
        if(element.checked){
            checkedColumnNumbers.push(index);
        }
    });
    let dataFromTable = Array.from(document.querySelectorAll('tbody tr'));
    let result = [];
    for(let row of dataFromTable){
        let obj = {};
        for(let index of checkedColumnNumbers){
            let name = checkBoxesArr[index].name;
            let data = row.children[index].textContent;
            obj[name] = data;
        }
        result.push(obj);
    }
    let output = JSON.stringify(result);
    document.getElementById('output').textContent = output;
}