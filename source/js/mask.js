'use strict';

var element = document.getElementById('order__number');

if (element) {
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false,
  };
  var mask = IMask(element, maskOptions);
}
