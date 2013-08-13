var winston = prompt("Tell me a quote, but not too long!");
while (winston.length > 80) {
	winston = prompt("Shorter than 80 characters, please."); }
winston.toLowerCase();
var regWinston = new RegExp("[a-g]","g");
alert (winston.match(regWinston));