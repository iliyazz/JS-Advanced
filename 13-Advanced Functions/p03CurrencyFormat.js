function createFormatter(separator, symbol, symbolFirst, formatter){
    debugger
    //return (value) => formatter(separator,symbol,symbolFirst,value);
    function partial(value){
        debugger
        return formatter(separator, symbol, symbolFirst, value)
    }
    debugger
    return partial;
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
debugger
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71