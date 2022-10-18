window.addEventListener('load', solution);

function solution() {
  let fname = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let code = document.getElementById('code');
  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submit);

  function submit(e) {
    let fnameValue = fname.value;
    let emailValue = email.value;
    e.preventDefault();
    if (fnameValue === '' || emailValue === '') {
      return
    }
    let phoneValue = phone.value;
    let addressValue = address.value;
    let codeValue = code.value;

    submitBtn.disabled  = true;
    fname.value = null;
    email.value = null;
    phone.value = null;
    address.value = null;
    code.value = null;

    let ulInfoPreview = document.getElementById('infoPreview');

    let liFname = document.createElement('li');
    liFname.innerText = `Full Name: ${fnameValue}`;
    ulInfoPreview.appendChild(liFname);

    let liEmail = document.createElement('li');
    liEmail.innerText = `Email: ${emailValue}`;
    ulInfoPreview.appendChild(liEmail);

    let liPhone = document.createElement('li');
    liPhone.innerText = `Phone Number: ${phoneValue}`;
    ulInfoPreview.appendChild(liPhone);

    let liAddress = document.createElement('li');
    liAddress.innerText = `Address: ${addressValue}`;
    ulInfoPreview.appendChild(liAddress);

    let liCode = document.createElement('li');
    liCode.innerText = `Postal Code: ${codeValue}`;
    ulInfoPreview.appendChild(liCode);

    let editBTN = document.getElementById('editBTN');
    editBTN.addEventListener('click', edit);
    let continueBTN = document.getElementById('continueBTN');
    continueBTN.addEventListener('click', continueBtn);

    editBTN.removeAttribute('disabled');
    continueBTN.removeAttribute('disabled');

    function edit(e) {
      fname.value = fnameValue;
      email.value = emailValue;
      phone.value = phoneValue;
      address.value = addressValue;
      code.value = codeValue;
      editBTN.disabled = true;
      continueBTN.disabled = true;
      submitBtn.disabled  = false;
      Array.from(ulInfoPreview.children).forEach(el => {
        el.remove();
      })
    }

    function continueBtn(e) {
      let block = document.getElementById('block');
      let h3 = document.createElement('h3');
      h3.innerText = "Thank you for your reservation!";

      block.innerHTML = '';
      block.appendChild(h3);
    }
  }
}
