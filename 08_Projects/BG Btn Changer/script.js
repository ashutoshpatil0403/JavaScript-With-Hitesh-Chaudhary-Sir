const g = document.getElementById("g");
const gray = document.getElementById("gray");
const r = document.getElementById("r");
const y = document.getElementById("y");
const b = document.getElementById("b");
const p = document.getElementById("p");
const o = document.getElementById("o");

g.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
r.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
gray.addEventListener("click", () => {
  document.body.style.backgroundColor = "gray";
});
y.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});
b.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
p.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(233, 0, 182)";
});
o.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(255, 72, 0)";
});
