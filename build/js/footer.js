'use strict';

var copyright = document.querySelector('.page-footer__copyright');
var wrapper = document.querySelector('.page-footer__wrapper');
// var footerInfo = document.querySelector('page-footer__info');
var line = document.querySelector('.page-footer__line');
var container = document.querySelector('.page-footer');
var pageFooter = document.querySelector('.page-footer__container');
var cloneCopyright = copyright.cloneNode(true);
var cloneLine = line.cloneNode(true);


var cloneBlock = function () {
  if (window.matchMedia('(max-width: 1023px)').matches) {
    wrapper.appendChild(cloneCopyright);
    container.insertBefore(cloneLine, pageFooter);
    cloneLine.classList.add('page-footer__line--top');
    copyright.classList.add('page-footer__copyright--show');
  } else {
    if (wrapper.contains(cloneCopyright)) {

      wrapper.removeChild(cloneCopyright);
      copyright.classList.remove('page-footer__copyright--show');
}
  }
};

cloneBlock();

window.addEventListener('resize', function () {
  cloneBlock();
}, false);
