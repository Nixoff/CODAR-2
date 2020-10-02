function validateAge() {
  var ano = document.getElementById("ageYear").value;
  var anos = ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2003'];
  if (ano <= 2002) {
    alert('Você é maior de idade.');
      
  } else if ( ano >= anos ) {
    alert('Lamentamos, mas no momento você não é permitido ver este conteúdo.');
  };
  
}
