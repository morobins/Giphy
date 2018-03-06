// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

$(".gif").on("click", function() {
  // STEP ONE: study the html above.
  // Look at all the data attributes.
  // Run the file in the browser. Look at the images.

  // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

  // STEP TWO: make a variable named state and then store the image's data-state into it.
  
  // Use the .attr() method for this.

  // ============== FILL IN CODE HERE FOR STEP TWO =========================

 var state = $(this).attr('data-state');

  // =============================================

  // STEP THREE: Check if the variable state is equal to 'still',
  // then update the src attribute of this image to it's data-animate value,
  // and update the data-state attribute to 'animate'.

  // If state is equal to 'animate', then update the src attribute of this
  // image to it's data-still value and update the data-state attribute to 'still'
  // ============== FILL IN CODE HERE FOR STEP THREE =========================

  if (state === 'still') {
    $(this).attr("src", $(this).attr('data-animate'));
    $(this).attr("data-state", "animate");
  } 
  
  if (state === 'animate') {
    $(this).attr("src", $(this).attr('data-still'));
    $(this).attr("data-state", "still");
  }

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