'use strict';

var acc = document.querySelectorAll('.accordion h2');
acc.forEach(function (n) {
  n.onclick = function () {
    var child = n.parentNode.querySelector('.accordion__panel');
    if (child.classList.contains('accordion__panel--show')) {
      child.classList.remove('accordion__panel--show');
      n.parentNode.querySelector('span').classList.add('accordion__minus');
      n.parentNode.querySelector('span').classList.remove('accordion__plus');
    } else {
      n.parentNode.querySelector('span').classList.add('accordion__plus');
      n.parentNode.querySelector('span').classList.remove('accordion__minus');
      child.classList.add('accordion__panel--show');
    }
  };
});
