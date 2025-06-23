let body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";

let a = 0;

let p = document.createElement("p");
p.innerText = a;

let display = document.querySelector("#display");
display.append(p);

let inc = document.querySelector("#Increment");
let dec = document.querySelector("#Decrement");
let clr = document.querySelector("#Clear");
let err = document.querySelector("#error");





clr.addEventListener("click", () => {
  a = 0;
  p.innerText = a;

  err.innerText = "Error: Cannot go below 0";
  err.style.color = "red";
  err.style.display = "block"; 
  clr.style.visibility = "hidden";
  dec.disabled = true;
});





inc.addEventListener("click", () => {
  a = a + 1;
  p.innerText = a;

  dec.disabled = false;
  clr.style.visibility = "visible";


  err.style.display = "none";
});





dec.addEventListener("click", () => {
  if (a > 0) {
    a = a - 1;
    p.innerText = a;
    err.style.display = "none"; 
  }

  if (a === 0) {
    err.innerText = "Error: Cannot go below 0";
    err.style.color = "red";
    err.style.display = "block";
    clr.style.visibility = "hidden";
    dec.disabled = true;
  }
});
