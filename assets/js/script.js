// Get the modal
var modal = document.getElementById("welcomeModal");

// Get the <span> element that closes the modal
var span = document.getElementById("welcomeClose");
console.log(span);


// When the user clicks on <span> (x), close the modal
span.onclick =  function() {
  modal.style.display = "none";
  localStorage.setItem("isFirstTime",false);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    localStorage.setItem("isFirstTime",false);
  }
}

//Check key for modal request
function keyCheck() {
    if (localStorage.getItem("isFirstTime")=== null){modal.style.display="block"}
}

keyCheck();