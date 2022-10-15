window.addEventListener("load", solve);

function solve() {

  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  document.getElementById('publish').addEventListener('click', publish);
  let totalProfit = 0;

  let tableBody = document.getElementById('table-body');
  
  function publish(e) {
    e.preventDefault();
    if (!make.value || !model.value || !year.value || !fuel.value || !originalCost.value || !sellingPrice.value || Number(originalCost.value) > Number(sellingPrice.value)) {
      return;
    }
    createTable();
    clearInputFields()
  }
  function clearInputFields(e){
    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originalCost.value = '';
    sellingPrice.value = '';
  }
  function createTable(e) {
    let tr = document.createElement('tr');
    tr.classList.add('row')

    let tdMake = document.createElement('td');
    tdMake.innerText = make.value;
    tr.appendChild(tdMake);

    let tdModel = document.createElement('td');
    tdModel.innerText = model.value;
    tr.appendChild(tdModel);

    let tdYear = document.createElement('td');
    tdYear.innerText = year.value;
    tr.appendChild(tdYear);

    let tdFuel = document.createElement('td');
    tdFuel.innerText = fuel.value;
    tr.appendChild(tdFuel);

    let tdOriginalCost = document.createElement('td');
    tdOriginalCost.innerText = originalCost.value;
    tr.appendChild(tdOriginalCost);

    let tdSellingPrice = document.createElement('td');
    tdSellingPrice.innerText = sellingPrice.value;
    tr.appendChild(tdSellingPrice);

    let buttonsTd = document.createElement('td');
    tr.appendChild(buttonsTd);

    let btnEdit = document.createElement('button')
    btnEdit.classList.add('action-btn', 'edit');
    btnEdit.textContent = 'Edit';
    buttonsTd.appendChild(btnEdit);
    btnEdit.addEventListener('click', edit);

    let btnSell = document.createElement('button');
    btnSell.classList.add('action-btn', 'sell');
    btnSell.textContent = 'Sell'
    buttonsTd.appendChild(btnSell);
    btnSell.addEventListener('click', sell);

    tableBody.appendChild(tr);
  }

  function edit(e){
    let dataArr = e.target.parentElement.parentElement.children;
    make.value = dataArr[0].textContent;
    model.value = dataArr[1].textContent;
    year.value = dataArr[2].textContent;
    fuel.value = dataArr[3].textContent;
    originalCost.value = dataArr[4].textContent;
    sellingPrice.value = dataArr[5].textContent;
    e.target.parentNode.parentNode.remove();
  }
  function sell(e){
    let dataArr = e.target.parentElement.parentElement.children;
    let ulCarlist = document.getElementById('cars-list');
    let li = document.createElement('li');
    li.classList.add('each-list');
    
    let spanMakeModel = document.createElement('span');
    spanMakeModel.innerText = `${dataArr[0].textContent} ${dataArr[1].textContent}`;
    li.appendChild(spanMakeModel);

    let spanYear = document.createElement('span');
    spanYear.innerText = dataArr[2].textContent;
    li.appendChild(spanYear);

    let spanProfit = document.createElement('span');
    let currentProfit = Number(dataArr[5].textContent) - Number(dataArr[4].textContent);
    spanProfit.innerText = currentProfit;
    li.appendChild(spanProfit);
    
    totalProfit += currentProfit;

    ulCarlist.appendChild(li);
    e.target.parentNode.parentNode.remove();

    document.getElementById('profit').textContent = totalProfit.toFixed(2);
  }
}
