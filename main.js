var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');
var fs = require("fs");
var basic_card = []; // Array to store the basic card objects
var cloze_card = []; // Array to store the cloze card objects
var new_card; // Stores user input during the new card creation process
var choose_card; // Variable to store what type of card user wishes to create
var quit; //Variable to store if the user wants to quit the program

// Initial iteration of user prompts for creating cards
getCard();

// Function created to let user to either proceed or quit program.
function getCard() {

    inquirer.prompt([{
        name: "quit",
        message: "Do you wish to quit? Y for yes, N for no",
    }]).then(function (answers) {
        if (answers.quit !== 'Y' && answers.quit !== 'y') { // Allows the card creation function to be called if user wants to create cards.
            create_card();
        }
    });
}

// Function for creating new Basic or Cloze Flashcards
function create_card() {
    inquirer.prompt([{
        name: "choose_card",
        message: "Which card do you wish to create? Press 1 for Basic, 2 for Cloze:",
    }]).then(function (answers) {
        choose_card = answers.choose_card;
        choose_card = parseInt(choose_card);
        if (choose_card === 1) { //If user wants to create a Basic Flashcard
            inquirer.prompt([{
                    name: "front",
                    message: "What do you want the front of the card to say?"
                },
                {
                    name: "back",
                    message: "What do you want the back of the card to say?"
                }
            ]).then(function (answers) { // Takes user input for front and back text and creates a Basic Flashcard object
                new_card = new BasicCard(answers.front, answers.back);
                basic_card.push(new_card);
                console.log("This is what you have so far in Basic Cards:");
                console.log("--------------------------------------------");
                for (var i = 0; i < basic_card.length; i++) { // Iterates through all Basic Flashcards made and shows them to the user
                    console.log(basic_card[i]);
                    console.log("--------------------------------------------");
                }
                getCard(); // Recalls the function to give the user the option to quit or continue
            });
        }
        if (choose_card === 2) { // Executes if the user picks a Cloze Flashcard creation
            inquirer.prompt([{
                    name: "text",
                    message: "What is the full text of the card?"
                },
                {
                    name: "cloze",
                    message: "What text do you want deleted from the full text?"
                }
            ]).then(function (answers) { // Takes user input for Cloze Flashcard and creates it
                new_card = new ClozeCard(answers.text, answers.cloze);
                cloze_card.push(new_card);
                console.log("This is what you have so far in Cloze Cards:");
                console.log("--------------------------------------------");
                for (var y = 0; y < cloze_card.length; y++) { // Iterated through all made Cloze Flashcards and shows them to the user
                    console.log(cloze_card[y]);
                    console.log("--------------------------------------------");
                }
                getCard(); // Calls the function that allows the user to quit or to continue.
            });
        }
    });
}