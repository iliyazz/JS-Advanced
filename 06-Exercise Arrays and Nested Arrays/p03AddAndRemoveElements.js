function addAndRemoveElements(arr){
    let currentValue = 0;
    let result = [];
    arr.forEach(element => {
        switch (element){
            case 'add':
                currentValue++;
                result.push(currentValue);
                break;
            case 'remove':
                currentValue++;
                result.pop();
                break;
        }
    });
    console.log(result.length === 0 ? 'Empty' : result.join('\n'));
}

addAndRemoveElements(
    ['add', 
    'add', 
    'add', 
    'add']);
console.log('-------------------');
addAndRemoveElements(
    ['add', 
    'add', 
    'remove', 
    'add', 
    'add']);
console.log('-------------------');
addAndRemoveElements(
    ['remove', 
    'remove', 
    'remove']);
