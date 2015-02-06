var isMajor = true; //For now, assume major scales.
var winston = prompt("Tell me a quote, but not too long!");
while (winston.length > 80) {
	winston = prompt("Shorter than 80 characters, please."); }
winston.toUpperCase();
var regWinston = new RegExp("[A-G]","g");

var winstonMatch = winston.match(regWinston);

/*Scale accidentals stored as 1 bool for sharps/flats and 7 bools for which notes they apply to.
Example: "a": [true (sharps), false (A), false (B), true(C#)...]
Example: "f": [false (flats), false (F), false (G), false (A), true (Bb)...]
I realize that the second index is currently redundant. Also, I chose "false" for the first
element of the C scale just for the heck of it.
*/
var scales = {
    "A": [true, false, false, true, false, false, true, true],
    "B": [true, false, true, true, false, true, true, true],
    "C": [false, false, false, false, false, false, false, false],
    "D": [true, false, false, true, false, false, false, true],
    "E": [true, false, true, true, false, false, true, true],
    "F": [false, false, false, false, true, false, false, false],
    "G": [true, false, false, false, false, false, false, true]
}


if (isMajor) { //Always major right now.
    var myString = "";
    var tonic = winstonMatch[0];
    var accidental = scales[tonic][0] ? "#" : "b";
    var note;
    for (var i = 0; i < winstonMatch.length; i++) {
        note = winstonMatch[i].charCodeAt(0)-64; //So "A" becomes 1, "B"=>2, etc.
        myString += "| " + winstonMatch[i];
        if (scales[tonic][note]) { myString += accidental; }
        myString += " ";
    }
}
console.log(myString);