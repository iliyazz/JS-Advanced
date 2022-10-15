function solve() {
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    document.getElementById('add').addEventListener('click', add);
    document.getElementById('reset').addEventListener('click', reset);

    function add(e) {
        e.preventDefault();
        if (!recipientName.value || !title.value || !message.value) {
            return;
        }
        let ul = document.getElementById('list');
        let li = document.createElement('li');

        let h4Title = document.createElement('h4');
        let currentTitle = title.value
        h4Title.innerText = `Title: ${currentTitle}`;
        li.appendChild(h4Title);

        let h4RecipientName = document.createElement('h4');
        let currentRecipientName = recipientName.value
        h4RecipientName.innerText = `Recipient Name: ${currentRecipientName}`;
        li.appendChild(h4RecipientName);

        let spanMessage = document.createElement('span');
        spanMessage.innerText = message.value;
        li.appendChild(spanMessage);

        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        let btnSend = document.createElement('button');
        btnSend.setAttribute('type', 'submit');
        btnSend.setAttribute('id', 'send');
        btnSend.innerText = 'Send';
        btnSend.addEventListener('click', (ev) => sendMsg(ev,currentRecipientName, currentTitle));
        div.appendChild(btnSend);

        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type', 'submit');
        btnDelete.setAttribute('id', 'delete');
        btnDelete.innerText = 'Delete';
        btnDelete.addEventListener('click',(ev) => deleteMsg(ev, currentRecipientName, currentTitle));
        div.appendChild(btnDelete);

        li.appendChild(div);
        ul.appendChild(li);

        recipientName.value = null;
        title.value = null;
        message.value = null;
    }

    function reset(e) {
        e.preventDefault();
        recipientName.value = null;
        title.value = null;
        message.value = null;
    }

    function sendMsg(ev, currentRecipientName, currentTitle) {
        ev.target.parentElement.parentElement.remove();
        let ul = document.getElementsByClassName('sent-mails')[0].querySelector('ul');
        let li = document.createElement('li');

        let spanRecipientName = document.createElement('span');
        spanRecipientName.innerText = `To: ${currentRecipientName}`;
        li.appendChild(spanRecipientName);

        let spanTitle = document.createElement('span');
        spanTitle.innerText = `Title: ${currentTitle}`;
        li.appendChild(spanTitle);

        let div = document.createElement('div');
        div.classList.add('btn');

        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type', 'submit');
        btnDelete.classList.add('delete');
        btnDelete.innerText = 'Delete';
        btnDelete.addEventListener('click', (event) => deleteMsg(event, currentRecipientName, currentTitle))
        div.appendChild(btnDelete);

        li.appendChild(div);
        ul.appendChild(li);
    }

    function deleteMsg(ev, currentRecipientName, currentTitle) {
        ev.target.parentElement.parentElement.remove();
        let ul = document.getElementsByClassName('trash')[0].querySelector('ul');
        let li = document.createElement('li');

        let spanRecipientName = document.createElement('span');
        spanRecipientName.innerText = `To: ${currentRecipientName}`;
        li.appendChild(spanRecipientName);

        let spanTitle = document.createElement('span');
        spanTitle.innerText = `Title: ${currentTitle}`;
        li.appendChild(spanTitle);
        ul.appendChild(li);
    }
}
solve()