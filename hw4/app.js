// JavaScript code for cashier page functionality

var entreeList = [['TacoCombo', 10],['QueasadillaCombo',12],['BuritoCombo',12],['Nachos',  12],['Salad', 8],['Taco Platter', 25]];
var drinkList = [['Water', 0],['Lemonade', 2],['Beer', 4]];

$(function(){
    console.log("Ready?");
     $('select').material_select();
});

// Event Listeners

$('#total').click(calculateTotal);
// Callbacks
function handleData(){
  pCode = JSON.parse(sessionStorage.getItem('loginCred'));
  pCode=pCode.substring(6,pCode.length);
  console.log('Credentials are: '+ pCode);
}

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
