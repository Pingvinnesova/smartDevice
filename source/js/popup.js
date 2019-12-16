var callButton = document.querySelector(".page-header__order-call");
var modalOverlay = document.querySelector(".modal__overlay");
var crossButton = document.querySelector(".order__cross");
var orderForm = document.querySelector(".order");
var orderName = document.querySelector(".order__name");
var orderNumber = document.querySelector(".order__number");
var orderText = document.querySelector(".order__text");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("orderName");
} catch (err) {
  isStorageSupport = false;
}

callButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalOverlay.classList.add("modal__overlay--show");
  orderName.focus();
});

var order = document.querySelector('.order');
document.addEventListener('mousedown', function(e) {
    if(e.target.closest('.order') === null) {
        modalOverlay.classList.remove("modal__overlay--show");
    }
});

crossButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalOverlay.classList.remove("modal__overlay--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalOverlay.classList.contains("modal__overlay--show")) {
      evt.preventDefault();
      modalOverlay.classList.remove("modal__overlay--show");
    }
  }
});

var elements = document.querySelectorAll('.order__name, .order__number, .order__text');

function checkValidity() {};

for (i=0; i<elements.length; i++) {
 (function(element) {
   var id = element.getAttribute('id');
   element.value = localStorage.getItem(id); // обязательно наличие у элементов id
   element.oninput = function() {
     localStorage.setItem(id, element.value);
     checkValidity();
   };
 })(elements[i]);
}




// var isStorageSupport = true;
// var nameStorage = "";
// var numberStorage = "";
// var textStorage = "";

// try {
//   nameStorage = localStorage.getItem("orderName");
//   numberStorage = localStorage.getItem("orderNumber");
//   textStorage = localStorage.getItem("orderText");
// } catch (err) {
//   isStorageSupport = false;
// }

// callButton.addEventListener("click", function(evt) {
//   console.log('click');
//   evt.preventDefault();
//   modalOverlay.classList.add("modal-overlay--show");
//   if (nameStorage) {
//     orderName.value = nameStorage;
//     orderNumber.focus();
//   } else if (numberStorage) {
//     orderNumber.value = numberStorage;
//     orderText.focus();
//   } else if (textStorage) {
//     orderText.value = textStorage;
//     orderName.focus();
//   }
// });

//


// modalOverlay.addEventListener("click", function(evt) {
//       evt.stopPropagation();
//   if (modalOverlay.classList.contains("modal-overlay--show")) {
//       evt.preventDefault();
//       modalOverlay.classList.remove("modal-overlay--show");
//     }
// });
