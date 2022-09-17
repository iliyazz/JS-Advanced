function lastKNumbersSequence(n, k){
    let result = [1];
    for( let i = 1; i< n; i++){
        let acc = result.slice(i - k < 0 ? 0 : i-k, i).reduce((accumulator, current) => accumulator + current);
        result.push(acc);
    }
    return result;
}
lastKNumbersSequence(6,3);
lastKNumbersSequence(8,2);