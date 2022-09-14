function aggregate(params){
    let sum = 0;
    let sumInvesred = 0;
    let concatenate = '';
    params.forEach(element => {
        sum += element;
        sumInvesred += 1 / element;
        concatenate += element;
    });
    console.log(sum)
    console.log(sumInvesred)
    console.log(concatenate)
}
aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);