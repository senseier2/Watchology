// globally scoped variables go here
// Get the modal
var modal = document.getElementById("welcomeModal");
var celebList = document.getElementById("CelebrityNames");
var movieList =  document.getElementById("lower-card")
var celebLimit=5
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
function getOnThisDay(datearray) {
  const APIkey = "5545ff51d38bd9595e5804234560ff279eb49fe5";

  // let apiRequest = 'https://today.zenquotes.io/api/10/7/5545ff51d38bd9595e5804234560ff279eb49fe5'
  let apiRequest= `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${datearray[0]}/${datearray[1]}`
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
      clearDiv(celebList)
      clearDiv(movieList)
      for (i=0; i < celebLimit; i ++) {
        renderCelebrityNames(nameArray[i])
        getMovieTitles(api=imdbKey,celeb=nameArray[i]);
      }
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
          renderMovieNames(data.results[0].known_for[0].title, 
            data.results[0].known_for[0].poster_path, 
            data.results[0].known_for[0].release_date,
            data.results[0].known_for[0].vote_average,
            data.results[0].known_for[0].overview,
            data.results[0].known_for[0].name)
          appendCelebImage(celeb,data)
          // movie = extractTitle(data)
          // console.log(movie)
        })
      // console.log(data)
}
function appendCelebImage(celeb,data) {
  // find the corresponding celebrity sub card
  // find the image from their profile if one exists
  // otherwise finds the placeholder
  // appends the image to the celebrity subcard
  console.log(celeb.replace(/\s/g, ''))
  let subCard=document.querySelector("#" + celeb.replace(/\s/g, ''))
  console.log(subCard)
  let img = document.createElement("img")
  img.setAttribute("src",`https://image.tmdb.org/t/p/original${data.results[0].profile_path}`)
  img.setAttribute("style","width: 50%;")
  subCard.appendChild(img)
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
  let div = document.createElement("div")
  let celebrity = document.createElement("p");
  celebrity.textContent = data
  div.setAttribute("id",data.replace(/\s/g, ''))
  div.appendChild(celebrity)
  celebList.appendChild(div);
  // console.log(data);
}

function renderMovieNames(data, data2, data3, data4, data5, data6) {
  let movieName = document.createElement('h3');
  movieName.textContent = data

  let movieRelease = document.createElement('p');
  movieRelease.textContent = data3;
 
  let posterImg = document.createElement('img');

  posterImg.setAttribute("src", "https://image.tmdb.org/t/p/original/" + (data2));
  posterImg.setAttribute("style", "width:50%;");

  let userRating = document.createElement('p');
  userRating.textContent = data4;

  let overviewData = document.createElement('p');
  overviewData.textContent = data5;

  let infoDiv = document.createElement('div');
  //infoDiv.setAttribute("style", "display:inline;")

  let titleDiv = document.createElement('div');
  console.log(data5)
  
  let tvTitle = document.createElement('h3');
  tvTitle.textContent = data6;

  let movieDiv = document.createElement('div');
  movieDiv.setAttribute("style", "display:flex");
  //console.log(data5)
  movieList.appendChild(movieDiv)
  movieDiv.appendChild(titleDiv);
  movieDiv.appendChild(infoDiv);
  titleDiv.appendChild(posterImg);
  infoDiv.appendChild(tvTitle);
  infoDiv.appendChild(movieName);
  infoDiv.appendChild(movieRelease);
  infoDiv.appendChild(overviewData);
  infoDiv.appendChild(userRating);
     console.log(movieName);
}




// Creating function to grab user input
var formSubmitHandler = function(event) {
  event.preventDefault();
var birthdayDates = document.querySelector("#datepicker");
    console.log (birthdayDates.value.split ("/",2))

    getOnThisDay(birthdayDates.value.split ("/",2));







}

$( function() {
  $( "#datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true
  });
} );


var clearDiv= function(div) {
  div.innerHTML = ""
  return
}




// actually calling functions goes here + event listeners


var userForm = document.querySelector("#user-form");

userForm.addEventListener("submit", formSubmitHandler);

