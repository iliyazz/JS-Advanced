window.addEventListener('load', solve);

function solve() {
    let type = document.getElementById('type-product');
    let description = document.getElementById('description');
    let name = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');
    let sectionReceived = document.getElementById('received-orders');
    document.querySelector('button[type="submit"]').addEventListener('click', send);
    let sectionCompletedOrders = document.getElementById('completed-orders');
    let btnClear = sectionCompletedOrders.children[2];
    btnClear.addEventListener('click', clear);

    function send(e) {
        if(!description.value || !name.value || !phone.value){
            return;
        }

        let div = document.createElement('div');
        div.classList.add('container');

        let h2 = document.createElement('h2');
        let typeValue = type.value;
        h2.innerText = `Product type for repair: ${typeValue}`;
        div.appendChild(h2);

        let h3 = document.createElement('h3');
        let nameValue = name.value;
        let phoneValue = phone.value;
        h3.innerText = `Client information: ${nameValue}, ${phoneValue}`;
        div.appendChild(h3);

        let h4 = document.createElement('h4');
        let descriptionValue = description.value;
        h4.innerText = `Description of the problem: ${descriptionValue}`;
        div.appendChild(h4);

        let btnStartRepair = document.createElement('button');
        btnStartRepair.classList.add('start-btn');
        btnStartRepair.innerText = 'Start repair';
        btnStartRepair.addEventListener('click', startRepair);
        div.appendChild(btnStartRepair);

        let btnFinishRepair = document.createElement('button');
        btnFinishRepair.classList.add('finish-btn');
        btnFinishRepair.innerText = 'Finish repair';
        btnFinishRepair.setAttribute('disabled', true);
        btnFinishRepair.addEventListener('click', finishRepair);
        div.appendChild(btnFinishRepair);

        sectionReceived.appendChild(div);

        type.value = null;
        description.value = null;
        name.value = null;
        phone.value = null;
    }

    function startRepair(e) {
        e.target.setAttribute('disabled', true);
        e.target.parentElement.children[4].disabled = false;
    }

    function finishRepair(e) {
        sectionCompletedOrders.appendChild(e.target.parentElement);
        Array.from(e.target.parentElement.querySelectorAll('button')).forEach(element => {
            element.remove();
        });
    }

    function clear(e){
        Array.from(e.target.parentElement.querySelectorAll('div')).forEach(element => element.remove());
    }
}