'use strict';

var callButton = document.querySelector('.header__order-call');
var modalOverlay = document.querySelector('.order');
var crossButton = document.querySelector('.order__cross');
var orderName = document.querySelector('.order__name');

callButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalOverlay.classList.add('order--show');
  orderName.focus();
});

document.addEventListener('mousedown', function (e) {
  if (e.target.closest('.order') === null) {
    modalOverlay.classList.remove('order--show');
  }
});

crossButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalOverlay.classList.remove('order--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalOverlay.classList.contains('order--show')) {
      evt.preventDefault();
      modalOverlay.classList.remove('order--show');
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
