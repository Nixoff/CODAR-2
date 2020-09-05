var name = document.getElementById("login").value;
var email = document.getElementById('email').value;
var password = document.getElementById("password").value;
var confirm_password = document.getElementById("confirm_password").value;

function validate() {
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (password != confirm_password) {
    document.getElementById('error').innerHTML = " Passwords don't match ";

  } else {
    mkRegister();
  }
}

function mkRegister() {
  var email = document.getElementById('email').value;
  var name = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  console.log(
    'Campo e-mail:' +
      '\u0020' +
      email +
      '\u0020  ' +
      'Campo senha:' +
      '\u0020' +
      password
  );

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open(
    'POST',
    'http://52.91.139.190/fsapi/users/auth/register-jwt',
    true
  );
  xhttp.setRequestHeader('Content-type', 'application/json');
  xhttp.send(
    JSON.stringify({
      'name': name,
      'email': email,
      'password': password,
      'confirma_password': confirm_password,
    })
  );
  event.preventDefault();
}