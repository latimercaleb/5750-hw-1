/*==========================================================

 Title: Javascript External for Akihabara Showcase
 Description:
   This Javascript is the external functionality for the akihabara showcase website

==========================================================*/
// fix the other cards, test them and then append an x-icon from font awesome as your minimize button

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

function deleteX(){
    $('#moveIcon').remove();
}

function regrid(){
    $('.ex-history').mouseenter(function(){
        var card = $('.ex-history');
        card.addClass('focused-card');
    });

    $('.ex-history').mouseleave(function(){
        var card = $('.ex-history');
        card.removeClass('focused-card');
    });

    $('.ex-history').click(function(){
        var card = $('.ex-history');
        $(document).off();
       card.removeClass('focused-card');
       //card.removeClass('norm-card');
       card.addClass('big-card');
       card.prepend("<div id='moveIcon'><i class=' fa fa-window-close fa-3x'></i></div>");

       $('#moveIcon').click(function(e){
           card.removeClass('big-card');
           //card.addClass('norm-card');
           deleteX();
           e.stopPropagation();
       });
    });

    $('.geo').mouseenter(function(){
        var card = $('.geo');
        card.addClass('focused-card');
    });

    $('.geo').mouseleave(function(){
         var card = $('.geo');
         card.removeClass('focused-card');
    });

    $('.geo').click(function(){
        var card = $('.geo');
        $(document).off();
       card.removeClass('focused-card');
       card.addClass('big-card');
       card.prepend("<div id='moveIcon'><i class=' fa fa-window-close fa-3x'></i></div>");
       $('#moveIcon').click(function(e){
           card.removeClass('big-card');
        //   card.addClass('norm-card');
           deleteX();
           e.stopPropagation();
       });
    });

    $('.pol').mouseenter(function(){
        var card = $('.pol');
        card.addClass('focused-card');
    });

    $('.pol').mouseleave(function(){
        var card = $('.pol');
        card.removeClass('focused-card');
    });

    $('.pol').click(function(){
        var card = $('.pol');
        $(document).off();
       card.removeClass('focused-card');
       card.addClass('big-card');
       card.prepend("<div id='moveIcon'><i class=' fa fa-window-close fa-3x'></i></div>");

       $('#moveIcon').click(function(e){
           card.removeClass('big-card');
           //card.addClass('norm-card');
           deleteX();
           e.stopPropagation();
       });
    });
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
    var card = $('.ex-history');
    card.addClass('focused-card');
});

$(document).on('click', '.ex-history', function(){
    // Raise and scale card by a small factor, perhaps apply float
    var card = $('.ex-history');
    $(document).off();
   card.removeClass('focused-card');
   card.addClass('big-card');
   card.prepend("<div id='moveIcon'><i class=' fa fa-window-close fa-3x'></i></div>");

   $('#moveIcon').click(function(e){
       card.removeClass('big-card');
       //card.addClass('norm-card');
       deleteX();
       e.stopPropagation();
       regrid();
   });
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
    $(document).off();
   card.removeClass('focused-card');
   card.addClass('big-card');
   card.prepend("<div id='moveIcon'><i class=' fa fa-window-close fa-3x'></i></div>");

   $('#moveIcon').click(function(e){
       card.removeClass('big-card');
       deleteX();
       e.stopPropagation();
       regrid();
   });
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
    $(document).off();
   card.removeClass('focused-card');
   card.addClass('big-card');
   card.prepend("<div id='moveIcon'><i class=' fa fa-window-close fa-3x'></i></div>");

   $('#moveIcon').click(function(e){
       card.removeClass('big-card');
       deleteX();
       e.stopPropagation();
       regrid();
   });
});

$(document).on('mouseleave', '.pol', function(){
    var card = $('.pol');
    card.removeClass('focused-card');
});
