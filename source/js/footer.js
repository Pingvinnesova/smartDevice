'use strict';

var copyright = document.querySelector('.page-footer__copyright');
var wrapper = document.querySelector('.page-footer__wrapper');
var cloneCopyright = copyright.cloneNode(true);

var cloneBlock = function () {
  if (window.matchMedia('(max-width: 1023px)').matches) {
    wrapper.appendChild(cloneCopyright);
    copyright.innerHTML = '';
  }
};

cloneBlock();
