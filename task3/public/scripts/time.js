const p = document.querySelector("p");
const d = new Date();
p.innerText = d.toLocaleDateString();

const clock = document.querySelector("#clock");

setInterval(() => {
  const timee = new Date();
  clock.innerText = timee.toLocaleTimeString();
}, 1000);
