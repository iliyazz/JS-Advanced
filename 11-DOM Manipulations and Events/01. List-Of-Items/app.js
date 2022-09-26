function addItem() {
    let inputBox = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let input = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');
    newLi.textContent = input;
    list.appendChild(newLi);
    inputBox.value = '';
}