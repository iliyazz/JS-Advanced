function solve() {
  let inputText = document.getElementById('input').value;
  let outputText = document.getElementById('output');
  let splittedText = Array.from(inputText.split('.').filter(x => x !== '\n' && x !== ''));

  while(splittedText.length > 0){
    let currentTextParagraph = splittedText.splice(0, 3).join('.') + '.';
    let paragraph = document.createElement('p');
    paragraph.textContent = currentTextParagraph;
    outputText.appendChild(paragraph);
  }
}