$(document).ready(function() {
    var headerHeight = $('header').height(); 
    $('main').css('padding-top', headerHeight+'px');

    jQuery('#owl_banner_slider').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:false,
        mouseDrag:false,
        autoplay:true,
        animateOut: 'slideOutUp',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});