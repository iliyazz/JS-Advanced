function notify(message) {
  let divMsg = document.getElementById('notification');
  divMsg.textContent = message;
  divMsg.style.display = "block";
  divMsg.addEventListener('click', hideMsg);
  function hideMsg(e){
    e.currentTarget.style.display = "none";
  }
}