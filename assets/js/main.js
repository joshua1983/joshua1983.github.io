$(document).ready(function(){
    let efectoItemMenu = 'bounceIn';
    $("div.menu li").on('mouseover',function(){     
        $(this).find("div").addClass(efectoItemMenu);
    });
    $("div.menu li").on('mouseout',function(){             
        $(this).find("div").removeClass(efectoItemMenu);
    });

    /*
    especificar los altos de cada pagina para las opciones del menu
    segun el alto de la pantalla visible
    */
})