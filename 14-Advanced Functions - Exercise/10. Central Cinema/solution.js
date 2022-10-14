function solve() {
    let container = document.getElementById('container');
    let inputFields = container.getElementsByTagName('input');
    let inputName = inputFields[0];
    let hallName = inputFields[1];
    let inputTicketPrice = inputFields[2];
    let moviesOnScreenSection = document.getElementById('movies').getElementsByTagName('ul')[0];
    let li;
    let archiveSection = document.getElementById('archive');
    container.getElementsByTagName('button')[0].addEventListener('click', onScreen);

    function onScreen(e) {
        e.preventDefault();
        if (inputName.value && hallName.value && Number(inputTicketPrice.value) && inputTicketPrice.value !== '0') {
            
            li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = inputName.value;
            li.appendChild(span);
            let strongHallName = document.createElement('strong');
            strongHallName.textContent = `Hall: ${hallName.value}`;
            li.appendChild(strongHallName);
            let div = document.createElement('div');
            li.appendChild(div);
            let strongTicketPrice = document.createElement('strong');
            strongTicketPrice.textContent = Number(inputTicketPrice.value).toFixed(2);
            div.appendChild(strongTicketPrice);
            let inputEl = document.createElement('input');
            inputEl.placeholder = 'Tickets Sold';
            div.appendChild(inputEl);
            let buttonArchive = document.createElement('button');
            buttonArchive.textContent = 'Archive';
            buttonArchive.addEventListener('click', archive)
            div.appendChild(buttonArchive);
            moviesOnScreenSection.appendChild(li);
            inputName.value = null//'';
            hallName.value = null//'';
            inputTicketPrice.value = null//'';
        }
    }

    function archive(e) {
        let inputNumberOfTickets = e.target.parentElement.getElementsByTagName('input')[0];
        if (Number(inputNumberOfTickets.value) || inputNumberOfTickets.value === '0') {
            let totalProfit = Number(inputNumberOfTickets.value) * Number(e.target.parentElement.children[0].textContent);
            let currentLi = e.target.parentElement.parentElement;
            archiveSection.querySelector('ul').appendChild(currentLi);
            currentLi.children[1].textContent = `Total amount: ${totalProfit.toFixed(2)}`
            e.target.parentElement.remove();
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            currentLi.appendChild(buttonDelete);
            buttonDelete.addEventListener('click', del);
            archiveSection.children[2].addEventListener('click', clear);
        }
    }

    function del(e) {
        e.target.parentElement.remove()
    }

    function clear(e) {
        Array.from(e.target.parentElement.querySelector('ul').children).forEach(el => el.remove())
    }
}