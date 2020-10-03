var el = document.getElementById('resultado');

const usuarios = [
    { nome: 'Caio', idade: 25, empresa: 'Google' },
    { nome: 'Tiago', idade: 35, empresa: 'Microsoft' },
    { nome: 'Felipe', idade: 30, empresa: 'Apple' },
   ];
   

/*    function getAges(item) {
       var ages = [item.idade].join(" ");
       return ages;
   }

    el.innerHTML = usuarios.map(getAges);
 */


 function checkCompanyAge(empresa, idade) {
     return idade >=30, empresa = Apple;
 }

 function gab() {
     el.innerHTML = idade.filter(checkCompanyAge);
 }