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

$("button").on("click", function(){
  var artist = $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=78pvxPWLFFAkOvLV0puu7DNzTHrsYiNm&q=" + artist + "&limit=10"


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
for (var j = 0; j < topics.length; j++) {
  // Obtain a reference to the tbody element in the DOM
  var gifDiv = $("#gif-holder");
  var artistDiv = $("<div>")
  artistDiv.append("<img src" + response.data[j].images.fixed_height.url + ">")
  artistDiv.append("<p> Rating: " + response.data[j].rating + "</p>");
  gifDiv.prepend(artistDiv);

}

});

});



});

