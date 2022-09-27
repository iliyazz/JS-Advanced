function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradFunc);
    function gradFunc(e){
        let xCoord = e.offsetX;
        let dimenssoinX = e.target.clientWidth - 1;
        let result = document.getElementById('result');
        result.textContent = Math.trunc(xCoord * 100 /dimenssoinX) + '%';
    }
}