function colorize() {
    let rowsList = document.querySelectorAll("table tr");
    for(let i = 1; i < rowsList.length; i +=2){
        rowsList[i].style.background = "teal";
    }
}