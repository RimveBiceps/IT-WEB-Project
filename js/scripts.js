$(document).ready(function() {
    // Message pops over then goes over IT Sprendimai logo -->
    $('[data-toggle = "tooltip"]').tooltip();
    // JQuery code for carousel cycle interval
    $('#my_carousel').carousel({ interval: 3000 });
    // JQuery code for carousel play/pause button.
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#my_carousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');

        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#my_carousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    })
    //JQUERY for opening login modal trough Prisijungimas link
    $('#loginLink').click(function() {
        $('#loginModal').modal('show');
    });
    //JQUERY for opening New order modal trough Naujas uzsakymas button
    $('#newOrder').click(function() {
        $('#new_order_modal').modal('show');
    })
});