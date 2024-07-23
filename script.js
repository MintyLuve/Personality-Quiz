var qCount = 0; //num of ans

var wildSc = 0; //wild score
var houseSc = 0; // house score

var done = false;

//getting elements
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var result = document.getElementById("result");
var restart = document.getElementById("restart");

// adding event listeners
q1a1.addEventListener("click", housePlus1);
q1a2.addEventListener("click", wildPlus1);

q2a1.addEventListener("click", wildPlus1);
q2a2.addEventListener("click", housePlus1);

q3a1.addEventListener("click", wildPlus1);
q3a2.addEventListener("click", housePlus1);

restart.addEventListener("click", rere);

q1a1.addEventListener("click",() => {q1a1.style.backgroundColor = "#00f080";});
q1a2.addEventListener("click",() => {q1a2.style.backgroundColor = "#00f080";});

q2a1.addEventListener("click",() => {q2a1.style.backgroundColor = "#00f080";});
q2a2.addEventListener("click",() => {q2a2.style.backgroundColor = "#00f080";});

q3a1.addEventListener("click",() => {q3a1.style.backgroundColor = "#00f080";});
q3a2.addEventListener("click",() => {q3a2.style.backgroundColor = "#00f080";});

//functions
function housePlus1() {
  houseSc += 1;
  qCount += 1;
  console.log(wildSc+"-"+houseSc);
  check(qCount);
}

function wildPlus1() {
  wildSc += 1;
  qCount += 1;
  console.log(wildSc+"-"+houseSc);
  check(qCount);
}

function check(num){
  if (num == 1){
    q1a1.disabled = true;
    q1a2.disabled = true;
  }

  if (num == 2){
    q2a1.disabled = true;
    q2a2.disabled = true;
  }
  
  if (num == 3){
    q3a1.disabled = true;
    q3a2.disabled = true;
    if (wildSc > houseSc){
      console.log("Wild!");
      result.innerHTML = "You are a Wild Cat!";
    }
    else if (wildSc < houseSc){
      console.log("House!");
      result.innerHTML = "You are a House Cat!";
    }
    else{
      console.log("Tie?");
      result.innerHTML = "You are a Both!";

    }
  }
}

function rere(){
  wildSc = 0;
  houseSc = 0;
  qCount = 0;
  result.innerHTML = "You are a..."

  q1a1.disabled = false;
  q1a2.disabled = false;

  q2a1.disabled = false;
  q2a2.disabled = false;
  
  q3a1.disabled = false;
  q3a2.disabled = false;

  q1a1.style.backgroundColor = "#018347";
  q1a2.style.backgroundColor = "#018347";

  q2a1.style.backgroundColor = "#018347";
  q2a2.style.backgroundColor = "#018347";

  q3a1.style.backgroundColor = "#018347";
  q3a2.style.backgroundColor = "#018347";

}
