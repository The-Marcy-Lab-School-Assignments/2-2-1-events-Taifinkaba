const button = document.getElementById("add-one");
const results = document.getElementById("results");
let counter = 0;
button.addEventListener("click", function() {
    counter++;
    results.textContent = counter;
});