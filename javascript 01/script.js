function changeGreen() {
var greenButton = document.getElementById('button.green') 
var greenDiv = document.getElementById('divGreen');

   greenButton.classList.toggle('green');
   greenDiv.classList.toggle('divGreen');

}

function changeRed() {
   var redButton = document.getElementById('button.red');
   var redDiv = document.getElementById('divRed');

      redButton.classList.toggle('red');      
      redDiv.classList.toggle('divRed');
}