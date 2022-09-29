function solve() {

  let buttons = document.getElementsByTagName('button');
  buttons[0].addEventListener('click', gen);
  buttons[1].addEventListener('click', buy);

  function gen() {
    let inputJson = document.getElementsByTagName('textarea')[0].value;
    let objects = JSON.parse(inputJson);

    let tbody = document.querySelector('tbody');
    for (let obj of objects) {
      let newTr = document.createElement('tr')
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');
      let img = document.createElement('img');
      img.setAttribute('src', obj.img)
      td1.appendChild(img);
      td2.textContent = obj.name;
      td3.textContent = obj.price;
      td4.textContent = obj.decFactor;
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      td5.appendChild(checkBox);
      newTr.appendChild(td1);
      newTr.appendChild(td2);
      newTr.appendChild(td3);
      newTr.appendChild(td4);
      newTr.appendChild(td5);
      tbody.appendChild(newTr);
    }
  }


  function buy() {
    let table  =Array.from(document.querySelectorAll('tbody tr'));
    let listOfProducts = [];
    let totalPrice = 0;
    let count = 0;
    let sumOfDecor = 0;
    for(let tr of table){
      if(tr.querySelector('input[type=checkbox]:checked')){
        let cellsData = tr.querySelectorAll('td');
        listOfProducts.push(cellsData[1].textContent);
        totalPrice += Number(cellsData[2].textContent);
        count++;
        sumOfDecor += Number(cellsData[3].textContent);
      }
    }
    let result = `Bought furniture: ${listOfProducts.join(', ')}\n`
    result +=  `Total price: ${totalPrice.toFixed(2)}\n`;
    let decFactor = sumOfDecor / count;
    result += `Average decoration factor: ${decFactor}`;
    let outputArea = document.getElementsByTagName('textarea')[1];
    outputArea.textContent = result;
  }
}