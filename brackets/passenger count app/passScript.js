
let count=0;

   document.getElementById("saveValues").innerHTML = count;
function incCount() {
    count++;
  document.getElementById("counter").innerHTML = count;

}

function saveCount(){
 let saveCounter=count;

document.getElementById("saveValues").innerHTML+=saveCounter+" - " ;
    count=0;
  document.getElementById("counter").innerHTML = count;
}



