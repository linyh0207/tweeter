$(document).ready(function() {
    // If someone click the button, send POST request using Ajax 
        // to either add a record  / update a record
    






    // Using Ajax to GET the current count from the MongoDB 
    // The data receive is a string, need to parseInt() for count
    // Update the likescounter display numbers 


    let count = 0;
    $("body").on("click", 'footer .twitterIcons', function(e) {
        count ++;
        $('.likesCounter').text(count);
      });
});