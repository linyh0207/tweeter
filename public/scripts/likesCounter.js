$(document).ready(function() {
  $('body').on('click','footer .twitterIcons', function(){
      let likeStatus = $('.twitterIcons').attr('likestatus');
      if (likeStatus === "unlike"){
          console.log("like");
        $('.twitterIcons').text('like');
        togglePost('unlike');
      } else {
        $('.twitterIcons').text('unlike');
        togglePost('like');
      }

      function togglePost(likeStatus){
        $.ajax('/tweets/like',{
            method: 'POST',
            data: likeStatus,
            success: function(data){
                alert("success");
                console.log(data);
            },
            error: function(e){
                alert("error");
            }
        });
      }
    });
});