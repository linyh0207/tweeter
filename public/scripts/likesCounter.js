// $(document).ready(function() {
//   let postId = $('.twitterIcons').attr('postid');
//   $('body').on('click',$('[postid=postId]'), function(){
//     console.log($('[postid=postId]'));
//       let likeStatus = $('[postid=postId]').attr('likestatus');
//       if (likeStatus === "unlike"){
//         $('[postid=postId]').text('unlike');
//         togglePost('liked');
//       } else {
//         $('[postid=postId]').text('like');
//         togglePost('unlike');
//       }
//       function togglePost(likeStatus){
//         $.ajax('/tweets/like',{
//             method: 'POST',
//             data: {likeStatus: likeStatus},
//             success: function(data){ 
//             },
//             error: function(e){
//             }
//         });
//       }
//   });
// });