var startButton = document.querySelector("#start");
var inputTextArea = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text")

var text = inputTextArea.innerHTML;

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function reverseString(text){
    let newText = '';
    for(let letterIndex = text.length - 1; letterIndex >= 0; letterIndex--){
        newText += text.charAt(letterIndex);
    }
    return newText;
}

function undoString(text){
    let newText = text;
    for(let letterIndex = text.length / 2; letterIndex <= text.length - 1; letterIndex++){
        let ASCIIcode = text.charCodeAt(letterIndex);
        if(ASCIIcode >= 65){   
            ASCIIcode -= 1;
            newText = newText.replaceAt(letterIndex, String.fromCharCode(ASCIIcode));
        }
    }

    return newText;
}

function criptografar(text){
    let newText = text;
    for(let letterIndex = 0; letterIndex <= text.length; letterIndex++){
        let ASCIIcode = text.charCodeAt(letterIndex);   
        if(ASCIIcode >= 65){
            ASCIIcode += 3;
            newText = newText.replaceAt(letterIndex, String.fromCharCode(ASCIIcode));
        }
    }
    newText = reverseString(newText);
    newText = undoString(newText);
    return newText;
}

startButton.addEventListener("click", (e) => {
    console.log("bruh");
    outputText.innerHTML = criptografar(inputTextArea.value);
});

