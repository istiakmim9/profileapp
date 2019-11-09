$(document).ready(function(){
    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow:6,
        slidesToScroll: 1,

    });


    var prev = $(".slick-prev.slick-arrow").addClass('shadow');
    prev.html("<i class='fas fa-chevron-left'></i>");

    var next = $(".slick-next.slick-arrow").addClass('shadow');
    next.html("<i class='fas fa-chevron-right'></i>");



});

