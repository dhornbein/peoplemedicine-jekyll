let colors = ['pink','orange','yellow','cyan','blue','purple','red','green']

document.addEventListener('DOMContentLoaded', () => {
  [...document.getElementsByClassName('js-rainbow')].forEach(el => {
    rainbow(el);
  });
});

let homepage = document.getElementById('home-hero');

homepage.addEventListener('mousemove', e => {
  [...homepage.getElementsByClassName('js-rainbow')].forEach(el => {
    rainbowLetterChange(el);
  });
});

function rainbowLetterChange(el) {
  let chance = 4,
      letters = el.children,
      randomNumber = Math.floor(Math.random() * (el.childElementCount * chance) ),
      colorCount = Math.floor(Math.random() * colors.length);
  
  if (randomNumber < el.childElementCount) {
    letters[randomNumber].setAttribute('class', 'has-text-' + colors[colorCount] );
  }
}

function rainbow(el) {
  let text = el.innerText,
      colorCount = Math.floor(Math.random() * colors.length);
  
  el.innerHTML = '';

  text.split('').forEach(letter => {
    if (letter != " ") {
      let sp = document.createElement('span');
      colorCount = (colorCount + 1 < colors.length) ? colorCount + 1 : 0;
      sp.setAttribute('class', 'has-text-' + colors[colorCount] );
      sp.textContent = letter;
      el.appendChild(sp);
    } else {
      el.innerHTML += ' ';
    }
  });
}