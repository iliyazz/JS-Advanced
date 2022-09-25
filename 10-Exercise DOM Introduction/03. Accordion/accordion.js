function toggle() {
    let buttonText = document.getElementsByClassName('button')[0].textContent;
    let toggleText = document.getElementById('extra');
    if(buttonText === 'More'){
        toggleText.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    }
    else{
        toggleText.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }
}