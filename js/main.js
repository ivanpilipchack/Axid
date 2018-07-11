$(document).ready(function() {
    $(".tabs_btn").click(function() {
        $(".tabs_head").toggle(2000);
    });
    $(".tabs_btns").click(function() {
        $(".tabs_par").fadeToggle(2000);
    });
    $(".tabs_btnses").click(function() {
        $(".tabs_foto").slideToggle(2000);
    });
});