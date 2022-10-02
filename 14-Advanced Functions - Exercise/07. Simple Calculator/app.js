function calculator() {
    let selector1;
    let selector2;
    let result;
    return {
        init: (select1, select2, res) => {
            selector1 = document.querySelector(select1);
            selector2 = document.querySelector(select2);
            result = document.querySelector(res);
        },
        add: () => {
            let num1 = Number(selector1.value);
            let num2 = Number(selector2.value);
            result.value = num1 + num2;
        },
        subtract: () => {
            let num1 = Number(selector1.value);
            let num2 = Number(selector2.value);
            result.value = num1 - num2;
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


