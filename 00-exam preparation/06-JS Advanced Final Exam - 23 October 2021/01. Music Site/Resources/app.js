window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    document.getElementById('add-btn').addEventListener('click', addBtn);
    let divAllHitsContainer = document.querySelector('.all-hits-container');
    let divSavedContainer = document.querySelector('.saved-container');
    let totalLikes = document.getElementById('total-likes').querySelector('p').textContent.split('Total Likes: ')[1];


    function addBtn(e) {
        e.preventDefault();
        if (!genre.value || !name.value || !author.value || !date.value) {
            return;
        }
        genreValue = genre.value;
        nameValue = name.value;
        authorValue = author.value;
        dateValue = date.value;

        genre.value = null;
        name.value = null;
        author.value = null;
        date.value = null;

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', './static/img/img.png');
        div.appendChild(imgEl);

        let h2Genre = document.createElement('h2');
        h2Genre.innerText = `Genre: ${genreValue}`;
        div.appendChild(h2Genre);


        let h2Name = document.createElement('h2');
        h2Name.innerText = `Name: ${nameValue}`;
        div.appendChild(h2Name);

        let h2Author = document.createElement('h2');
        h2Author.innerText = `Author: ${authorValue}`;
        div.appendChild(h2Author);

        let h3Date = document.createElement('h3');
        h3Date.innerText = `Date: ${dateValue}`;
        div.appendChild(h3Date);

        let btnSaveSong = document.createElement('button');
        btnSaveSong.innerText = 'Save song';
        btnSaveSong.classList.add('save-btn');
        btnSaveSong.addEventListener('click', saveSong);
        div.appendChild(btnSaveSong);

        let btnLikeSong = document.createElement('button');
        btnLikeSong.innerText = 'Like song';
        btnLikeSong.classList.add('like-btn');
        btnLikeSong.addEventListener('click', likeSong);
        div.appendChild(btnLikeSong);

        let btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.classList.add('delete-btn');
        btnDelete.addEventListener('click', deleteSong);
        div.appendChild(btnDelete);
        divAllHitsContainer.appendChild(div);

        function saveSong(e) {
            divSavedContainer.appendChild(e.target.parentElement);
            let buttons = e.target.parentElement.querySelectorAll('button');
            buttons[0].remove();
            buttons[1].remove();

        }
        function likeSong(e) {
            totalLikes = Number(totalLikes) + 1;
            document.getElementById('total-likes').querySelector('p').innerText = `Total Likes: ${totalLikes}`;
            e.target.setAttribute('disabled', true);
        }
        function deleteSong(e) {
            e.target.parentElement.remove();
        }
    }
}