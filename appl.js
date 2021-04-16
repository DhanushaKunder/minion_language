var langTranslate = document.querySelector("#lang-translate");
var textInput= document.querySelector("#text-input");
var textOutput= document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Error occured!!",error);
    alert("Something went wrong!! please try again after some time")
}

function clickHandler(){
    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })
        .catch(errorHandler)
}

langTranslate.addEventListener("click", clickHandler)