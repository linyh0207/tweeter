/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function(){
  function renderTweets(tweets) {
    for (let object of tweets){
      $(".tweetContainer").prepend(createTweetElement(object));
    }
  };
    
  function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('tweet');
    let $user = $('<header>').addClass('user');
    let $avatars = $('<img>').addClass('avatars').attr("src", tweet.user.avatars.small);
    let $name = $('<h2>').addClass('name').text(tweet.user.name);
    let $handle = $('<p>').addClass('handle').text(tweet.user.handle);
    let $content = $('<p>').addClass('content');
    let $text = $('<p>').addClass('text').text(tweet.content.text);
    let $created_at = $('<p>').addClass('created_at').text(tweet.created_at);
    let $footer = $('<footer>');
    let $twitterIcons = $('<div>').addClass('twitterIcons').append(`<span style="display:bliock;"><img class="icons" src="/images/twitterIcons.png"></span>`)
   
    $tweet.append($user, $content, $footer);
    $user.append($avatars, $name, $handle);
    $content.append($text);
    $footer.append($created_at, $twitterIcons);
    
    return $tweet;
    };
  
  var $button = $('form#newTweet');
  $button.on('submit', function (e) {
    e.preventDefault();

    let inputLength = $('textarea').val().length
    let formData = $('form#newTweet').serialize();
    if (!inputLength){
      $('.errorMsg').text('field is required.');
    } else if (inputLength > 140 ){
      $('.errorMsg').text('Maximum characeters exceeded');
      } else {
        $.ajax('/tweets/',{
          method: 'POST',
          data: formData
        }).then(function () {
          $('.tweetContainer').empty();
          $('textarea').val('');
          $('.counter').text('140');
          $('.errorMsg').empty();
          return $.ajax('/tweets/');
        }).then(renderTweets);
  }
});

function loadTweets (){ 
      $.ajax('/tweets/', { 
        method: 'GET', 
        success: function(data){
        renderTweets(data);
        }
      })
    } 
  loadTweets();
}); 


