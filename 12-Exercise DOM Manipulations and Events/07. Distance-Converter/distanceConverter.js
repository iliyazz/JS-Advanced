function attachEventsListeners() {
    let [inputElement, outputValue] = document.querySelectorAll('input[type="text"]');
    let button = document.getElementById('convert');

    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');

    let ratios = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    let convert = function (){
        let value = Number(inputElement.value);
        let selectedInputUnit = inputUnits.value;
        let selectedOutputUnits = outputUnits.value;
        let valueToMeters = value * ratios[selectedInputUnit];
        let result = valueToMeters / ratios[selectedOutputUnits];
        outputValue.value = result;
    }
    button.addEventListener('click', convert);

}