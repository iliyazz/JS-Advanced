function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value.trim();
    let emailColumn2 = document.querySelectorAll("#customers td:nth-child(2)");
    let isDeleted = false;
    for (let cell of emailColumn2) {

        if (cell.textContent === email) {
            cell.parentElement.remove();
            isDeleted = true;
        }
    }
    let result = document.getElementById('result');
    result.textContent = isDeleted ? "Deleted." : result.textContent= "Not found.";
    document.getElementsByName('email')[0].value = '';
}