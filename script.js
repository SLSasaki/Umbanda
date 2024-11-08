// Example JavaScript to add interactivity
const button = document.createElement("button");
button.textContent = "Click me!";
document.body.appendChild(button);

button.addEventListener("click", function() {
  alert("You clicked the button!");
});