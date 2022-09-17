function pieceOfPie(inputArr, target1, target2){
    let indexOfTarget1 = inputArr.indexOf(target1);
    let indexOfTarget2 = inputArr.indexOf(target2);
    let result = inputArr.slice(indexOfTarget1, indexOfTarget2 + 1);
    return result;
}
pieceOfPie(
    ['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
console.log('--------------');
pieceOfPie(
    ['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);