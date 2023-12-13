$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().fadeIn();
    });

    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().fadeOut();
    });
});


$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft : -currentIndex*100+"%"}, 600);

        if(currentIndex==3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft : 0}, 0);

                currentIndex = 0;
            }, 600);
        }
    }, 3000);
});