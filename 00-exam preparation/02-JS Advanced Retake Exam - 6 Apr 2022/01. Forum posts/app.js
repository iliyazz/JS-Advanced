window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');
  let btnPublish = document.getElementById('publish-btn');
  let ulReviewList = document.getElementById('review-list');
  btnPublish.addEventListener('click', publish);
  let ulPublishedList = document.getElementById('published-list');
  let btnClear = document.getElementById('clear-btn');
  btnClear.addEventListener('click', clear);


  function publish(e) {
    e.preventDefault();
    if (!title.value || !category.value || !content.value) {
      return;
    }
    createLi();


  }

  function createLi() {
    let li = document.createElement('li');
    li.setAttribute('class', 'rpost');

    let article = document.createElement('article');
    li.appendChild(article);

    h4El = document.createElement('h4');
    article.appendChild(h4El);
    h4El.innerText = title.value;

    let pCategory = document.createElement('p');
    article.appendChild(pCategory);
    pCategory.innerText = `Category: ${category.value}`;

    let pContent = document.createElement('p');
    article.appendChild(pContent);
    pContent.innerText = `Content: ${content.value}`;

    let btnApprove = document.createElement('button');
    btnApprove.classList.add('action-btn', 'approve');
    btnApprove.innerText = 'Approve';
    li.appendChild(btnApprove);
    btnApprove.addEventListener('click', (e) => approve(e, li));

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('action-btn', 'edit');
    btnEdit.innerText = 'Edit';
    li.appendChild(btnEdit);
    btnEdit.addEventListener('click', edit)
    
    ulReviewList.appendChild(li);
    
    title.value = '';
    category.value = '';
    content.value = '';
  }

  function edit(e) {
    let currentContent = e.target.parentElement.children[0].children;
    title.value = currentContent[0].textContent;
    category.value = currentContent[1].textContent.split(': ')[1];
    content.value = currentContent[2].textContent.split(': ')[1];
    e.target.parentElement.remove();
  }
  
  function approve(e, li) {
    li.children[2].remove();
    li.children[1].remove();
    ulPublishedList.appendChild(li);
  }
  function clear(e){
    let arr = Array.from(ulPublishedList.children);
    arr.forEach(x => x.remove());
  }
}
