function validate() {
    let formElement = document.getElementById('registerForm');
    let company = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let validMsg = document.getElementById('valid')

    company.addEventListener("change", () => {
        if (company.checked) {
            companyInfo.style.display = "block";
        } else {
            companyInfo.style.display = "none";
        }
    });

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let passwordPattern = /^[\w]{5,15}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

        let [username, email, password, confirmPassword] = Array.from(formElement.elements).slice(1);

        if (usernamePattern.test(username.value)) {
            username.style.borderColor = 'none';
        } else {
            username.style.borderColor = 'red';
        }

        if (emailPattern.test(email.value)) {
            email.style.borderColor = 'none'
        } else {
            email.style.borderColor = 'red';
        }

        if (passwordPattern.test(password.value)
            && passwordPattern.test(confirmPassword.value)
            && password.value == confirmPassword.value) {
            password.style.borderColor = 'none';
            confirmPassword.style.borderColor = 'none';

        } else {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }

        if (company.checked) {
            let companyField = document.getElementById('companyNumber');
            if (companyField.value < 1000 || companyField.value > 9999) {
                companyField.style.borderColor = "red";
            } else {
                companyField.style.borderColor = "";
            }
        }
        let finalForm = Array.from(formElement.elements).slice(1).map(x => x.style.borderColor);

        if (!finalForm.some(x => x == 'red')) {
            validMsg.style.display = 'block';
        } else {
            validMsg.style.display = 'none';
        }
    });
}
