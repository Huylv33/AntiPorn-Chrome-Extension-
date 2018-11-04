let activeBtn = document.getElementById('activeBtn');
let active = false;
let sleep = document.getElementById('turnoff');
activeBtn.onclick = function () {
  if (active === false){
    activeBtn.style.backgroundColor = "red";
    activeBtn.innerHTML = 'ACTIVATED';
    sleep.style.display = "block";
    active = true;
  }
}
sleep.onclick = function() {
  if (active === true) {
    sleep.style.display  = "none";
    activeBtn.style.backgroundColor = "gray";
    activeBtn.style.color = "yelow";
    activeBtn.innerHTML = "ACTIVE";
  }
}
//huyle, uet
sleep.ondblclick = function () { 
  alert("huyle");
}


