// JavaScript code for cashier page functionality


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

$('#total').click(calculateTotal);

$('#login').submit(function(e){
  e.preventDefault();
    if($('input').val() == pCode){
        window.location.assign('cashier.html');
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

function makeFoodList () {
  entreeList.forEach(function(item){
    $('#mealList').append('<option class="new-menu-item">item[0]</option>');
    $('.new-menu-item').html(item[0]).removeClass('new-menu-item');
  });
}

function makeDrinkList() {
    drinkList.forEach(function(item){
      $('#drinkList').append('<option class="new-drink-item">item[0]</option>');
      $('.new-drink-item').html(item[0]).removeClass('new-drink-item');
    });
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

function calculateTotal(e){
    e.preventDefault();
    if($('#mealList').val() == 'Select Entree ...' || $('#drinkList').val() === 'Select Drink ...' ){
        alert('You are missing an entree or drink! Please select a valid option from the dropdown');
    }
    else {
       var mealSelection = $('#mealList').val();
       var drinkSelection = $('#drinkList').val();

      var mealPrice = entreeList.find(function(meal){
          return meal[0] === mealSelection;
      });

      var drinkPrice = drinkList.find(function(drink){
          return drink[0] === drinkSelection;
      });

      var mealPrice = mealPrice[1];
      var drinkPrice = drinkPrice[1];

      $('#mealCost').val(function(){
          return mealPrice;
      });

      $('#drinkCost').val(function(){
          return drinkPrice;
      });

      $('#subTotalCost').val(function(){
          return mealPrice + drinkPrice;
      });

      $('#salesTaxCost').val(function(){
          return (parseFloat($('#subTotalCost').val()) * 0.06).toFixed(2);
      });

      $('#totalCost').val(function(){
          return (parseFloat($('#subTotalCost').val()) +parseFloat( $('#salesTaxCost').val())).toFixed(2);
      });

      $('#tipCost').val(function(){
          return (parseFloat($('#totalCost').val()) * parseFloat((($('#tip').val()))/100)).toFixed(2);
      });

      $('#finalTotal').val(function(){
          return (parseFloat($('#totalCost').val()) + parseFloat($('#tipCost').val())).toFixed(2);
      });

    }
}
