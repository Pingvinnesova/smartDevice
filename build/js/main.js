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

var element = document.getElementById('order__number');

if (element) {
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false,
  };
  var mask = IMask(element, maskOptions);
}

var copyright = document.querySelector('.page-footer__copyright');
var wrapper = document.querySelector('.page-footer__wrapper');
var cloneCopyright = copyright.cloneNode(true);

var cloneBlock = function () {
  if (window.matchMedia('(max-width: 1023px)').matches) {
    wrapper.appendChild(cloneCopyright);
    copyright.classList.add('page-footer__copyright--show');
  } else {
    if (wrapper.contains(cloneCopyright)) {
      wrapper.removeChild(cloneCopyright);
      copyright.classList.remove('page-footer__copyright--show');
    }
  }
};

if (copyright || wrapper) {
  cloneBlock();
}

window.addEventListener('resize', function () {
  if (copyright || wrapper) {
    cloneBlock();
  }
}, false);

var buttonGetFree = document.querySelector('.main-screen__button');

var changeContent = function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    buttonGetFree.innerHTML = 'Бесплатная консультация';
  } else {
    buttonGetFree.innerHTML = 'Получить бесплатную консультация';
  }
};

if (buttonGetFree) {
  changeContent();
}

window.addEventListener('resize', function () {
  if (buttonGetFree) {
    changeContent();
  }
}, false);

var callButton = document.querySelector('.header__order-call');
var modalOverlay = document.querySelector('.order');
var crossButton = document.querySelector('.order__cross');
var orderName = document.querySelector('.order__name');
var body = document.querySelector('body');

if (callButton) {
  callButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalOverlay.classList.add('order--show');
    body.classList.add('no-scroll');
    orderName.focus();
  });
}

if (crossButton) {
  crossButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalOverlay.classList.remove('order--show');
    body.classList.remove('no-scroll');
  });
}

document.addEventListener('mousedown', function (evt) {
  if (evt.target.closest('.order') === null) {
    modalOverlay.classList.remove('order--show');
    body.classList.remove('no-scroll');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalOverlay.classList.contains('order--show')) {
      evt.preventDefault();
      modalOverlay.classList.remove('order--show');
      body.classList.remove('no-scroll');
    }
  }
});

var elements = document.querySelectorAll('.order__name, .order__number, .order__text');

function checkValidity() {}

for (var i = 0; i < elements.length; i++) {
  (function (element) {
    var id = element.getAttribute('id');
    element.value = localStorage.getItem(id);
    element.oninput = function () {
      localStorage.setItem(id, element.value);
      checkValidity();
    };
  })(elements[i]);
}
