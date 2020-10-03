   function getAges(item) {
       var ages = [item.idade].join(" ");
       return ages;
   }

    el.innerHTML = usuarios.map(getAges);
