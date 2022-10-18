window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    document.getElementById('add').addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        if (!model.value || !description.value || !year.value || Number(year.value) < 0 || !price.value || Number(price.value) < 0) {
            return;
        }

        let modelValue = model.value;
        let yearValue = year.value;
        let descriptionValue = description.value;
        let priceValue = Number(price.value);
        model.value = null;
        year.value = null;
        description.value = null;
        price.value = null;
        
        let table = document.getElementById('furniture-list');

        let trClassInfo = document.createElement('tr');
        trClassInfo.classList.add('info');
        table.appendChild(trClassInfo);

        let tdModel = document.createElement('td');
        tdModel.innerText = modelValue;
        trClassInfo.appendChild(tdModel);

        let tdPrice = document.createElement('td');
        tdPrice.innerText = Number(priceValue).toFixed(2);
        trClassInfo.appendChild(tdPrice);

        let tdBtns = document.createElement('td');
        trClassInfo.appendChild(tdBtns);

        let btnMoreInfo =document.createElement('button');
        btnMoreInfo.classList.add('moreBtn');
        btnMoreInfo.innerText = 'More Info';
        btnMoreInfo.addEventListener('click', moreInfo);
        tdBtns.appendChild(btnMoreInfo);

        let btnBuyIt =document.createElement('button');
        btnBuyIt.classList.add('buyBtn');
        btnBuyIt.innerText = 'Buy it';
        btnBuyIt.addEventListener('click', buyIt);
        tdBtns.appendChild(btnBuyIt);

        let trClassHide = document.createElement('tr');
        trClassHide.classList.add('hide');
        table.appendChild(trClassHide);

        let tdYear = document.createElement('td');
        tdYear.innerText = `Year: ${yearValue}`;
        trClassHide.appendChild(tdYear);

        let tdDescription = document.createElement('td');
        tdDescription.innerText = `Description: ${descriptionValue}`;
        tdDescription.setAttribute('colspan', 3);
        trClassHide.appendChild(tdDescription);

        function moreInfo(e){
            if(e.target.innerText === 'More Info'){
                e.target.innerText = 'Less Info';
                trClassHide.style.display = 'contents';
            }
            else{
                e.target.innerText = 'More Info';
                trClassHide.style.display = 'none';
            }
        }
        function buyIt(e){
            let totalPrice = document.querySelector(".total-price");
            let totalPriceValue = Number(totalPrice.textContent) + Number(e.target.parentElement.parentElement.children[1].innerText);
            totalPrice.textContent = totalPriceValue.toFixed(2);
            trClassInfo.remove();
            trClassHide.remove();
        }
    }
}
