$(function(){

  if (window.innerWidth < 768) {
      $(".p0-bg").remove();
      $(".p1bgpr-1").remove();
      $(".p1bgpr-2").remove();
  } else if (window.innerWidth > 768){
      document.write( 
        '<script src="js/lity.js"></script>'
      )
  }


  /*------------------------------------Header------------------------------------*/
  $( "#header-join" ).mouseover(function() {
    $( ".dd-1" ).hide();
    $( ".dd-2" ).fadeIn(400);
  });
  $( "#header-play" ).mouseover(function() {
    $( ".dd-2" ).hide();
    $( ".dd-1" ).fadeIn(400);
  });
  $( "header" ).mouseleave(function() {
    $( ".dd" ).fadeOut(400);
  });
  $("#nav").scrollspy({ offset: 0 });

  $('.toggle-burger').click(function(){
    $( ".m-nav-container" ).addClass('active');
  });
  $('.close-nav').click(function(){
    $( ".m-nav-container" ).removeClass('active');
  });
  $('.m-nav-list li a').click(function(){
    $( ".m-nav-container" ).removeClass('active');
  });
  $(".m-nav-list").scrollspy({ offset: 0 });

});
/*------------------------------------allbg------------------------------------*/
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 550 && y < 1900) {
    $('.p1line-1').fadeIn(200);
    $('.p1line-2').fadeIn(400);
    setTimeout(function(){
      $('.p1bgpr-1').addClass('active');
      $('.p1bgpr-2').addClass('active');
    }, 3200);
  } else {
    $('.p1line-1').fadeOut(200);
    $('.p1line-2').fadeOut(400);
    $('.p1bgpr-1').removeClass('active');
    $('.p1bgpr-2').removeClass('active');
  }
  if (y > 1500 && y < 2850) {
    $('.p2line-1').fadeIn(200);
    setTimeout(function(){
      $('.p2bgpr-1').addClass('active');
    }, 1600);
  } else {
    $('.p2line-1').fadeOut(200);
    $('.p2bgpr-1').removeClass('active');
  }
  if (y > 2500 && y < 3800) {
    $('.p3line-1').fadeIn(200);
    $('.p3line-2').fadeIn(200);
  } else {
    $('.p3line-1').fadeOut(200);
    $('.p3line-2').fadeOut(200);
  }
});

$('.p1bgpr-1').paroller();
$('.p1bgpr-2').paroller();
$('.p2bgpr-1').paroller();
$('.join-container').paroller();

/*------------------------------------P1------------------------------------*/
/*------------------tab------------------*/

$('.chara-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).find('div[data-thumb]').data('thumb');
      return '<div class="chara-btn"><span id="t-'+thumb+'"></span></div>';
  },

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: false,
        fade: false,
        prevArrow: $('#p1-prev'),
        nextArrow: $('#p1-next'),
      }
    }
  ]
});



/*------------------------------------P2------------------------------------*/
/*------------------slide------------------*/
$(function(){
  $('.p2-slide-l-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    /*autoplay: true,*/
    prevArrow: $('#p2-prev'),
    nextArrow: $('#p2-next'),
    asNavFor: '.p2-slide-m',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false,
        }
      }
    ]
  });
  $('.p2-slide-m').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.p2-slide-l-container',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '120px',
  });
});



/*------------------------------------P3------------------------------------*/
/*------------------slide------------------*/
$(function(){
  $('.join-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    /*autoplay: true,*/
    prevArrow: $('#p3-prev'),
    nextArrow: $('#p3-next'),
  });
});
