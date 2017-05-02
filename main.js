var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');
var basic_card = [];
var cloze_card = [];
var new_card;
// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.text);

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");
var choose_card;

function getCard() {
    inquirer.prompt([{
        name: "choose_card",
        message: "Which card do you wish to create? Press 1 for Basic, 2 for Cloze:",
    }]).then(function (answers) {
        choose_card = answers.choose_card;
        choose_card = parseInt(choose_card);
        if (choose_card === 1) {
            inquirer.prompt([{
                    name: "front",
                    message: "What do you want the front of the card to say?"
                },
                {
                    name: "back",
                    message: "What do you want the back of the card to say?"
                }
            ]).then(function (answers) {
                new_card = new BasicCard(answers.front, answers.back);
                basic_card.push(new_card);
                console.log(basic_card[0]);
            });
        }
        if (choose_card === 2) {
            inquirer.prompt([{
                    name: "text",
                    message: "What is the full text of the card?"
                },
                {
                    name: "cloze",
                    message: "What text do you want deleted from the full text?"
                }
            ]).then(function (answers) {
                new_card = new ClozeCard(answers.text, answers.cloze);
                cloze_card.push(new_card);
                console.log(cloze_card[0]);
            });
        }
    });
}

getCard();