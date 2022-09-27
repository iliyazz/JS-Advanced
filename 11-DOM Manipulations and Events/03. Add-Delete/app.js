function addItem() {
    let ulList = document.getElementById('items');
    let inputBox = document.getElementById('newItemText');
    let valueText = inputBox.value;

    if (valueText.length === 0) {
        return;
    }

    let newLi = document.createElement('li');
    newLi.textContent = valueText;

    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    // let deleteBtn = document.createElement('button');
    deleteLink.textContent = '[Delete]';
    // deleteBtn.textContent = '[Delete]';


    // deleteBtn.addEventListener('click', delBtn)
    // function delBtn(e) {
    //     e.target.parentElement.remove();
    // }


    deleteLink.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    })

    newLi.appendChild(deleteLink);
    // newLi.appendChild(deleteBtn);

    ulList.appendChild(newLi);
    inputBox.value = '';
}