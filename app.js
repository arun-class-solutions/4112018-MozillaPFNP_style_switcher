document.addEventListener("DOMContentLoaded", function() {

  document
  .querySelector("#change-red")
  .addEventListener("click", function() {
    // Code here runs only when a click is received to the change-red button
    document
    .querySelector("#red-box")
    .setAttribute("style", "background-color: red");
  });

  document
  .querySelector("#change-green")
  .addEventListener("click", function() {
    // Code here runs only when a click is received to the change-red button
    document
    .querySelector("#green-box")
    .setAttribute("style", "background-color: green");
  });

  document
  .querySelector("#change-blue")
  .addEventListener("click", function() {
    // Code here runs only when a click is received to the change-red button
    document
    .querySelector("#blue-box")
    .setAttribute("style", "background-color: blue");
  });

  // Big and Small divs

  document
  .querySelector("#make-big")
  .addEventListener("click", function() {
    document
    .querySelector("#big-div")
    .classList
    .add("big");
  });

  document
  .querySelector("#make-small")
  .addEventListener("click", function() {
    document
    .querySelector("#small-div")
    .classList
    .add("small");
  });

  // Animated div

  document
  .querySelector("#animate-div")
  .addEventListener("click", function() {
    document
    .querySelector("#animated-div")
    .classList
    .add("rotate-me");
  });

  // Create full-screen overlay

  document
  .querySelector("#create-overlay")
  .addEventListener("click", function() {
    document
    .querySelector("#overlay")
    .setAttribute("style", "display: block");
  });

});
