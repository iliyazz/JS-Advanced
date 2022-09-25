function search() {
   let itemList = Array.from(document.querySelectorAll('#towns li'));
   let searchedText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;
   for(const item of itemList){
      if(item.textContent.includes(searchedText)){
         matches++;
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
      } else {
         item.style.fontWeight = 'normal';
         item.style.textDecoration = 'none';
      }
   }
   result.textContent = `${matches} matches found`
}
