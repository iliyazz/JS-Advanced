function solution() {
    let sections = document.getElementsByTagName('section');
    let sectionAddGift = sections[0];
    let sectionListOfGift = sections[1];
    let sectionSendGift = sections[2];
    let sectionDiscardedGift = sections[3];
    let inputValue = sectionAddGift.querySelector('input');
    let btnAddGift = sectionAddGift.querySelector('button');

    btnAddGift.addEventListener('click', addGift);

    function addGift(e) {
        let ul = sectionListOfGift.querySelector('ul');
        let sortedLi = [];
        (Array.from(ul.querySelectorAll('li'))).forEach(el => {
            sortedLi.push(el.childNodes[0].nodeValue);
        })
        sortedLi.push(inputValue.value);
        inputValue.value = null;
        if (sortedLi.length >= 2) { sortedLi = sortedLi.sort((a, b) => a.localeCompare(b)); }
        Array.from(ul.children).forEach(element => {
            element.remove();
        });
        sortedLi.forEach(element => {
            let li = document.createElement('li');
            li.classList.add('gift');
            li.innerText = element;

            let btnSend = document.createElement('button');
            btnSend.setAttribute('id', 'sendButton');
            btnSend.innerText = 'Send';
            btnSend.addEventListener('click', send);
            li.appendChild(btnSend);

            let btnDiscard = document.createElement('button');
            btnDiscard.setAttribute('id', 'discardButton');
            btnDiscard.innerText = 'Discard';
            btnDiscard.addEventListener('click', discard);
            li.appendChild(btnDiscard);

            ul.appendChild(li);

            function send(e) {
                let ul = sectionSendGift.querySelector('ul');
                let li = document.createElement('li');
                li.classList.add('gift');
                li.innerText = e.target.parentElement.childNodes[0].nodeValue;
                e.target.parentElement.remove()
                ul.appendChild(li)
            }
            function discard(e) {
                let ul = sectionDiscardedGift.querySelector('ul');
                let li = document.createElement('li');
                li.classList.add('gift');
                li.innerText = e.target.parentElement.childNodes[0].nodeValue;
                e.target.parentElement.remove()
                ul.appendChild(li)
            }
        });
    }
}