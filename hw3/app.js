var pCode;
$(function(){
    console.log("Ready?");
});

$('#adminLoginForm').submit(function(){
    var data = $('#adminLoginForm').serialize();
    dataJSON = JSON.stringify(data);
    sessionStorage.setItem('loginCred', dataJSON);
});

$('#clear').click(function(){
    pCode = "";
    console.log('Wiped: '+ pCode);
})

$('#login').submit(function(e){
  e.preventDefault();
    if($('input').val() == pCode){
        window.location.assign('cashier.html')
    }
    else {
        $('main').prepend('<h1>Invalid login</h1>');
    }
});

function handleData(){
  pCode = JSON.parse(sessionStorage.getItem('loginCred'));
  pCode=pCode.substring(6,pCode.length);
  console.log('Credentials are: '+ pCode);
}
