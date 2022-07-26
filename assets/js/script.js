// globally scoped variables go here
// Get the modal
var modal = document.getElementById("welcomeModal");
var celebList = document.getElementById("CelebrityNames");
var movieList =  document.getElementById("lower-card")
// var imdbKey = "k_7e0pfp3k"
// var imdbKey = "k_zva2d8cp"
var imdbKey="57df2f59f73d6513b02f8a10cd393e77"
// Get the <span> element that closes the modal
var span = document.getElementById("welcomeClose");
// console.log(span);


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

// function pulls from the on this day api
function getOnThisDay() {
  const APIkey = "5545ff51d38bd9595e5804234560ff279eb49fe5";

  // let apiRequest = 'https://today.zenquotes.io/api/10/7/5545ff51d38bd9595e5804234560ff279eb49fe5'
  let apiRequest= "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/12/15"
  fetch(apiRequest, 
    // {
    //   headers:{
    //       'Authorization':'5545ff51d38bd9595e5804234560ff279eb49fe5'
    //   },}
      )
    .then(function (response) {
      console.log(response);      
      return response.json();
    })
    .then(function (data) {
      let textArray=extractText(data);
      // console.log(textArray)
      let thespArray = textArray.filter(isThespian)
      // console.log( thespArray)
      let nameArray = thespArray.map(extractName)
      // console.log(nameArray)
      // var celebname= selected.births[0].
      renderCelebrityNames(nameArray[0])
      getMovieTitles(api=imdbKey,celeb=nameArray[0]);
    });
  }

function getMovieTitles(api,celeb) {
  // let movie="La La Land"
    let requestURL= `https://api.themoviedb.org/3/search/person?api_key=${api}&query=${celeb}`

    // console.log(requestURL)
    data = fetch(requestURL) 
        .then(function (response) {
            if (!response.ok) {
                // console.log(response)
                return 
            }
            // console.log(response)
            return response.json()
        })
        .then(function(data) {
          console.log(data)
          renderMovieNames(data.results[0].known_for[0].title, data.results[0].known_for[0].poster_path)
          // movie = extractTitle(data)
          // console.log(movie)
        })
      // console.log(data)
}

// function that extracts movie title from celebrity api call
// function extractTitle(data) {
//   // let title = data.results[0].description
//   let title = "(III) (Actress, La La Land (2016))"
//   trueTitle = title.match(/,\s(.*)\s\([0-9]*\)/i)
//   // console.log(title)
//   // console.log(trueTitle[1])
// }
// function pulls from the imdb api

  function extractText(data) {
    let allText = Array()
    allText.length = data.births.length
    for ( let i = 0; i <  data.births.length; i++) {
      allText[i]=data.births[i].text
    }
    // console.log(allText)
    return allText

  }

  // filter
  function isThespian(value) {
    thesp = value.includes("actor") | value.includes("actress")
    return thesp
  }


function extractName(apiText){
  let celebName=apiText.substr(0, apiText.indexOf(',')); 
  return celebName
}


function renderCelebrityNames(data) {
  let celebrity = document.createElement("p");
  celebrity.textContent = data
  celebList.appendChild(celebrity);
  // console.log(data);
}

function renderMovieNames(data, data2) {
  let movieName = document.createElement('p');
  movieName.textContent = data
  movieList.appendChild(movieName);
  let posterImg = document.createElement('img');
  posterImg.setAttribute("src", "https://image.tmdb.org/t/p/original/" + (data2));
  movieList.appendChild(posterImg);
  
  console.log(movieName);
}




// Creating function to grab user input
var formSubmitHandler = function(event) {
  event.preventDefault();
var birthdayDates = document.querySelector("#datepicker");
    console.log (birthdayDates.value)









}

$( function() {
  $( "#datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true
  });
} );







// actually calling functions goes here + event listeners

getOnThisDay();
var userForm = document.querySelector("#user-form");

userForm.addEventListener("submit", formSubmitHandler);

