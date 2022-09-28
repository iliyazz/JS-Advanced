function solve() {
   let buttons = document.querySelectorAll('.product button');
   let chekout = document.querySelector('.checkout');
   chekout.addEventListener('click', checkAll);
   for (let button of buttons) {
      button.addEventListener('click', addProduct);
   }
   let list = [];
   let textArea = document.querySelector('textarea');
   let totalMoney = 0
   let count = 0
   function addProduct(e) {
      productName = e.target.parentElement.parentElement.querySelector('.product-title').textContent;
      productPrice = Number(e.target.parentElement.parentElement.querySelector('.product-line-price').textContent);
      totalMoney += productPrice;
      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      count++;

      if (!list.includes(productName)) {
         list.push(productName);
      }
   }
   function checkAll(e) {
      for (let button of buttons) {
         button.disabled = true;
      }
      this.removeEventListener('click', checkAll)
      textArea.textContent += `You bought ${list.join(', ')} for ${totalMoney.toFixed(2)}.`;
   }
}