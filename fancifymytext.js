function makeBigger() {
alert("Making text bigger!");


var textArea = document.getElementById("myText");
textArea.style.fontSize = "24pt";
}

function makeFancy() {
alert("Making text fancy!");

var textArea = document.getElementById("myText");

textArea.style.fontWeight = "bold";
textArea.style.color = "blue";
textArea.style.textDecoration = "underline";
}

function makeBoring() {
alert("Making text boring!");   
var textArea = document.getElementById("myText");
textArea.style.fontWeight = "normal";
textArea.style.color = "black";
textArea.style.textDecoration = "none";
}



function mooify() {
alert("Mooifying text!");
var textArea = document.getElementById("myText");
var text = textArea.value;
text = text.toUpperCase();
var sentences = text.split(".");

for (var i = 0; i < sentences.length; i++) {
    var word = sentences[i].trim().split(" ");

    if (word.length > 0 && word[0] !== "") {
    word[word.length] = "-Moo.";
    sentences[i] = word.join(" ");
    }
}
textArea.value = sentences.join(" ");
}