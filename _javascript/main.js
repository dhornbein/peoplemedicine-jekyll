let colors = ['pink','orange','yellow','cyan','blue','purple','red','green']

document.addEventListener('DOMContentLoaded', () => {
  [...document.getElementsByClassName('js-rainbow')].forEach(el => {
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
  });
});
