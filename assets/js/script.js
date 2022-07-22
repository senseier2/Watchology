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

// Created function for fetch
function getAPI() {
  const APIkey = "5545ff51d38bd9595e5804234560ff279eb49fe5";
  // let apiRequest = 'https://today.zenquotes.io/api/10/7/5545ff51d38bd9595e5804234560ff279eb49fe5'
  let apiRequest= "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/12/15"

  fetch(apiRequest, {
      headers:{
          'Authorization':'5545ff51d38bd9595e5804234560ff279eb49fe5'
      },
      })
    .then(function (response) {
      console.log(response);      
      return response.json();
    })
    .then(function (data) {
      console.log(data.births[0].text.includes('actor'));
      // var celebname= selected.births[0].
      
    });
  }
  getAPI();

  // for ( let i = 0, i <  )

  function extractText(data) {
    // for ( let i = 0; i <  )

   


  }