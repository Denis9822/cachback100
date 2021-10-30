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
    $('.center_block_slider_pc_en').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<div class="slider_btn slider_prev"><img src="../img/icons/arrow-prev.svg" alt=""></div>',
        nextArrow: '<div class="slider_btn slider_next"><img src="../img/icons/arrow-next.svg" alt=""></div>',
    });
    $('.center_block_slider_mob_en').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        prevArrow: '<div class="slider_btn slider_prev"><img src="../img/icons/arrow-prev.svg" alt=""></div>',
        nextArrow: '<div class="slider_btn slider_next"><img src="../img/icons/arrow-next.svg" alt=""></div>',
    });

});

$('.profile_head_menu_item>div').click(function() {
    console.log($(this).children('.profile_head_menu_item_open').css('display'));

    if ($(this).children('.profile_head_menu_item_open').css('display') == 'none') {
        $(this).children('.profile_head_menu_item_open').toggle();
    } else {
        $(this).children('.profile_head_menu_item_open').hide();
    }
})

$('.prof_sett>div').click(function() {
    console.log($(this).children('.profile_head_menu_item_open').css('display'));

    if ($(this).children('.profile_head_menu_item_open').css('display') == 'none') {
        $(this).children('.profile_head_menu_item_open').toggle();
    } else {
        $(this).children('.profile_head_menu_item_open').hide();
    }
})

$('.profile_head_menu_item_open_item').click(function() {
    var val = $(this).text().trim();
    $(this).parent('.profile_head_menu_item_open').siblings('span').html(val);

})
$('.select_click').click(function() {

    $(this).children('.reason_wrap').toggle();
})