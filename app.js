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

//private variable for storing class names
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: '.add__value',
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {  //getting value entered in inputs
      return {
       type: document.querySelector(DOMStrings.inputType).value, //will be either inc or exp
       description: document.querySelector(DOMStrings.inputDescription).value,
       value: document.querySelector(DOMStrings.inputValue).value
     };
  },

    //makes domstrings a publicly accessable varible again
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();





// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    //define a new variable to get DOMStrings
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {

      if(event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }


    });

  };


  var ctrlAddItem = function() {

         // 1. Get the filled input data
         var input = UICtrl.getInput();
          console.log(input);
        //2. Add the item to the budget CONTROLLER

        //3. Add the item to the UI

        //4. Calculate the  budget

        //5. Display the budget on the UI
  };


  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();
