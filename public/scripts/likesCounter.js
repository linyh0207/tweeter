$(document).ready(function() {
    let count = 0;
    $("body").on("click", 'footer .twitterIcons', function(e) {
        count ++;
        $('.likesCounter').text(count);
      });
});