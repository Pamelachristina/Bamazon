// Require NPM packages
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table3');
var colors = require('colors');

// Setup connection to SQL server
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'July1981',
    database: 'bamazon_db'
});


// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
// run the start function after the connection is made to prompt the user
    start();
 });


 // function which prompts the user for what action they should take
function start() {
    inquirer
      .prompt({
        name: "welcomeMessage",
        type: "list",
        message: "Welcome to Bamazon. What departments would you like to shop today?",
        choices: ["ELECTRONICS", "PERSONAL CARE", "ENTERTAINMENT"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.welcomeMessage === "ELECTRONICS") {
          buyElectronics();
        }
        else if(answer.welcomeMessage === "PERSONAL CARE") {
          buyPersonalCare();
        } else if(answer.welcomeMessage === "ENTERTAINMENT") 
          buyEntertainment();
        }
      )};

      function buyElectronics(){
          //console.log("This would be the electronics department")
          connection.query("SELECT department_name FROM products", function(err, res) {
              if (err) throw (err)

              //console.log("If we get this far, this is what will come up")
              console.log("Select an item from the electronics department")

              var table = new Table({
                head: ['ID', 'PRODUCT', 'DEPARTMENT', 'PRICE', 'QUANTITY']
            });

            for (var i = 0; i < res.length; i++) {
               table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].stock_quantity]
            );
            }
             
            console.log(table.toString());
            
          })
      }
  

