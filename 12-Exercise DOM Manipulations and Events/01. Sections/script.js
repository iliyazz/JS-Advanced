function create(words) {
   let content = document.getElementById('content');
   for (let word of words) {
      let newDiv = document.createElement('div');
      newDiv.addEventListener('click', unhide);
      content.appendChild(newDiv);
      let newP = document.createElement('p');
      newDiv.appendChild(newP);
      newP.style.display = 'none';
      newP.textContent = word;
   }

   function unhide(e) {
      let p = e.target.querySelector('p');
      p.style.display = 'block';
   }
}