window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  document.getElementById('publish').addEventListener('click', publish);
  let tableBody = document.getElementById('table-body');
  let totalProfit = 0;

  function publish(e) {
    e.preventDefault();

    if (!make.value || !model.value || !year || !fuel.value || !originalCost.value || !sellingPrice.value || Number(originalCost.value) > Number(sellingPrice.value)) {
      return;
    }

    let tr = document.createElement('tr');
    tr.classList.add('row');

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

    let tdBtn = document.createElement('td')
    tr.appendChild(tdBtn);

    let btnEdit = document.createElement('button', edit);
    btnEdit.classList.add('action-btn');
    btnEdit.classList.add('edit');
    btnEdit.innerText = 'Edit'
    btnEdit.addEventListener('click', edit);
    tdBtn.appendChild(btnEdit);

    let btnSell = document.createElement('button', edit);
    btnSell.classList.add('action-btn');
    btnSell.classList.add('sell');
    btnSell.innerText = 'Sell'
    btnSell.addEventListener('click', sell)
    tdBtn.appendChild(btnSell);

    let makeValue = make.value;
    let modelValue = model.value;
    let yearValue = year.value;
    let fuelValue = fuel.value;
    let originalCostValue = originalCost.value;
    let sellingPriceValue = sellingPrice.value;

    make.value = null;
    model.value = null;
    year.value = null;
    fuel.value = null;
    originalCost.value = null;
    sellingPrice.value = null;

    tableBody.appendChild(tr);

    function edit(e) {
      make.value = makeValue;
      model.value = modelValue;
      year.value = yearValue;
      fuel.value = fuelValue;
      originalCost.value = originalCostValue;
      sellingPrice.value = sellingPriceValue;
      e.target.parentElement.parentElement.remove();
    }
    function sell(e) {
      let ul = document.getElementById('cars-list');
      let li = document.createElement('li');
      li.classList.add('each-list');
      ul.appendChild(li);

      let spanMakeModel = document.createElement('span');
      spanMakeModel.innerText = `${makeValue} ${modelValue}`;
      li.appendChild(spanMakeModel);

      let spanYear = document.createElement('span');
      spanYear.innerText = yearValue;
      li.appendChild(spanYear);

      let spanProfit = document.createElement('span');
      spanProfit.innerText = Number(sellingPriceValue) - Number(originalCostValue);
      li.appendChild(spanProfit);

      totalProfit += Number(sellingPriceValue) - Number(originalCostValue);
      document.getElementById('profit').innerText = totalProfit.toFixed(2);
      
      e.target.parentElement.parentElement.remove();
    }
  }
}
