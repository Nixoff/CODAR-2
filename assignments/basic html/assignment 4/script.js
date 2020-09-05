function mkLogin() {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  console.log(
    'Campo e-mail:' +
      '\u0020' +
      email +
      '\u0020  ' +
      'Campo senha:' +
      '\u0020' +
      pass
  );

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open('POST', 'http://52.91.139.190/fsapi/users/login', true);
  xhttp.setRequestHeader(
    'Content-type',
    'application/json'
  ); /* configuração da requisição */
  xhttp.send(
    JSON.stringify({
      "email": email,
      "password": pass,
    })
  ); /*  conteudo da requisição */
  event.preventDefault();
}



