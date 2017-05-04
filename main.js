var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');
var basic_card = [];
var cloze_card = [];
var new_card;
var choose_card;
var quit = 'N';
var create_quiz;

function getCard() {
    if(quit !== 'Y' || quit !== 'y')
    {
    inquirer.prompt([{
        name: "quit",
        message: "Do you wish to quit? Y for yes, N for no",
    }])
    inquirer.prompt([{
        name: "create_quiz",
        message: "Enter a 1 to create cards or a 2 to review cards:",
    }]).then(function (answers) {
        create_card();
    });
    }
    
}

function create_card(){
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
            getCard();
}


getCard();