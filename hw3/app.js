var pCode;
$(function(){
    console.log("Ready?");
});

$('#submit').submit(function(){
    pCode = $('input').val();
    console.log("User Code is: "+ pCode);
});

$('#clear').click(function(){
    pCode = "";
    console.log('Wiped: '+ pCode);
})
