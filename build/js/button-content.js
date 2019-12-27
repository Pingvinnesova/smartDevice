var buttonGetFree = document.querySelector('.main-screen__button');

var changeContent = function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    buttonGetFree.innerHTML = 'Бесплатная консультация';
    console.log(buttonGetFree);
  } else {
    buttonGetFree.innerHTML = 'Получить бесплатную консультация';
  }
};

changeContent();

window.addEventListener('resize', function () {
  changeContent();
}, false);
