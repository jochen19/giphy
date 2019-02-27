// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
//var custom_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
var custom_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$("#search-button").click(function(){
    $.ajax({
        url: custom_url,
        method: "GET",
        success: function(response){
            $(".row.gallery").replaceWith(`<img src = ${response.data[0].images.original.url} />`);
        }
    });
});

