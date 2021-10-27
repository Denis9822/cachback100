$('.profile_head_mobile_menu').click(() => {
    $('.profile_head_mobile_cat').toggle();
})

$('.center_block_copy').click(() => {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.center_block_copy span').text()).select();
    document.execCommand("copy");
    $temp.remove();

    $('.center_block_copy span').text('ссылка скопирована');
})

$('.modal_close').click(function() {
    $(this).parent().parent().hide();
})

$(document).ready(function() {
    $('.center_block_slider_pc').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<div class="slider_btn slider_prev"><img src="./img/icons/arrow-prev.svg" alt=""></div>',
        nextArrow: '<div class="slider_btn slider_next"><img src="./img/icons/arrow-next.svg" alt=""></div>',
    });
    $('.center_block_slider_mob').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        prevArrow: '<div class="slider_btn slider_prev"><img src="./img/icons/arrow-prev.svg" alt=""></div>',
        nextArrow: '<div class="slider_btn slider_next"><img src="./img/icons/arrow-next.svg" alt=""></div>',
    });

});