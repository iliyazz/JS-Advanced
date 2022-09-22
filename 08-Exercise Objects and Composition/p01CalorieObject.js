function calorieObject(inputArr){
    currentObj = {};
    for(let i = 0; i < inputArr.length; i += 2){
        currentObj[inputArr[i]] = Number(inputArr[i + 1]);
    }
    console.log(currentObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log('------------------');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);