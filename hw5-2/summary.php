// summmary file for the calculations made from previous sales in javascript layer of this client-server application
<?php
 <header>
 <h1>Cashier</h1>
</header>
<hr />
<main>
<div class='container'>
echo $_GET;
   <div class='row'>
       <div class='col-md-6'>
           <form> <!--Main form for user interaction-->
             <div class='form-group bigger-group'>
               <label>Sale ID: </label>
               <input readonly id='salesIDContainer' type="number" />
             </div>
               <div class='form-group'>
                   <label>Entree:</label>
                   <select name='Entree' id='mealList'></select>
               </div>
               <div class='form-group'>
                   <label>Drink:</label>
                   <select name='Drink' id='drinkList'> </select>
               </div>
               <div class='form-group'>
                   <label>Tip(%):</label>
                   <input type='number' min="0" max="100" value="15" step="5" id='tip' />
               </div>
            </form>
        </div>
    </div>
</div>
               