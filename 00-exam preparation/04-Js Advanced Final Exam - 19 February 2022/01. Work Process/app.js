function solve() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let dateOfBirth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    document.getElementById('add-worker').addEventListener('click', addWorker);
    let budgetPlace = document.getElementById('sum');
    let totalBudget = 0;

    function addWorker(e) {
        e.preventDefault(e);
        if (!firstName || !lastName || !email || !dateOfBirth || !position || !salary) {
            return;
        }
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let dateOfBirthValue = dateOfBirth.value
        let positionValue = position.value;
        let salaryValue = salary.value;



        let tbody = document.getElementById('tbody');
        let tr = document.createElement('tr');
        let tdFirstName = document.createElement('td');
        tdFirstName.innerText = firstName.value;
        tr.appendChild(tdFirstName);
        let tdLastName = document.createElement('td');
        tdLastName.innerText = lastName.value;
        tr.appendChild(tdLastName);
        let tdEmail = document.createElement('td');
        tdEmail.innerText = email.value;
        tr.appendChild(tdEmail);
        let tdDateOfBirth = document.createElement('td');
        tdDateOfBirth.innerText = dateOfBirth.value;
        tr.appendChild(tdDateOfBirth);
        let tdPosition = document.createElement('td');
        tdPosition.innerText = position.value;
        tr.appendChild(tdPosition);
        let tdSalary = document.createElement('td');
        tdSalary.innerText = salary.value;
        tr.appendChild(tdSalary);

        let tdButtons = document.createElement('td');

        let btnFired = document.createElement('button');
        btnFired.classList.add('fired');
        btnFired.innerText = 'Fired';
        btnFired.addEventListener('click', (ev) => fired(ev,  salaryValue))
        tdButtons.appendChild(btnFired);

        let btnEdit = document.createElement('button');
        btnEdit.classList.add('edit');
        btnEdit.innerText = 'Edit';
        btnEdit.addEventListener('click', (ev) => edit(ev, firstNameValue, lastNameValue, emailValue, dateOfBirthValue, positionValue, salaryValue))
        tdButtons.appendChild(btnEdit);

        tr.appendChild(tdButtons);
        tbody.appendChild(tr);

        totalBudget += Number(salary.value);
        budgetPlace.innerText = totalBudget.toFixed(2);

        firstName.value = null;
        lastName.value = null;
        email.value = null;
        dateOfBirth.value = null;
        position.value = null;
        salary.value = null;
    }

    function fired(ev,  salaryValue) {
        totalBudget -= Number(salaryValue);
        budgetPlace.innerText = totalBudget.toFixed(2);
        ev.currentTarget.parentElement.parentElement.remove();
    }
    function edit(ev, firstNameValue, lastNameValue, emailValue, dateOfBirthValue, positionValue, salaryValue) {
        firstName.value = firstNameValue;
        lastName.value = lastNameValue;
        email.value = emailValue;
        dateOfBirth.value = dateOfBirthValue;
        position.value = positionValue;
        salary.value = salaryValue;
        totalBudget -= Number(salaryValue);
        budgetPlace.innerText = totalBudget.toFixed(2);
        ev.currentTarget.parentElement.parentElement.remove();
    }
}
solve()