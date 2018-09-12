/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from tweets.json
$(function(){
  function renderTweets(tweets) {
    for (let object of tweets){
      $(".tweetContainer").append(createTweetElement(object));
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
    
    let formData = $('form#newTweet').serialize();

    $.ajax('/tweets/',{
      method: 'POST',
      data: formData
    }).then(function () {
      $('.tweetContainer').empty();
      $('textarea').val('');
      return $.ajax('/tweets/');
    }).then(renderTweets);
  });

let loadTweets = function (){ 
      $.ajax('/tweets/', { method: 'GET' })
      .then(function (tweetlog) {
        renderTweets(tweetlog);
    });
  };
  loadTweets();
});


