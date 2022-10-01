function solve() {
  let sections = document.getElementsByTagName('section'); //querySelectorAll('section');
  let result = document.getElementById('results');
  let correctAnswersCount = 0;
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  for (let i = 0; i < sections.length; i++) {
    let answers = sections[i].getElementsByTagName('p');
    for (let answer of answers) {
      answer.addEventListener('click', check);
    }

    function check(e) {
      if (e.target.textContent === correctAnswers[i]) {
        correctAnswersCount++;
      }
      if (i < 2) {
        sections[i].style.display = 'none';
        sections[i + 1].style.display = 'block';
      }
      if (i === 2) {
        let output = result.children[0].children[0];
        correctAnswersCount == 3 ? output.textContent = 'You are recognized as top JavaScript fan!' : output.textContent = `You have ${correctAnswersCount} right answers`;
        sections[i].style.display = 'none';
        document.getElementById('results').style.display = 'block';
      }
    }
  }
}
