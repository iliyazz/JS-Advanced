function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      let table = document.querySelectorAll('tbody tr');
      let searchedString = document.getElementById('searchField').value;
      for(let row of table){
         console.log(row.textContent);
         row.classList.remove('select');
         if(row.textContent.includes(searchedString)){
            row.className = 'select'
         }
      }
      searchedString = '';
   }
}