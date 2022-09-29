function addItem() {
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;
    let element = document.createElement('option');
    element.textContent = newItemText;
    element.value = newItemValue;
    let menu = document.getElementById('menu');
    menu.appendChild(element)
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}