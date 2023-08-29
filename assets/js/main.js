(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2023/10/20',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> <b>:</b> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> <b>:</b> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> <b>:</b> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    }); 

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 10,
     time: 1500
    });

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

    });   

    var url = [//'/assets/img/background/1.jpg',
                // '/assets/img/background/2.jpg',
                '/assets/img/background/3.jpg',
                '/assets/img/background/4.jpg',
                '/assets/img/background/5.jpg',
                '/assets/img/background/6.jpg',
                '/assets/img/background/7.jpg',
                '/assets/img/background/8.jpg',
                '/assets/img/background/9.jpg',
                '/assets/img/background/1.jpg',
               ];

    // var url = ['https://upload.wikimedia.org/wikipedia/commons/4/4c/WikiWomenCamp_2017_-_D%C3%ADa_1_-_21.jpg' ,
    //            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WikiWomenCamp-Session.JPG/1200px-WikiWomenCamp-Session.JPG?20120604173913',
    //            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Group_Photo_WikiWomenCamp_2017.jpg/1200px-Group_Photo_WikiWomenCamp_2017.jpg?20170708201628',
    //            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/WikiWomen%27s_Lunch_Wikimania_2017.jpg/1200px-WikiWomen%27s_Lunch_Wikimania_2017.jpg?20170812175129',
    //            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Wikiwomen%27s_Lunch_Wikimania_2016_12.jpg/1200px-Wikiwomen%27s_Lunch_Wikimania_2016_12.jpg?20160626131410',
    //            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/WikiWomen%27s_Lunch%2C_Wikimania_2012.jpg/1200px-WikiWomen%27s_Lunch%2C_Wikimania_2012.jpg?20130402182122',
    //            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/WikiWomen%27s_Lunch%2C_Wikimania_2014.jpg/1200px-WikiWomen%27s_Lunch%2C_Wikimania_2014.jpg?20140918164810',
    //            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Women_lunch_of_WCI_2023_at_Hyderabad_India_01.jpg/1200px-Women_lunch_of_WCI_2023_at_Hyderabad_India_01.jpg?20230613122852'
    //            ];
    var curentImageIndex = 0;
    setInterval(function(){ 
      console.log(url[curentImageIndex])
     var p = $('.hero-area-bg');
     p.css("background"," url("+url[curentImageIndex++] + ") no-repeat");
     p.css('background-size', 'cover');
     if(curentImageIndex>= url.length){curentImageIndex = 0}
     }, 3000);   

}(jQuery));