'use strict';

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
