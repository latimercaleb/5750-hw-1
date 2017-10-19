var pCode;
var entreeList = [['Select Entree ...', 0],['TacoCombo', 10],['QueasadillaCombo',12],['BuritoCombo',12],['Nachos',  12],['Salad', 8],['Taco Platter', 25]];
var drinkList = [['Select Drink ...', 0],['Water', 0],['Lemonade', 2],['Beer', 4]];
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
      // prepend needs a sort of fade in
      if($('#errorMessage').length == 0){
        $('main').prepend('<h1 id="errorMessage">Invalid login</h1>');
      }
      else {
      // perhaps add a fade in
      $('#errorMessage').remove();
      $('main').prepend('<h1 id="errorMessage">Invalid login</h1>');
    }
    //$('input').val() = ''; // how to clear form on invalid input

    }
});

$('#drinkList').click(makeDrinkList);

function makeFoodList () {
  $.each(entreeList,function(item){
    $('#meallist').add('<option>'+item+'</option>');
  });
}

function makeDrinkList() {

}

function makeMenu () {
  makeFoodList();
  makeDrinkList();
}
function handleData(){
  pCode = JSON.parse(sessionStorage.getItem('loginCred'));
  pCode=pCode.substring(6,pCode.length);
  console.log('Credentials are: '+ pCode);
}
