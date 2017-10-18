$(window).load(function () {
   
    $('.button').click(function(){
       if($(this).is('.on')){
           $('.button').removeClass('on');
           $(this).parent().parent().find('span').removeClass('orange');
            $(this).parent().parent().find('img').removeClass('hover');   
           $('.popup_text').hide();
       }
       else {
           $('.button').removeClass('on');
           $(this).parent().parent().find('span').removeClass('orange');
           $(this).parent().parent().find('img').removeClass('hover');
           $('.popup_text').hide(); 
           $(this).addClass('on');
           $(this).parent().find('.popup_text').show();
           $(this).parent().find('span').toggleClass('orange');
           $(this).parent().find('img').toggleClass('hover');
       }
    });  
    $('.popup_text').click(function(){
        $(this).hide();
        $(this).parent().find('span').removeClass('orange');
        $(this).parent().find('img').removeClass('hover');
        $(this).parent().find('.button').removeClass('on');
    });  
    
    $('.why_button').hover(function(){

           $(this).next('.popup_text').toggle();

    }); 

     $('.about7 .text100 p').hide();
     $('.about7 .text100 h3').click(function(){
        $(this).parent().find('p').hide('fast');
        $(this).next('p:hidden').show('fast');
        
        //$('h3').removeClass('on');
        //$(this).next('p:hidden').prev('h3').addClass('on');
        $(this).toggleClass('on');
        $('h3').not(this).removeClass('on');

    });

  /*  $('.button.long').text( 'Первая помощь при ' + $('.button').data('text') );
    if ( $("div").is(".button.on") ) num = $('.button.on').attr('class').split(' ')[1];
    
         
    
    $('.button:not(.long)').click(function(){
       $('.button').removeClass('on');
       $(this).addClass('on');
       num = $(this).attr('class').split(' ')[1];
       $('.text').hide();
       $('.text.'+num).css('display','inline-block');
       $('.button.long').text( 'Первая помощь при ' + $(this).data('text') );
       $('.popup_text').hide();
       $('.img img').attr('src', 'img/'+$('.img img').data('url')+'_on.png');
    });  
    
    $('.button.long, .popup_text').click(function(){

      $('.popup_text.'+num).toggle();
      if ( $('.popup_text.'+num).is(":visible")  )  {
          var url = 'img/'+$('.button.'+num).data('url')+'.png';
          $('.img img').attr('src', url);
      }
      else $('.img img').attr('src', 'img/'+$('.img img').data('url')+'_on.png');    
    });       */
   
    /* $(window).click(function(){
    console.log( $('.popup_text.'+num).is(":visible")  ); 
    if ( $('.popup_text.'+num).is(":visible")  ) $('.popup_text.'+num).hide();

    });        */
   
   
   /* $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('.nomain').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
    });     */
    

});

