const body = document.querySelector("body");

const age = prompt("How old are you?");
const userName = document.ElementById("userName");
document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
  const logo = document.createElement("h1");
  body.appendChild(logo);
  logo.textContent = `Hello ${userName}`;
  const div = document.createElement("div");
  body.appendChild(div);
  div.textContent = `Age: ${age}`;
}
fruits.forEach = (fruit) => {
  console.log(fruit);
};
