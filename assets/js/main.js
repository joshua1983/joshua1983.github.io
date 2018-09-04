$(document).ready(function(){
    let efecto = 'bounceIn';
    $("div.menu li").on('mouseover',function(){     
        $(this).find("div").addClass(efecto);
    });
    $("div.menu li").on('mouseout',function(){             
        $(this).find("div").removeClass(efecto);
    });
})