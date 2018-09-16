$(document).ready(function() {
  $('body').on('click','footer .twitterIcons', function(){
      let likeStatus = $('.twitterIcons').attr('likestatus');
      if (likeStatus === "unlike"){
        $('.twitterIcons').text('unlike');
        togglePost('liked');
      } else {
        $('.twitterIcons').text('like');
        togglePost('unlike');
      }

      function togglePost(likeStatus){
        $.ajax('/tweets/like',{
            method: 'POST',
            data: {likeStatus: likeStatus},
            success: function(data){ 
            },
            error: function(e){
            }
        });
      }
    });
});