/// BUDGET CONTROLLER

var budgetController = (function() {

  var x = 23;

  var add = function(a) {
    return x + a;
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();




//UI CONTROLLER

var UIController = (function() {

})();





// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {

        // 1. Get the filled input data

        //2. Add the item to the budget CONTROLLER

        //3. Add the item to the UI

        //4. Calculate the  budget

        //5. Display the budget on the UI
        console.log("It works");

  }

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {

    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
