'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var colors = ['pink', 'orange', 'yellow', 'cyan', 'blue', 'purple', 'red', 'green'];

document.addEventListener('DOMContentLoaded', function () {
  [].concat(_toConsumableArray(document.getElementsByClassName('js-rainbow'))).forEach(function (el) {
    var text = el.innerText,
        colorCount = Math.floor(Math.random() * colors.length);
    el.innerHTML = '';

    text.split('').forEach(function (letter) {
      if (letter != " ") {
        var sp = document.createElement('span');
        colorCount = colorCount + 1 < colors.length ? colorCount + 1 : 0;
        sp.setAttribute('class', 'has-text-' + colors[colorCount]);
        sp.textContent = letter;
        el.appendChild(sp);
      } else {
        el.innerHTML += ' ';
      }
    });
  });
});