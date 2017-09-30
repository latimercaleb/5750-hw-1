/*==========================================================

 Title: Javascript External for Akihabara Showcase
 Description:
   This Javascript is the external functionality for the akihabara showcase website

==========================================================*/
// nav functions, shows underline under current page
function loadMain() {
    $('.main-button').addClass('focused-button');
    $('.tourist-button').removeClass('focused-button');
    $('.map-button').removeClass('focused-button');
}

function loadTour() {
    $('.tourist-button').addClass('focused-button');
    $('.main-button').removeClass('focused-button');
    $('.map-button').removeClass('focused-button');
}

function loadMap() {
    $('.map-button').addClass('focused-button');
    $('.tourist-button').removeClass('focused-button');
    $('.main-button').removeClass('focused-button');
}

function pageTransition(){

}

// nav bar functions for getting from page to page
$(document).on('click', '.main-button', function(){
    location.assign('main.html');
});
$(document).on('click', '.tourist-button', function(){
    location.assign('tourist.html');
});
$(document).on('click', '.map-button', function(){
    location.assign('map.html');
});

// grid functions for main page
$(document).on('mouseenter', '.ex-history', function(){
    // Raise and scale card by a small factor
    var card = $('.ex-history');
    card.addClass('focused-card');
});

$(document).on('click', '.ex-history', function(){
    // Raise and scale card by a small factor, perhaps apply float
    var card = $('.ex-history');
   card.off();
   card.removeClass('focused-card');
   card.addClass('big-card');
});

$(document).on('mouseleave', '.ex-history', function(){
    // Raise and scale card by a small factor, perhaps apply float
    var card = $('.ex-history');
    card.removeClass('focused-card');
});



$(document).on('mouseenter', '.geo', function(){
    var card = $('.geo');
    card.addClass('focused-card');
});

$(document).on('click', '.geo', function(){
    // Raise and scale card by a small factor, perhaps apply float
    var card = $('.geo');
    card.addClass('big-card');

});

$(document).on('mouseleave', '.geo', function(){
    var card = $('.geo');
     card.removeClass('focused-card');
});



$(document).on('mouseenter', '.pol', function(){
    var card = $('.pol');
    card.addClass('focused-card');
});

$(document).on('click', '.pol', function(){
    // Raise and scale card by a small factor, perhaps apply float
    var card = $('.pol');
    card.addClass('big-card');

});

$(document).on('mouseleave', '.pol', function(){
    var card = $('.pol');
    card.removeClass('focused-card');
});
