$(document).ready(function () {

//my giphy api key: 78pvxPWLFFAkOvLV0puu7DNzTHrsYiNm

//Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
var topics = ["Bruno Mars", "Beyonce", "Alicia Keys", "Cardi B", "Drake", "Michael Jackson", "Mariah Carey"];
console.log(topics);


// Your app should take the topics in this array and create buttons in your HTML.

function renderButtons() {

  // Deleting the artists prior to adding new artists
  $("#button-holder").empty();

  // Looping through the array of movies
  for (var i = 0; i < topics.length; i++) {

    // Then dynamicaly generating buttons for each artist in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class
    a.addClass("artist");
    // Added a data-attribute
    a.attr("data-name", topics[i]);
    // Provided the initial button text
    a.text(topics[i]);
    // Added the button to the HTML
    $("#button-holder").append(a);
  };

};

  renderButtons();



// Try using a loop that appends a button for each string in the array.
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=78pvxPWLFFAkOvLV0puu7DNzTHrsYiNm&q=" + artist + "&limit=10&rating="
var artist = $(this).attr("data-name");

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  // Obtain a reference to the tbody element in the DOM
  // var tBody = $('tbody');
  
  // // $("tr").html("<td>").append('Mr.Nobody')
  // // Create and save a reference to new empty table row
  // var tr = $('<tr>');

  // // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
  // var titleTd = $("<td>").text(response.Title);
  // var yearTd = $("<td>").text(response.Year);
  // var actorsTd = $("<td>").text(response.Actors);  
  // // Append the td elements to the new table row
  // tr.append(titleTd, yearTd, actorsTd);
  // // Append the table row to the tbody element
  // tBody.append(tr);

});

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. 
$("#add-artist").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var artist = $("#artist-input").val().trim();

  // The movie from the textbox is then added to our array
  topics.push(artist);

});
// Then make a function call that takes each topic in the array remakes the buttons on the page.

});

