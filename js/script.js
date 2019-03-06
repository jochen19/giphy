// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
//var custom_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
function random(max){
    return Math.floor(Math.random(max)*Math.floor(max));
}

$("#all-button").click(function(){
    var searchTerm = $("#search-term").val();
    var custom_url = `https://api.giphy.com/v1/gifs/search?q= ${searchTerm} &rating=pg&api_key=dc6zaTOxFJmzC`;
    $.ajax({
       url:custom_url,
       mehtod: "GET",
       success: function(response){
           $(response.data).forEach(function()){
               
           }
           $(".results").forEach.append(`<img src = ${response.data[""].images.original.url} />`);
       }
    });
});

$("#ran-button").click(function(){
    var searchTerm = $("#search-term").val();
    var custom_url = `https://api.giphy.com/v1/gifs/search?q= ${searchTerm} &rating=pg&api_key=dc6zaTOxFJmzC`;
    $.ajax({
        url: custom_url,
        method: "GET",
        success: function(response){
            var num = response.data.length
            $(".results").append(`<img src = ${response.data[random(num)].images.original.url} />`);
        }
    });
});

