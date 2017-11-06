// JavaScript code for cashier page functionality

// Globals
var sale = function sale(a,b,c,d) {
  this.customIndex = a;
  this.entree = b;
  this.drink = c;
  this.tip = d;
};
var entreeList = [['Select Entree ...', 0], ['TacoCombo', 10],['QueasadillaCombo',12],['BuritoCombo',12],['Nachos',  12],['Salad', 8],['Taco Platter', 25], ['Test', 7.50]];
var drinkList = [['Select Drink ...', 0], ['Water', 0],['Lemonade', 2],['Beer', 4], ['Test', 2.75]];

var salesList= [];
var salesID = 1001;
var saleCount = 0;
var salePtr = -1;
$('#salesIDContainer').val(salesID);
$(function(){
    console.log("Ready?");
    if(localStorage.getItem('ID')&&localStorage.getItem('count')&&localStorage.getItem('ptr')&&localStorage.getItem('sales')){
      loadData();
    }
});

// Event Listeners
$('#total').click(calculateTotal);
$('#newBtn').click(newSale);
$('#prevBtn').click(lastSale);
$('#nextBtn').click(nextSale);
$('#resetBtn').click(resetSale);
$('#deleteBtn').click(deleteSale);
$('#resetAllBtn').click(deleteAll);

// Callbacks
function updateFood(){
  var mealSelection = $('#mealList').val();
  var mealPrice = entreeList.find(function(meal){
      return meal[0] === mealSelection;
  });
  mealPrice = mealPrice[1];
  $('#mealCost').val(function(){
      return mealPrice;
  });

  return mealPrice;
}

function updateDrink() {
   var drinkSelection = $('#drinkList').val();
   var drinkPrice = drinkList.find(function(drink){
       return drink[0] === drinkSelection;
   });
     drinkPrice = drinkPrice[1];
     $('#drinkCost').val(function(){
         return drinkPrice;
     });
     return drinkPrice;
}

function roundResult (x){
  return Math.round(x * 100) / 100;
}

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
  $('#mealList').change(updateFood);
  $('#drinkList').change(updateDrink);
}

function calculateTotal(e){
    e.preventDefault();
    if($('#mealList').val() == 'Select Entree ...' || $('#drinkList').val() === 'Select Drink ...' ){
        alert('You are missing an entree or drink! Please select a valid option from the dropdown');
    }
    else {
      var mealPrice = updateFood();
      var drinkPrice = updateDrink();

      $('#mealCost').val(function(){
          return mealPrice;
      });
      $('#drinkCost').val(function(){
          return drinkPrice;
      });
      $('#subTotalCost').val(function(){
          return roundResult(mealPrice + drinkPrice);
      });
      $('#salesTaxCost').val(function(){
          return roundResult(parseFloat($('#subTotalCost').val()) * 0.06);
      });
      $('#totalCost').val(function(){
          return roundResult(parseFloat($('#subTotalCost').val()) +parseFloat( $('#salesTaxCost').val()));
      });
      $('#tipCost').val(function(){
          return roundResult(parseFloat($('#totalCost').val()) * parseFloat((($('#tip').val()))/100));
      });
      $('#finalTotal').val(function(){
          return roundResult(parseFloat($('#totalCost').val()) + parseFloat($('#tipCost').val()));
      });
    }
}

function loadData() {
  if(localStorage.getItem('ID')&&localStorage.getItem('count')&&localStorage.getItem('ptr')&&localStorage.getItem('sales')){
    // read local storage for the big 4
    salesID = localStorage.ID;
    saleCount = localStorage.count;
    salePtr = localStorage.ptr;

    // parse sales array on retrieval
    var newString = localStorage.sales;
    salesList = JSON.parse(newString);
    setNext(salesList[salePtr]);
  }
  else{
    console.log('localStorage not initialized yet');
  }
}

function saveData() {
  // Set the 4 items into local storage
  localStorage.setItem('ID',salesID);
  localStorage.setItem('count', saleCount);
  localStorage.setItem('ptr', salePtr);
//stringify array before passing into localStorage
  var newString = JSON.stringify(salesList);
  localStorage.setItem('sales', newString);
}

function newSale() {
  if($('#mealList').val() == 'Select Entree ...' || $('#drinkList').val() === 'Select Drink ...' ){
      alert('You are missing an entree or drink! Please select a valid option from the dropdown');
  }
  else {
    let customIndex = salesID;
    let entree = entreeList.findIndex(function(meal){
          return meal[0] === $('#mealList').val();
      });

    let drink = drinkList.findIndex(function(drink){
          return drink[0] === $('#drinkList').val();
      });

    let tip = parseInt($('#tip').val());
    var newSale = new sale(customIndex,entree,drink, tip);
    salesList.push(newSale);
    salePtr++;
    saleCount++;
    salesID++;
    // saveData();// Only on unload
    resetSale();
    $('#salesIDContainer').val(salesID);
  }
}

function lastSale() {
  if($('#mealList').val() == 'Select Entree ...' || $('#drinkList').val() === 'Select Drink ...' ){
    salePtr --;
    if(salePtr >=0){
      $('#mealList').val(entreeList[salesList[salePtr].entree][0])
      $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
      $('#tip').val(salesList[salePtr].tip);
      $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
      updateFood();
      updateDrink();
    }
    else {
      salePtr = saleCount -1;
      $('#mealList').val(entreeList[salesList[salePtr].entree][0])
      $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
      $('#tip').val(salesList[salePtr].tip);
      $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
      updateFood();
      updateDrink();
    }
  }

else {
  let entree = entreeList.findIndex(function(meal){
        return meal[0] === $('#mealList').val();
    });

  let drink = drinkList.findIndex(function(drink){
        return drink[0] === $('#drinkList').val();
    });

  let tip = parseInt($('#tip').val());
  salesList[salePtr].entree = entree;
  salesList[salePtr].drink = drink;
  salesList[salePtr].tip = tip;
  $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));

  salePtr --;
  if(salePtr >=0){
    $('#mealList').val(entreeList[salesList[salePtr].entree][0])
    $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
    $('#tip').val(salesList[salePtr].tip);
    $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
    updateFood();
    updateDrink();
  }
  else {
    salePtr = saleCount -1;
    $('#mealList').val(entreeList[salesList[salePtr].entree][0])
    $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
    $('#tip').val(salesList[salePtr].tip);
    $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
    updateFood();
    updateDrink();
  }
}
}

function nextSale() {
  if($('#mealList').val() == 'Select Entree ...' || $('#drinkList').val() === 'Select Drink ...' ){
    salePtr = 0;
    if(salePtr >=0 && salePtr <= saleCount -1){
      $('#mealList').val(entreeList[salesList[salePtr].entree][0])
      $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
      $('#tip').val(salesList[salePtr].tip);
      $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
      updateFood();
      updateDrink();
    }
    else {
      salePtr = saleCount -1;
      $('#mealList').val(entreeList[salesList[salePtr].entree][0])
      $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
      $('#tip').val(salesList[salePtr].tip);
      $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
      updateFood();
      updateDrink();
    }
  }

else {
  let entree = entreeList.findIndex(function(meal){
        return meal[0] === $('#mealList').val();
    });

  let drink = drinkList.findIndex(function(drink){
        return drink[0] === $('#drinkList').val();
    });

  let tip = parseInt($('#tip').val());
  salesList[salePtr].entree = entree;
  salesList[salePtr].drink = drink;
  salesList[salePtr].tip = tip;
  $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));

  salePtr ++;
  if(salePtr >=0 && salePtr <= saleCount -1){
    $('#mealList').val(entreeList[salesList[salePtr].entree][0]);
    $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
    $('#tip').val(salesList[salePtr].tip);
    $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
    updateFood();
    updateDrink();
  }
  else {
    salePtr = 0;
    $('#mealList').val(entreeList[salesList[salePtr].entree][0])
    $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
    $('#tip').val(salesList[salePtr].tip);
    $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
    updateFood();
    updateDrink();
  }

  }
}

function resetSale() {
  $('#mealList').val(entreeList[0][0]);
  $('#drinkList').val(drinkList[0][0]);
  $('#tip').val(15);
  $('#mealCost').val('');
  $('#drinkCost').val('');
  $('#subTotalCost').val('');
  $('#salesTaxCost').val('');
  $('#totalCost').val('');
  $('#tipCost').val('');
  $('#finalTotal').val('');
}

function setNext(object) {
  if(object === undefined && salePtr > saleCount){ // start from the beginning we are out of bounds
    $('#mealList').val(entreeList[salesList[0].entree]);
    $('#drinkList').val(drinkList[salesList[0].drink]);
    $('#tip').val(object.tip);
    $('#salesIDContainer').val(salesList[0].customIndex);
    updateFood();
    updateDrink();
  }
  else if(object === undefined && salePtr < 0){ // start from the end we have gone past the starting point
    $('#mealList').val(entreeList[salesList[saleCount -1].entree]);
    $('#drinkList').val(drinkList[salesList[saleCount -1].drink]);
    $('#tip').val(object.tip);
    $('#salesIDContainer').val(salesList[saleCount -1].customIndex);
    updateFood();
    updateDrink();
  }
  else{
  $('#mealList').val(entreeList[object.entree]);
  $('#drinkList').val(drinkList[object.drink]);
  $('#tip').val(object.tip);
  $('#salesIDContainer').val(object.customIndex);
  updateFood();
  updateDrink();
  }
}

function deleteSale() {
  saleCount--;
  salesList.splice(salePtr,1);
  salePtr++;
    if(salePtr >=0 && salePtr <= saleCount -1){
      $('#mealList').val(entreeList[salesList[salePtr].entree][0])
      $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
      $('#tip').val(salesList[salePtr].tip);
      $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
      updateFood();
      updateDrink();
    }
    else {
      salePtr = saleCount -1;
      $('#mealList').val(entreeList[salesList[salePtr].entree][0])
      $('#drinkList').val(drinkList[salesList[salePtr].drink][0]);
      $('#tip').val(salesList[salePtr].tip);
      $('#salesIDContainer').val(parseInt(salesList[salePtr].customIndex));
      updateFood();
      updateDrink();
    }
  }

function deleteAll() {
  salesList= [];
  salesID = 1001;
  saleCount = 0;
  salePtr = -1;
  $('#salesIDContainer').val(salesID);
  resetSale();
  localStorage.clear();
}
