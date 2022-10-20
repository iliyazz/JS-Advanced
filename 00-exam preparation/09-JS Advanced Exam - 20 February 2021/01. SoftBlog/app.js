function solve() {
   let creator = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   document.getElementsByClassName('btn create')[0].addEventListener('click', create);
   let sectionSiteContent = document.getElementsByClassName('site-content')[0].querySelector('section');
   function create(e) {
      e.preventDefault();
      let article = document.createElement('article');
      sectionSiteContent.appendChild(article);

      let h1 = document.createElement('h1');
      h1.innerText = title.value;
      article.appendChild(h1);

      let p1 = document.createElement('p');
      p1.innerText = 'Category:';
      article.appendChild(p1);

      let strong1 = document.createElement('strong');
      strong1.innerText = category.value;
      p1.appendChild(strong1);

      let p2 = document.createElement('p');
      p2.innerText = 'Creator:';
      article.appendChild(p2);

      let strong2 = document.createElement('strong');
      strong2.innerText = creator.value;
      p2.appendChild(strong2);

      let p3 = document.createElement('p');
      p3.innerText = content.value;
      article.appendChild(p3);

      let div = document.createElement('div');
      div.classList.add('buttons');
      article.appendChild(div);

      let btnDelete = document.createElement('button');
      btnDelete.addEventListener('click', deleteFn);
      btnDelete.classList.add('btn');
      btnDelete.classList.add('delete');
      btnDelete.innerText = 'Delete';
      div.appendChild(btnDelete);

      let btnArchive = document.createElement('button');
      btnArchive.addEventListener('click', archiveFn);
      btnArchive.classList.add('btn');
      btnArchive.classList.add('archive');
      btnArchive.innerText = 'Archive';
      div.appendChild(btnArchive);

      creator.value = null;
      title.value = null;
      category.value = null;
      content.value = null;

      function deleteFn(e) {
         e.target.parentElement.parentElement.remove();
      }
      function archiveFn(e) {
         let ol = document.getElementsByTagName('ol')[0];
         ol.appendChild(h1);
         let sortedLi = Array.from(ol.children).sort((a, b) => a.innerText.localeCompare(b.innerText));
         Array.from(ol.children).forEach(element => {
            element.remove();
         });
         sortedLi.forEach(element => {
            let li = document.createElement('li');
            li.innerText = element.innerText;
            ol.appendChild(li);
         });
         article.remove();
      }
   }
}
