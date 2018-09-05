$(document).ready(function(){
    let efectoItemMenu = 'bounceIn';
    $("div.menu li").on('mouseover',function(){     
        $(this).find("div").addClass(efectoItemMenu);
    });
    $("div.menu li").on('mouseout',function(){             
        $(this).find("div").removeClass(efectoItemMenu);
    });
});

$("a.scroll-suave")
.click(function(event){
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
    }
});
