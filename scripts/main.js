/* To get any element that uses the class "accordion" */
var acc = document.getElementsByClassName("accordion");
/* assign a variable to use in the for loop */
var i;
/* loop through all elements with the "accordion" close. Remember this from Java/Python! */
for (i = 0; i < acc.length; i++) {
  /* This runs the function when the accordion is clicked */
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    /* this... i don't understand...*/
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
