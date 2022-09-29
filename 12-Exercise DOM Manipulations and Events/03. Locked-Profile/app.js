function lockedProfile() {
    let buttons = document.querySelectorAll('button')
    for (let button of buttons) {
        button.addEventListener('click', showMoreInfo);

    }
    function showMoreInfo(e) {
        let lockLable = e.target.parentElement.querySelectorAll('input[type=radio]');
        if (lockLable[0].checked === true) {
            return
        }
        else {
            let showAll = e.target.parentElement.querySelectorAll('input[type=email]');
            for(let show of showAll){
                show.parentElement.style.display = "block"
            }
            lockLable[0].checked = true;
            lockLable[0].parentElement.getElementsByTagName('button')[0].textContent = 'Hide it';
            lockLable[0].parentElement.getElementsByTagName('button')[0].removeEventListener('click', showMoreInfo)
            lockLable[0].parentElement.getElementsByTagName('button')[0].addEventListener('click', hideInfo)
        }
    }
    function hideInfo(e) {
        let lockLable = e.target.parentElement.querySelectorAll('input[type=radio]');
        if (lockLable[0].checked === true) {
            return
        }
        else {
            let showAll = e.target.parentElement.querySelectorAll('input[type=email]');
            for(let show of showAll){
                show.parentElement.style.display = 'none';
            }
            lockLable[0].checked = true;
            lockLable[0].parentElement.getElementsByTagName('button')[0].textContent = 'Show more';
            lockLable[0].parentElement.getElementsByTagName('button')[0].removeEventListener('click', hideInfo)
            lockLable[0].parentElement.getElementsByTagName('button')[0].addEventListener('click', showMoreInfo)
        }
    }
}