const redP = document.getElementById("sec1").parentElement;
const yellowP = document.getElementById("sec2").parentElement;
const greenP = document.getElementById("sec3").parentElement;

const redSec = document.getElementById("sec1");
const yellowSec = document.getElementById("sec2");
const greenSec = document.getElementById("sec3");

let interval;

function offAll() {
  redP.classList.remove("active");
  yellowP.classList.remove("active");
  greenP.classList.remove("active");
}

function trafficLight(redTime, greenTime) {
  let time = redTime;
  let mode = "red";

  interval = setInterval(() => {
    offAll();

    if (mode === "red") {
      redP.classList.add("active");
      redSec.textContent = time;

      if (time <= 3) {
        yellowP.classList.add("active");
        yellowSec.textContent = time;
      }

      if (time === 0) {
        mode = "green";
        time = greenTime;
      }
    } 
    else if (mode === "green") {
      greenP.classList.add("active");
      greenSec.textContent = time;

      if (time <= 3) {
        yellowP.classList.add("active");
        yellowSec.textContent = time;
      }

      if (time === 0) {
        mode = "red";
        time = redTime;
      }
    }

    time--;
  }, 1000);
}
offAll();
redP.classList.add("active");
redSec.textContent = 15;
trafficLight(15, 10);
