function solve() {

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let sections = document.querySelectorAll('section');
    let buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        if (task.value === '' || description.value === '' || date.value === '') { return; }

        let article = document.createElement('article');
        let divEl = document.createElement('div');
        divEl.className = 'flex';

        let buttonStart = document.createElement('button');
        buttonStart.className = 'green';
        buttonStart.textContent = 'Start';
        buttonStart.addEventListener('click', clickButtonOne);
        divEl.appendChild(buttonStart);
        
        let buttonDelete = document.createElement('button');
        buttonDelete.className = 'red';
        buttonDelete.textContent = 'Delete'
        buttonDelete.addEventListener('click', clickButtonTwo);
        divEl.appendChild(buttonDelete);

        article.innerHTML = `<h3>${task.value}</h3> 
                            <p>Description: ${description.value}</p>
                            <p>Due Date: ${date.value}</p>`;

        article.appendChild(divEl);
        sections[1].children[1].appendChild(article);
    }

    function clickButtonOne(event) {
        let article = event.target.parentElement.parentElement;
        if (event.target.className === 'green') {
            let buttonFinish = document.createElement('button');
            buttonFinish.className = 'orange';
            buttonFinish.textContent = 'Finish';
            event.target.remove();
            let clonedArticle = article.cloneNode(true);

            buttonFinish.addEventListener('click', clickButtonOne);
            clonedArticle.children[3].appendChild(buttonFinish);
            clonedArticle.children[3].children[0].addEventListener('click', clickButtonTwo);
            article.remove();
            sections[2].children[1].appendChild(clonedArticle);
        }
        else if (event.target.className === 'orange') {
            article.children[3].remove();
            let clonedArticle = article.cloneNode(true);
            article.remove();
            sections[3].children[1].appendChild(clonedArticle)
        }
    }

    function clickButtonTwo(event) {
        let article = event.target.parentElement.parentElement;
        article.remove();
    }
}