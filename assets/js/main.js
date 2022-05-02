$(document).ready(function() {
    if($(window).width() < 520) {
        console.log('windows smaller');
        $('.nav-link-loju').each(function( index ) {
            $(this).removeClass('px-5').addClass('px-3');
        });
    }
});