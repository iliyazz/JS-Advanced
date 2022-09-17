function listOfNames(arr){
    arr.sort((a, b) => a.localeCompare(b));
    //console.log(arr);
    arr.forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
listOfNames(["John", "Bob", "christina", "Ema"]);