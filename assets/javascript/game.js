$(document).ready(function () {
    var histFigures = ["Abe Lincoln", "Teddy Roosevelt", "George S Patton", "Martin Luther King Jr", "Rosa Parks", "Molly Brown", "Neil Armstrong", "Susan B Anthony",];
    var gameNum = Math.floor(Math.random() * histFigures.length);
    var gameWord = histFigures[gameNum];
    var goodGuess = [];
    var badGuess = [];
    var underScore = [];
    var blankSpace = function () {
        for (i = 0; i < gameWord.length; i++) {
            underScore.push("_");
        }
        return (underScore);
    }
    $(document).on("keyup" , function(event) {
        var wordKey = String.fromCharCode(event.keyCode);
        if(gameWord.indexOf(wordKey) > -1) {
            goodGuess.push(wordKey);
            underScore[gameWord.indexOf(wordKey)] = wordKey;
        }
            else {
                badGuess.push(wordKey);
            }
    })
    console.log(histFigures);
    console.log(gameNum);
    console.log(gameWord);
    console.log(underScore);
    console.log(blankSpace);
    console.log(wordKey);

    // I have worked for 2 solid hours on var "wordKey" I keep getting an error stating that this variable is not defined. I am moving on to what I want to do next.

});
