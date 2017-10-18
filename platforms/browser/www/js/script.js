$(window).load(function () {

    /**** get TODAY ****/
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var today = day + '.' + month + '.' + d.getFullYear();
    
    /**** Animation ****/
    $('.eye').css('top','0px');
    $('.eye_blood').css('top','125px');
    
    setTimeout(function () {
        $('.logo_blood').css('top','60px');
        $('.eye_blood').css('top','163px');
    }, 2000);


    /**** About - Manifest ****/
    $('.about_button').click(function(){                      
        $('.about_button, .logo, .logo_blood').toggleClass('open');
        $('.about_button_text, .bg').fadeToggle(500);

    });
    /**** Phrases ****/
    $('.select_button').click(function(){
        $('.select_button, .logo, .logo_blood').toggleClass('open');
        $('.phrases, .bg').fadeToggle(500);
    });
    //$('.phrases > div.text').click(function(){
    $('.phrases').on('click','.text', function(){
        $('.grave h1').css( 'font-size', '30px' );
        $('.grave h1').html( $( this ).html() );
        $('.grave h2').hide();
        $('.grave .date').html( today );
        $('.bg').click();
    });

    /**** Close Manifest & Phrases ****/
    $('.bg').click(function(){
        $('.about_button, .select_button, .logo, .logo_blood, .grave_slick').removeClass('open');
        $('.about_button_text, .phrases, .share, .bg, .next, .prev').fadeOut(500);
        $('.grave').css('opacity', 1);

    });

    /**** Home - refresh ****/
    $('.home').click(function(){
        location.reload();

    });
    
    /**** Steps ****/
    $('.agency_button').click(function(){
        $('.phrases').html( $('.phrases_agency').html() );
        $('.welcome').fadeOut(500).parent().find('.phrase').delay(500).fadeIn(500);
        $('.home').show(500);
        agency = 1;
    });
    $('.advertiser_button').click(function(){
        $('.phrases').html( $('.phrases_advertiser').html() );
        $('.welcome').fadeOut(500).parent().find('.phrase').delay(500).fadeIn(500);
        $('.home').show(500);
        agency = 0;
    });
    
    /**** Phrase - Input ****/
    $('input').click(function(){
        if ( $( this ).val() == 'Написать фразу' ) $( this ).val('');
    }); 
    $('input').change(function(){
    //$('.input_button_approve').click(function(){
        if ( $( this ).val() == '' ) {
          $( this ).val('Написать фразу');
          $('.grave h1').css( 'font-size', '44px' );
          $('.grave h1').html( 'Digital кладбище' );
        }
        else { 
          $('.grave h1').css( 'font-size', '30px' );
          $('.grave h1').html( $( this ).val() );
          $('.grave h2').hide();
          $('.grave .date').html( today );
          /*grave_h1_height = $('.grave h1').height();
          $(".grave h1").css("font-size", '44px');
          $(".grave h1").css("line-height", '33px');
          while (grave_h1_height > 210) {
            var fontsize = parseInt($(".grave h1").css("font-size"));
            var lineheight = parseInt($(".grave h1").css("line-height"));
            $(".grave h1").css("font-size", fontsize-2+'px');
            $(".grave h1").css("line-height", lineheight-1+'px');
            grave_h1_height = $('.grave h1').height();
          }*/
        }
    });


    /**** Lettering & Ajax - Img Generator ****/
    $('.submit_button').click(function(){
        arr = [];
        $(".grave h1").lettering();
        $('.grave h1 span').each(function(i,elem) {
            symbol = $(elem).text();
            coord_x = $(elem).position().left;
            coord_y = $(elem).position().top;
            arr.push([symbol, coord_x, coord_y]);
        });
        date_arr = [$('.grave .date').text(), $('.grave .date').position().left, $('.grave .date').position().top];
        var jsonString = JSON.stringify(arr);
        var phrase = $('.grave h1').attr('aria-label');
        var date = $('.grave .date').text();
        $.ajax({
            url: 'generator.php',
            type: 'POST',
            data: {'data[]' : arr, 'date_arr[]' : date_arr, 'text':phrase, 'date':date, 'agency':agency },
            cache: false,
            success:function(data){
                // display the croped photo
                $('.share .img').html('<img src="generated/'+data+'">');
                $('.share').fadeIn(500);
                $('.bg').fadeToggle(500);
                //alert('!!!');
                //$('.wrapper').html(data);
//            $('#result_a').attr("href", "img/"+response);
                img = data;
                $('meta[property=og\\:image]').attr('content', 'http://halloween.room485.com/generated/'+data);
            }
        });
    });
                                         
    /**** Gif - Animation ****/
    eq = 0;
    /*setInterval(function () {
        url = $('.gif').eq(eq).find('img').data('src');
        $('.gif').eq(eq).find('img').attr('src',url);
        eq++;
        if (eq == $('.gif').length) eq=0;
    }, 2000);  */
    var myInterval;
    var is_interval_running = false; //Optional
    if  (!is_interval_running) {//Optional
            myInterval = setInterval(function () {
                is_interval_running = true; //Optional
                url = $('.gif').eq(eq).find('img').data('src');
                $('.gif').eq(eq).find('img').attr('src',url);
                eq++;
                if (eq == $('.gif').length) eq=0;
            }, 4000);  }
    $(window).focus(function () {
     console.log('focus');
        clearInterval(myInterval); // Clearing interval if for some reason it has not been cleared yet
        if  (!is_interval_running) {//Optional
            myInterval = setInterval(function () {
                is_interval_running = true; //Optional
                url = $('.gif').eq(eq).find('img').data('src');
                $('.gif').eq(eq).find('img').attr('src',url);
                eq++;
                if (eq == $('.gif').length) eq=0;
            }, 4000); }
    }).blur(function () {
        clearInterval(myInterval); // Clearing interval on window blur
        is_interval_running = false; //Optional
    });
    
    /*$(".gif").each(function (i) {
        url = $('.gif').eq(i).find('img').data('src');
        $('.gif').eq(i).find('img').attr('src',url);
        //$('.gif').eq(i).find('img').css('border','2px solid yellow');
      }); */ 


    /**** Parallax ****/
    $('.parallax').css('transition','1s');

    $('body').mousemove(function(e) {
            // Получить событие
            //alert('11');
            var e = e ? e : window.event;

            var doc = document.documentElement;
            var body = document.body;

            // Получить текущие координаты мыши
            if ("\v" == "v") {
                var mouse_x = e.clientX;
                if (doc.clientLeft) {
                    mouse_x -= doc.clientLeft;
                }
                if (doc && doc.scrollLeft) {
                    mouse_x += doc.scrollLeft;
                }
                if (body && body.scrollLeft) {
                    mouse_x += body.scrollLeft;
                }
                var mouse_y = e.clientY;
                if (doc.clientTop) {
                    mouse_y -= doc.clientTop;
                }
                if (doc && doc.scrollTop) {
                    mouse_y += doc.scrollTop;
                }
                if (body && body.scrollTop) {
                    mouse_y += body.scrollTop;
                }
            }
            else {
                var mouse_x = e.pageX;
                var mouse_y = e.pageY;
            }
            //console.log(mouse_x, mouse_y);
            var speed1 = 50 - Math.round((50 - (mouse_x * 100 / body.clientWidth)) / 20);
            var speed2 = 50 - Math.round((50 - (mouse_x * 100 / body.clientWidth)) / 35);
            var speed3 = 50 - Math.round((50 - (mouse_x * 100 / body.clientWidth)) / 50);
            var speed4 = 50 - Math.round((50 - (mouse_x * 100 / body.clientWidth)) / 60);
            var speed5 = 50 - Math.round((50 - (mouse_x * 100 / body.clientWidth)) / 70);
            var speed6 = 50 - Math.round((50 - (mouse_y * 100 / body.clientHeight)) / 10);

            var elem = document.getElementById('trees');
            if (elem) elem.style.backgroundPosition = speed5 + '% 50%';
            var elem = document.getElementById('fence');
            if (elem) elem.style.backgroundPosition = speed4 + '% 50%';
            var elem = document.getElementById('grave3');
            if (elem) elem.style.backgroundPosition = speed3 + '% 50%';
            var elem = document.getElementById('grave2');
            if (elem) elem.style.backgroundPosition = speed2 + '% 50%';
            var elem = document.getElementById('grave1');
            if (elem) elem.style.backgroundPosition = speed1 + '% 50%';
            var elem = document.getElementById('moon');
            if (elem) elem.style.backgroundPosition = '50% '+ speed6 +'%';

            //var elem = document.getElementById('hp1');
            //if (elem) elem.style.backgroundPosition = tmp1 + '% ' + tmp2 + '%';
      });
      
    /**** SHARE ****/ 
     FB.init({
        appId: 266231730445223, cookie: true, status: true, xfbml: true, oauth: true
    });
    title = 'Halloween485';
    description = 'Boo!';
    $( "body" ).on( "click", ".vk", function() {
        vk();
    });
    $( "body" ).on( "click", ".fb", function() {
        fb();
    });

    /**** Slick Slider ****/
    $('.gallery_button').click(function(){
        $('.next, .prev, .bg').fadeIn(500);
        $('.grave_slick').addClass('open');
        $('.grave').css('opacity', 0);
    });
    $('.next').click(function(){
        $('.grave_slick').slick('slickPrev');
    });
    $('.prev').click(function(){
        $('.grave_slick').slick('slickNext');
    });
    $('.grave_slick').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    easing: 'easeOutElastic'
  }).on("mousewheel", function (event) {
        event.preventDefault();
    if (event.deltaX > 0 || event.deltaY < 0) {
        $('.grave_slick').slick('slickPrev');
    } else if (event.deltaX < 0 || event.deltaY > 0) {
        $('.grave_slick').slick('slickNext');
    }
  });
     
    

});

function fb() {
        FB.ui({
            method: "feed",
            display: "iframe",
            link: "http://halloween.room485.com/",
            picture: "http://halloween.room485.com/generated/"+img
        });
};
        
function vk() {
    window.open(
        'https://vk.com/share.php?image=http://halloween.room485.com/generated/'+img+'&url=http://halloween.room485.com/',
        'sharer','toolbar=0,status=0,width=626,height=436');return false;

};  

