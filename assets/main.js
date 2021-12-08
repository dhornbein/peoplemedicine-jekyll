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
let homepage = document.getElementById('home-hero');

document.addEventListener('DOMContentLoaded', () => {
  [...document.getElementsByClassName('js-rainbow')].forEach(el => {
    rainbow(el);
  });
});


if( homepage ) homepage.addEventListener('mousemove', e => {
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
if ( canvas ) {
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
}

//  MODAL HANDLING


function stringToNode(template) {
  let modal = document.createElement('template');
  modal.innerHTML = template;
  return modal.content.childNodes;
}

let modalGroup = document.querySelectorAll('[data-modal-group]');
let modal_template = '<div class="modal"><div class="modal-background"></div><div class="modal-content"></div><button class="modal-close is-large" aria-label="close"></button></div>'
let modal_card_template = '<div class="modal"><div class="modal-background"></div><div class="modal-card"><header class="modal-card-head"><button class="delete" aria-label="close" date-modal-close></button></header><section class="modal-card-body"></section><footer class="modal-card-foot"></footer></div></div>'
let modals = [];
let modalActiveClass = 'is-active';

if (modalGroup) {

modalGroup.forEach(el => {
  // build modal node

  [...el.children].forEach(el => {
    if ( ! el.dataset.modalEl ) return; // child element needs attribute data-modal-el="true" to be considered

    modal = el.cloneNode(true);

    let id = modal.id,
        type = modal.dataset.modalEl,
        nav = modal.dataset.modalNav,
        dataTitle = modal.querySelector('[data-modal-title]'),
        dataContent = modal.querySelector('[data-modal-body]'),
        content = dataContent ? dataContent : modal.innerHTML,
        title = dataTitle ? dataTitle : false,
        template = null;

    switch (type) {
      case 'card':
        template = stringToNode(modal_card_template)[0];
        let card = template.childNodes[1],
            head = card.childNodes[0],
            body = card.childNodes[1],
            foot = card.childNodes[2];

        if (title) head.prepend(title);
        body.appendChild(content);
        break;
      default:
        template = stringToNode(modal_template);
        break;
    }
    
    template.id = id;
    document.body.appendChild(template)
    el.id = '';
    modals.push(template);

  })
});

} // if modal group

let modalButtons = document.querySelectorAll('[data-modal-open]');
let modalCloseButtons = document.querySelectorAll('.modal-close, .modal-background,[date-modal-close]');

// if there is at least one modal element, work on buttons
if ( document.querySelector('[data-modal-el]')) {
  modalButtons.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault;
      let target = (el.dataset.modalOpen) ? el.dataset.modalOpen : el.href.replace('#',''),
          targetEl = document.getElementById(target);
      
      modals.forEach(modal => {
        modal.classList.remove(modalActiveClass)
      })

      targetEl.classList.add(modalActiveClass);
      document.documentElement.classList.add('is-clipped');
    })

  });

  modalCloseButtons.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault;
      modals.forEach(modal => {
        modal.classList.remove(modalActiveClass)
      })
      document.documentElement.classList.remove('is-clipped');
    })

  });
}