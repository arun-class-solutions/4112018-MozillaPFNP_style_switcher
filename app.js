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

});
