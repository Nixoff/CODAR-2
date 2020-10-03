var el = document.getElementById('resultado');


var j=0, msg="";
while (j<=20){
     if(j ==20){
       msg +=j;
       break;
     }
     if(j%2 !=0){
       msg += "";
     }else{
       msg += j + ", ";
    }
    j++;
  };
console.log(msg);
el.innerHTML = msg;