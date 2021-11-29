document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

let colors = ['pink','orange','yellow','cyan','blue','purple','red','green']
let colorsHex = ['#FF77F9', '#FFA47F', '#F9E800', '#87FFDD', '#35C7FF', '#A992FF', '#FD4796', '#C3FF6F']

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

// Drawing canvas fun

const canvas = document.getElementById("home-canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 },
color = null,
drawing = false;

document.addEventListener("mousedown", start);
canvas.addEventListener("mouseup",stop);
canvas.addEventListener("mouseleave",stop);
window.addEventListener("resize", resize);

function setColor() {
  color = colorsHex[Math.floor(Math.random() * colorsHex.length) - 1]
}

function resize() {
  ctx.canvas.width = canvas.parentElement.clientWidth;
  ctx.canvas.height = canvas.parentElement.clientHeight;
}
resize();

function toggle(event) {
  console.log('toggle!');
  if (drawing) {
    stop();
  } else {
    start(event);
  }
  drawing = !drawing;
}

function start(event) {
  setColor();
  document.addEventListener("mousemove", draw);
  reposition(event);
}

function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft + window.scrollX;
  coord.y = event.clientY - canvas.offsetTop + window.scrollY;
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}