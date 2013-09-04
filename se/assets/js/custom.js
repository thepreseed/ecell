$(document).ready(function(){

    $(' #show-event-form-on-click ').on('click', function(e){
        $(' .event-form ').removeClass('hidden-onload');
        $(' .ask-for-explara ').addClass('hidden-onload');

        $('html, body').animate({
            scrollTop: $(' .event-form ').offset().top - 180
        }, 500);
        e.preventDefault();
    });

    $(' .event-form .the-form ').submit(function(){
        $(' .event-form ').addClass('hidden-onload');
        $(' .ask-for-explara ').removeClass('hidden-onload');

        setTimeout(function(){
            window.location = 'http://se.explara.com/';
        }, 2000);
    });
});