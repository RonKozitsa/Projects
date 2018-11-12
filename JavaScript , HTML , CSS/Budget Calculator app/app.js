/* UI controler Module */
var userInterface = (function(){

    var DOMstrings = {
        inputType : '.add__type',
        descriptionType : '.add__description',
        valueType : '.add__value',
        inputButton : '.add__btn',
        incomeContainer : '.income__list',
        expenseContainer :'.expenses__list',
        budgetValue : ".budget__value",
        expenses_value : ".budget__expenses--value",
        income_value :".budget__income--value",
        budgetPrecentage : ".budget__expenses--percentage",
        month: ".budget__title--month",
        container : ".container",
        item__percentage : ".item__percentage",
        buttonSubmit : ".ion-ios-checkmark-outline",
        buttomDelete : "ion-ios-close-outline"
}
    //formating number to have comma ,sign ,and two decimal numbers
    var formatNumber =  function(number , type){
        var sign, num, numArray, dec;
        number = number.toFixed(2);
        numArray = number.split(".");
        num = numArray[0];
        dec = numArray[1];
        num = parseFloat(num).toLocaleString("en");
        type == "income" ? sign = "+" : sign = "-";
        return (sign + " " +  num + "." + dec);
    }

    //for each method for node list
    var nodeListForEach = function(list , callback){
        for (var i =0 ; i < list.length ; i++){
            callback(list[i] , i);
        }
    }

    //returning an Object containing data written by the user
    return {
        userInput: function(){
            return {
                type : document.querySelector(DOMstrings.inputType).value, //income or expense
                description : document.querySelector(DOMstrings.descriptionType).value,
                value : document.querySelector(DOMstrings.valueType).value
            }
        },

        getDOMstrings : function(){
            return DOMstrings;
        },

        addItemToList : function(item , type){
            var html, newHtml ,element;
            // income or expense 
            if (type === "income"){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }else if(type === "expense"){
                element =DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">%precentage%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div> </div>';
            }
            //update html file according to new data 
            newHtml = html.replace("%id%" ,item.id);
            newHtml = newHtml.replace("%description%" ,item.description);
            newHtml = newHtml.replace("%value%" ,formatNumber(parseInt(item.value),type));

            //insert the new html into the DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml); 
        },
        deleteItemFromList : function(id){
            var element = document.getElementById(id);
            //delete the element
            element.parentNode.removeChild(element);
        },

        clearInputs : function(){
            var fields , arrayFields;
            //getting a back a list
            fields = document.querySelectorAll(DOMstrings.descriptionType + ", " + DOMstrings.valueType);
            //making the list become an array , using 'call' function of slice with 'fields' as the 'this' variable 
            arrayFields = Array.prototype.slice.call(fields);

            arrayFields.forEach(function(current , index , array) {
                current.value = "";
            });
            //puts the cursor back to the description box after we insert an item
            fields[0].focus();

            
        },
        //update all budget fields
        updateBudget : function(newBudget , income , expense , precentage){
            var budgetSign = income > expense ? "income" : "expense";
            document.querySelector(DOMstrings.budgetValue).textContent =formatNumber(Math.abs(parseFloat(newBudget)),budgetSign);
            document.querySelector(DOMstrings.income_value).textContent = formatNumber(parseFloat(income),"income");
            document.querySelector(DOMstrings.expenses_value).textContent =formatNumber(parseFloat(expense),"expense");
            document.querySelector(DOMstrings.budgetPrecentage).textContent = (income > 0) ? (Math.round(precentage) + "%") : "---";
            },
        
        displayPrecentages : function(precentages){
            //node list of precentages
            var fields = document.querySelectorAll(DOMstrings.item__percentage);
            nodeListForEach(fields , function(current , index){
                if(precentages[index] > 0){
                    current.textContent = precentages[index] + "%";
                }else{
                    current.textContent = "---";
                }
            });
        },

        //set current month at top of page
        setMonth  : function(){
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September",                       "October", "November", "December"];
        const date = new Date();
        document.querySelector(DOMstrings.month).textContent =monthNames[date.getMonth()];
    },
        changeType : function(){
            fields = document.querySelectorAll(DOMstrings.inputType + ", " + DOMstrings.descriptionType + ", " + DOMstrings.valueType);
            //change to array
            nodeListForEach(fields , function(current){
                current.classList.toggle("red-focus");         
            })
            document.querySelector(DOMstrings.buttonSubmit).classList.toggle("red");
        }
    }
})();


/* Data Module */
var budgetControl = (function(){

     //income Constructor
     var Income = function(Id , description , value){
        this.id = Id;
        this.description = description;
        this.value = value;
    }
    
    //Expense Constructor
    var Expense = function(Id , description , value){
        this.id = Id;
        this.description = description;
        this.value = value;
        this.precentage = -1;
    }
    //add method to prototype - so it wont be copied for each Expense but will be inherited
    Expense.prototype.calcPrecentage = function(){
        if (data.total_costs.income > 0){
        this.precentage = Math.round((this.value / data.total_costs.income) * 100);
        }
    }

    Expense.prototype.getPrecentage = function(){
        return this.precentage;
    }

    var data = {
        items:{
            expense : [],
            income : []
        },
        total_costs: {
            income: 0,
            expense : 0,
            total : 0
        },
        percentage : -1
    }

    return {
        addItem : function(type , description , value){
            //set id of new item (set to be 'last id' + 1)
            var  Id,item;
            //check if array is empty
            if (data.items[type].length > 0){
                Id = data.items[type][data.items[type].length - 1].id + 1;
            }else{
                Id = 0;
            }
            //check item type
            type === "income" ? item = new Income(Id,description,value) : item = new Expense(Id,description,value);
            //add value of item to total_costs
            data.total_costs[type] += parseInt(value);
            //push item to our data
            data.items[type].push(item);
            return item;
        },

        deleteItem : function(type , id){
            var idArray ,index;
            //get array of id
             idArray = data.items[type].map(function(current){
                return current.id;
            });
            index = idArray.indexOf(parseInt(id));
            //get index of the id to remove
            

            if(index !=-1){
            //update our data
            data.total_costs[type] -= parseFloat(data.items[type][index].value);
            data.items[type].splice(index,1);
            
            }
        },

        updateBudget : function(){
            //sum expenses and incomes
            var precent;
            data.total_costs.total = data.total_costs.income - data.total_costs.expense;
            if(data.total_costs.income > 0){
            precent = (data.total_costs.expense / data.total_costs.income) * 100;
            data.precentage = precent;
            }else{
            precent = 0;
            }
            return {
                total : data.total_costs.total,
                income : data.total_costs.income,
                expense : data.total_costs.expense,
                precentage : precent
            }
    },

        calcPrecentage : function(){
            data.items.expense.forEach(function(current){
                current.calcPrecentage();
            });

            var precentageArray = data.items.expense.map(function(current){
                return current.getPrecentage();
            })
            return precentageArray;
        }
}
})();


/* Control Module */
var controller = (function(userIntr , budgetCtl){

    var updatePrecentage = function(){
        var precentages = budgetCtl.calcPrecentage();
        userIntr.displayPrecentages(precentages);

    }

     var addItemFunction = function(){
        var data , newItem , newBudget;

        // 1. get data from field
        data = userIntr.userInput();

        //check all required inputs are set 
        if (data.value === "" || data.description === "" ){
            return;
        }

        // 2. add item to budget control
        newItem = budgetControl.addItem(data.type,data.description,data.value);

        // 3. add item to UI
        userIntr.addItemToList(newItem , data.type);

        //4.clear fields
        userIntr.clearInputs();
        
        // 5. calculate budget and display new budget on UI
        updateBudget();

        //6.update precentage
        updatePrecentage();
    }

    var updateBudget = function(){
        //get new budget
        var newBudget = budgetCtl.updateBudget();
        //update the budget
        userIntr.updateBudget(newBudget.total , newBudget.income , newBudget.expense, newBudget.precentage);
    }

    //deleting the item . passing it the event , since it is the callback function of the event listener , it has always access to the event itself
    var deleteItem = function(event){
        //only if x button on item list is pressed
        if(event.target.className == domStrings.buttomDelete){
            var item,splitId,type,idNumber;
            //get id of item
            itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
            splitId = itemId.split('-');
            type = splitId[0];
            idNumber = splitId[1];
            //delete item from database
            budgetCtl.deleteItem(type,idNumber);
            //update budget
            updateBudget();
            //update UI
            userIntr.deleteItemFromList(itemId);

            updatePrecentage();
        }

    }

    

    var domStrings = userIntr.getDOMstrings();

    //clear all fields to start point
    var clearData = function(){
        userIntr.clearInputs();
        var fields = document.querySelectorAll(domStrings.budgetValue + ", " +  domStrings.income_value + ", " + domStrings.expenses_value);
        var arrayFields = Array.prototype.slice.call(fields);
        arrayFields.forEach(function(current , index , array){
            current.textContent = parseFloat(0);
        });
        document.querySelector(domStrings.budgetPrecentage).textContent = "---";
       }


    var setUpEventListeners = function(){
        
    //event listener for blue or red marking
    document.querySelector(domStrings.inputType).addEventListener("change",userIntr.changeType);

    // add item on button click 
    document.querySelector(domStrings.inputButton).addEventListener('click',addItemFunction);


    //add item on enter press
    document.addEventListener('keypress' , function(event){
        if (event.keyCode == 13 || event.which == 13){
            addItemFunction();
        }
    });

    document.querySelector(domStrings.container).addEventListener('click',deleteItem);
    }


    return {
        init: function(){
            setUpEventListeners();
            clearData();
            userIntr.setMonth();

        }
    }
})(userInterface , budgetControl);

//initalize
controller.init();