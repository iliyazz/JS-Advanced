function sumTable() {
    let rowsList = document.querySelectorAll("table tr");
    sum = 0;
    for(let i = 1; i < rowsList.length - 1; i++){
        let price = rowsList[i].children[1].textContent;
        sum += Number(price);
    }
    document.getElementById("sum").textContent = sum;
}