$(function() {
$('.compose').click(function(){
    if($('.new-tweet').is(':hidden')){
        $('.new-tweet').slideDown('slow');
        $('textarea').focus();
    } else{
        $('.new-tweet').hide();
    }
    })
});  
 