$(function() {
   $('textarea').on("keyup", function (event){
        var maxWordLimit = 140;
        var length = this.value.length;
        var counter = $(this).siblings('span.counter');
        counter.text(maxWordLimit - length);
        if (length > maxWordLimit){
        counter.addClass('red')
       } else {
        counter.removeClass('red')
       }
   })
  });

  
