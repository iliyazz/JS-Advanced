function focused() {
    
    let inputElements = document.querySelectorAll('input');
    for (let el of inputElements) {
        
        el.addEventListener('focus', focusEl);
        el.addEventListener('blur', unFocusEl);
    }
    function focusEl(e) {
        e.target.parentElement.classList.add('focused');
        
    }

    function unFocusEl(e) {
        e.target.parentElement.classList.remove('focused');
    };
}