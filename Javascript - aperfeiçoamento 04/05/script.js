function grabPrice() {
    var coinValue = document.getElementById("coinName").value;
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      
      var json = JSON.parse(this.responseText);
      document.getElementById('coinValue').innerHTML = json.USD.high
      
    };
    xhttp.open("GET", `https://economia.awesomeapi.com.br/all/${coinValue}-BRL`, true);
    xhttp.send();
}




/* var x = document.getElementById("coinValue").value; */
