var pCode;
$(function(){
    console.log("Ready?");
});

$('#adminLoginForm').submit(function(){
    pCode = $('input').val();
    console.log("User Code is: "+ pCode);
});

$('#clear').click(function(){
    pCode = "";
    console.log('Wiped: '+ pCode);
})

$('#login').submit(function(){
    if($('input').val() == pCode){
        window.location.assign('cashier.html')
    }
    else {
        $('main').prepend('<h1>Invalid login</h1>');
    }
});
