function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', mailValidate);
    function mailValidate(e) {
        const pattern = /[a-z]+@[a-z]+.[a-z]+/g; ///^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}/gm;
        let found = input.value.match(pattern);
        if(found === null){
            e.target.classList.add('error');
        }
        else{
            e.target.removeAttribute('class');
        }
    }
}