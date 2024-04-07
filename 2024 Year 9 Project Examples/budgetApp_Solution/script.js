const dateInput = document.getElementById("dateInput");                 //date
const descriptionInput = document.getElementById("descriptionInput");   //description
const categoryInput = document.getElementById("categoryInput");         //category
const amountInput = document.getElementById("amountInput");             //amount
const listTable = document.getElementById("listTable");                 //table
const totalSpentOutput = document.getElementById("totalSpentOutput");   //total spent output
const categoryOutput = document.getElementById("categoryOutput");       //area to print a total for each category

//variables
var items = []; //store all expenses as an object
var total = 0;  //total amount spent

loadSavedData();            //check to see if any data saved on load

//function to get values from form and add them to the array
function addItem() {
    var date = dateInput.value;
    var description = descriptionInput.value;
    var category = categoryInput.value;
    var amount = parseFloat(amountInput.value);
    //create a unique id for each new entry - this will help with deleting later
    var id = Date.now();
    //push values to array for storage
    items.push({ id: id, date: date, description: description, category: category, amount: amount });
    saveData()      //save the data
    printTable();   //print the results into the table below
}


//this will be a reusable function to print the table of expenses
//We will use this function when adding data, sorting data and deleting data
function printTable() {
    //create the header
    listTable.innerHTML = '<tr><th>Date</th><th>Description</th><th>Category</th><th>Amount</th><th>Control</th></tr>';
    for (var i = 0; i < items.length; i++) {
        var row = listTable.insertRow(-1); //add a new row to end of table. -1 means go to end of table
        row.insertCell(0).textContent = items[i].date; //add new value to cell 0
        row.insertCell(1).innerHTML = items[i].description; //add new value to cell 1
        row.insertCell(2).innerHTML = items[i].category; //add new value to cell 2
        row.insertCell(3).innerHTML = items[i].amount; //add new value to cell 3
        row.insertCell(4).innerHTML = '<button onclick="deleteItem(this)" value="' + items[i].id + '">X</button>';  //include the id value with button
    }

    calculateTotal();
}

//this function will delete the row from the table and array using its unique id
function deleteItem(cell) {
    var i = cell.parentNode.parentNode.rowIndex;	         //get the row index of the table
    var id = cell.value;                                     //get id of object position in array   
    listTable.deleteRow(i);		                             //go to the table and delete the specific row number i

    //find the id of the object in array and delete
    var index = items.findIndex(obj => obj.id == id);       //search array of objects and return its index position 
    items.splice(index, 1);                                    //remove expense from array
    saveData()                                              //save the data changes
    calculateTotal();                                       //recalculate the total
}


//write a function to add all the expenses spent so far
//loop through array and output the total to totalSpentOutput
function calculateTotal() {
    let total = 0
    for (var i = 0; i < items.length; i++) {
        total += items[i].amount;
    }
    totalSpentOutput.textContent = "Total Spent: $" + total;
    addUpCategories();  //now update the categories
}


//write a function to calculate how much was spent in each category and output to div id a
function addUpCategories() {
    let fuel = 0;
    let entertainment = 0;
    let food = 0;
    let shopping = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].category == "Fuel") {
            fuel += items[i].amount;
        }
        else if (items[i].category == "Entertainment") {
            entertainment += items[i].amount;
        }
        else if (items[i].category == "Food") {
            food += items[i].amount;
        }
        else if (items[i].category == "Shopping") {
            shopping += items[i].amount;
        }
    }
    //output to categoryOutput
    categoryOutput.innerHTML = `Fuel: $${fuel}<br>Entertainment: $${entertainment}<br>Food:$${food}<br>Shopping: $${shopping}`;
}


//this function will sort through the data and then reprint the table
function sort(type) {
    if (type == "amount") {
        items.sort((a, b) => b.amount - a.amount);                      //number comparison
    } else if (type == "category") {
        items.sort((a, b) => a.category.localeCompare(b.category));     //text comparison
    }
    printTable();
}

//using local storage we can load data saved from a previous session
function loadSavedData() {
    if (localStorage.getItem('budget2')) {
        items = JSON.parse(localStorage.getItem("budget2"))
        printTable();       //then print the results in table
    }
}

//save the data created to local storage
function saveData() {
    localStorage.setItem("budget2", JSON.stringify(items));
}