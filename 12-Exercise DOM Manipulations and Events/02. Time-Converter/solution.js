function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type=button]');
    for (let button of buttons) {
        button.addEventListener('click', convert);
    }
    function convert(e) {
        let currentBtn = e.target.parentElement.querySelector('input[type=text]').id;
        let timeInSeconds = 0;
        let inputEl = e.target.parentElement.querySelector('input[type=text]').value;
        switch (currentBtn) {
            case 'days':
                timeInSeconds = Number(inputEl) * 24 * 3600;
                break;
            case 'hours':
                timeInSeconds = Number(inputEl) * 3600;
                break;
            case 'minutes':
                timeInSeconds = Number(inputEl) * 60;
                break;
            case 'seconds':
                timeInSeconds = Number(inputEl);
                break;
        }
        let textAreas = e.target.parentElement.parentElement.querySelectorAll('input[type=text]');
        console.log(timeInSeconds / (24 * 3600));
        textAreas[0].value = timeInSeconds / (24 * 3600);
        textAreas[1].value = timeInSeconds / 3600;
        textAreas[2].value = timeInSeconds / 60;
        textAreas[3].value = timeInSeconds;
    }
}