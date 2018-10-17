$(document).ready(function() {
    $(".tabs_btn").click(function() {
        $(".tabs_head").toggle(2000);
    });
    $(".tabs_btns").click(function() {
        $(".tabs_par").fadeToggle(2000);
    });
    $(".tabs_btnses").click(function() {
        $(".tabs_foto").fadeToggle(2000);
    });

    //scroll
    $(function(f) {
        var element = f('.header_top');
        f(window).scroll(function() {
            element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](800);
        });
    });
    $(function(f) {
        var element = f('.top_logo');
        f(window).scroll(function() {
            element['fade' + (f(this).scrollTop() > 700 ? 'Out' : 'In')](800);
        })
    });

    //end
    //SHOP PRODUCTS
    var $clickButton = $('.main_back');
    var $deferentContent = $('.shop');

    $clickButton.on('click', () => {
        $(event.currentTarget).siblings('.main_head').html('<p class="ok">&#10004;</p>').fadeIn();
        $(event.currentTarget).siblings('.main_heads').text('Order it  products?');
    });

    //END

    // loginForm DropDown
    const $loginButton = $('.form_text');
    const $loginForm = $('.form_none');
    const $loginWrapper = $('.headling_forms');
    const $header = $('header');
    const $fontColor = $(':text');

    $loginButton.on('mouseenter', () => {

        $loginForm.slideDown(700, 'linear', () => {

            $loginWrapper.css({
                background: '#4791d0',
                borderRadius: '20px',
                transition: '1s'

            });
            $header.not('.headling_forms').css('opacity', '0.6');
            $fontColor.css({
                background: '#4791d0',
                color: 'gold'
            });
        });
    });
    $loginForm.on('mouseleave', () => {
        $loginForm.slideUp(700, 'linear', () => {
            $loginWrapper.css('background', 'none');
            $header.css('opacity', '1');
        });
    });


});
//end