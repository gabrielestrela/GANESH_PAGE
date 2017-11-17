$(document).ready(function(){
    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
            $('nav').addClass('shrinkNav');
            $('nav').attr("style", "background-color: rgba(0,0,0,1); border-bottom: 1px solid rgba(255,255,255,0.7)");
//            $('nav').css('border-bottom', '1px solid white');
        }else{
            $('nav').removeClass('shrinkNav');
            $('nav').attr("style", "background-color: rgba(0,0,0,0);");
//            $('nav').css('border-bottom', '0 solid white');
        }
    });
});