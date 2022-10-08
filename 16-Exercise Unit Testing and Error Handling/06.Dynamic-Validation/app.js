function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', focus);
    let pattern = /^[a-z]+\@[a-z]+\.[a-z]+$/gm;
    function focus(e) {
        e.currentTarget.classList.remove('error');
        //debugger
        if (!pattern.test(e.target.value)) {
            e.currentTarget.classList.add('error');
        }
        else {
            e.currentTarget.removeAttribute('class');
        }
    }
}