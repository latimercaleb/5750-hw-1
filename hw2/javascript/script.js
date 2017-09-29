/*==========================================================

 Title: Javascript External for Akihabara Showcase
 Description:
   This Javascript is the external functionality for the akihabara showcase website

==========================================================*/
function loadMain() {
    location.assign('main.html');
    $('.main-button').css('text-decoration', 'underline'); // for some reason the underline doesn't stay
}

function loadTour() {
    location.assign('tourist.html');
    $('.tourist-button').css('text-decoration', 'underline');
}

function loadMap() {
    location.assign('map.html');
    $('.map-button').css('text-decoration', 'underline');
}

function pageTransition(){

}

$('.ex-history').mouseenter();
$('.ex-history').mouseleave();
$('.geo').mouseenter();
$('.pol').mouseenter();
