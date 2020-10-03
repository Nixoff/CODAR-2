var el = document.getElementById('resultado');
var i = 0;
var text = "";

while (i < 11) {
    text += "<br>" + i;
    i++;
    el.innerHTML = text;
}