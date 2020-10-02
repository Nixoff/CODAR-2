function validateForm() {
  var x = document.forms['myForm']['firstname'].value;
  if (x == '') {
    alert('Por favor, preencha o campo com o seu nome');
    document.querySelector('#name > input.firstname').focus();
    document.querySelector('#name > input.firstname').style.background =
      '#D4D4D4';
    return false;
  } else {
    document.querySelector('#name > input.firstname').style.background = '';
  }
  var x = document.forms['myForm']['lastname'].value;
  if (x == '') {
    alert('Por favor, preencha o campo com o seu último nome');
    document.querySelector('#name > input.lastname').focus();
    document.querySelector('#name > input.lastname').style.background =
      '#D4D4D4';
    return false;
  } else {
    document.querySelector('#name > input.lastname').style.background = '';
  }

  x = document.querySelector('#myForm > input.point').value;
  if (isNaN(x) || x < 1 || x > 100) {
    alert('Por favor, escolha um número válido de 1 á 100');
    document.querySelector('#myForm > input.point').focus();
    document.querySelector('#myForm > input.point').style.background =
      '#D4D4D4';
    return false;
  } else {
    document.querySelector('#myForm > input.point').style.background = '';
  }

  x = document.querySelector('#myForm > input.note').value;
  if (isNaN(x) || x < 1 || x > 10) {
    alert('Por favor, escolha um número válido de 1 á 10');
    document.querySelector('#myForm > input.note').focus();
    document.querySelector('#myForm > input.note').style.background = '#D4D4D4';
    return false;
  } else {
    document.querySelector('#myForm > input.note').style.background = '';
  }

  var x = document.querySelector('#myForm > input.university').value;
  if (x == '') {
    alert('Por favor, preencha o campo com o nome de sua universidade');
    document.querySelector('#myForm > input.university').focus();
    document.querySelector('#myForm > input.university').style.background =
      '#D4D4D4';
    return false;
  } else {
    document.querySelector('#myForm > input.university').style.background = '';
  }

  var x = document.querySelector('#myForm > input.company').value;
  if (x == '') {
    alert('Por favor, preencha o campo com o nome de sua empresa');
    document.querySelector('#myForm > input.company').focus();
    document.querySelector('#myForm > input.company').style.background =
      '#D4D4D4';
    return false;
  } else {
    document.querySelector('#myForm > input.company').style.background = '';
  }

  var x = document.querySelector('#myForm > input.avatar').value;
  if (x == '') {
    alert('Por favor, preencha o campo com o nome do seu avatar');
    document.querySelector('#myForm > input.avatar').focus();
    document.querySelector('#myForm > input.avatar').style.background =
      '#D4D4D4';
    return false;
  } else {
    document.querySelector('#myForm > input.avatar').style.background = '';
  }
}

function changeAvatar() {
  x = document.querySelector('#myForm > button').value;
}
