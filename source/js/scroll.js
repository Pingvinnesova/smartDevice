'use strict';

var anchors = document.querySelectorAll('a.scroll-to')

if (anchors) {
  for (var anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      var blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}
