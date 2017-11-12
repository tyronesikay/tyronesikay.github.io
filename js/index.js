$(document).ready(function () {
/* +++++++++++++++++++++++++++++++++++++++++++++++++++
    HOME
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

    $('.navbar').hide();
  

//******************* Add Class then, Remove Class after animate ends **********************
    var animationEnd ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('.headshot').addClass('animated bounceInUp').one(animationEnd, function(){
        $(this).removeClass('animated bounceInUp');
    });

//*****************On Click re-animate shake (repeatable)*******************************************
    $('.headshot').on('click', function(){
      $('.headshot').addClass('animated shake').one(animationEnd, function(){
          $(this).removeClass('animated shake')
      });
    });


//*****************Time delay for animation in main button*******************************************
    setTimeout(function () {
        $('.about').css('opacity', '0');
        $('.about').addClass('animated fadeInRightBig');
    }, 100);
    setTimeout(function () {
        $('.skills').addClass('animated fadeInRightBig');
    }, 200);
    setTimeout(function () {
        $('.portfolio').addClass('animated fadeInRightBig');
    }, 300);
    setTimeout(function () {
        $('.contact').addClass('animated fadeInRightBig');
    }, 400);
    setTimeout(function () {
        $('.tyrone').css('opacity', '0');
        $('.tyrone').addClass('animated fadeInRight');
    }, 800);


//*****************click function for buttons*******************************************
    $('.about, #navAbout').on('click', function () {
        $('#home1').fadeOut('fast', function () {
            $('.navbar').fadeIn('fast');
        });
        $("#main").load("about.html");
        setTimeout(function () {
            $('.about').addClass('animated rubberBand');
        }, 100);
    });

    $('.skills, #navSkills').on('click', function () {
      //  Same outcome as hide(), and show() below  ***********
        $('#home1').fadeOut('fast', function () {
            $('.navbar').fadeIn('fast');
        });
      //--------------------------------------------------------
        $("#main").load("skills.html");
        setTimeout(function () {
        $('.skills').addClass('animated rubberBand');
        }, 100);
    });

    $('.portfolio, #navPortfolio').on('click', function () {
      //  Same outcome as fadeOut(), and fadeIn() above *******
        $('#home1').hide();
        $(".navbar").show();
      //--------------------------------------------------------
        $("#main").load("portfolio.html");
        setTimeout(function () {
            $('.portfolio').addClass('animated rubberBand');
      }, 100);
    });

//==================================================================================================

/**************For future use:  Animate to replace background image or color*******************************/
    $('.skills3').on('click', function () {
        $("body").animate({
            backgroundColor: "#DE6449",
        }, 500);

        $('.background1').fadeOut('fast', function () {
            $('.background2').fadeIn('fast');
        });
    });
});
