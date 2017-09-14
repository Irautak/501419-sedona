var minus1 = document.getElementById('minus1');
var plus1 = document.getElementById('plus1');
var input1 = document.getElementById('adult');
var minus2 = document.getElementById('minus2');
var plus2 = document.getElementById('plus2');
var input2 = document.getElementById('child');

if (minus1) {
  minus1.onclick = function (e) {
    e.preventDefault();
    if (input1.value == 0) {
      return false;
    }
    input1.value--;
  }

  plus1.onclick = function (e) {
    e.preventDefault();
    input1.value++;
  }

  minus2.onclick = function (e) {
    e.preventDefault();
    if (input2.value == 0) {
      return false;
    }
    input2.value--;
  }

  plus2.onclick = function (e) {
    e.preventDefault();
    input2.value++;
  }

  var mapHeadBtn = document.querySelector('.map-headBtn');
  var form = document.querySelector('.form');

  mapHeadBtn.addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.toggle('form-hidden');
  })
}

var catalogRightButton = document.querySelector('.c-right-btn');
var catalogForm = document.querySelector('.c-header-content');

if (catalogForm) {
  catalogRightButton.addEventListener('click', function (e) {
    e.preventDefault();
    catalogForm.submit();
  })
}

