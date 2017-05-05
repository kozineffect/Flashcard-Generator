var ClozeCard = function(text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "... ");
    var check = text.includes(cloze);
    if (check !== true){
        console.log("There was an error in your input!");
    }
};
module.exports = ClozeCard;