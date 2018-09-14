$(function() {
$('.compose').click(function(){
    if($('.new-tweet').is(':hidden')){
        $('.new-tweet').slideDown('fast');
        $('textarea').focus();
    } else{
        $('.new-tweet').hide();
        }
    })
});  
 