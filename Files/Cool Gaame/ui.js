var buttonCollection = document.getElementsByClassName('buttonCollection');
var color = 0;

function bgGreen() {
    color = 0;
}

function bgBlue() {
    color = 1;
}

function bgRed() {
    color = 2;
}

function bgWhite() {
    color = 3;
}
function colorSwitch() {
    //GREEN
    if(color == 0){
        document.getElementById('theBody').style.backgroundColor = "#053";
        document.getElementById('greenButton').style = "background-color:#031; border-color:#053;";
        for(var i = 0; i < buttonCollection.length; i++){
            buttonCollection[i].style.backgroundColor = "#031";
        }
    } else {
        document.getElementById('greenButton').style = "background-color:#053; border-color:#031;";
    }
        
    //BLUE
    if(color == 1){
        document.getElementById('theBody').style.backgroundColor = "#035";
        document.getElementById('blueButton').style = "background-color:#013; border-color:#035;";
        for(var i = 0; i < buttonCollection.length; i++){
            buttonCollection[i].style.backgroundColor = "#013";
        }
    } else {
        document.getElementById('blueButton').style = "background-color:#035; border-color:#013;";
    }
        
    //RED
    if(color == 2){
        document.getElementById('theBody').style.backgroundColor = "#502";
        document.getElementById('redButton').style = "background-color:#301; border-color:#502;";
        for(var i = 0; i < buttonCollection.length; i++){
            buttonCollection[i].style.backgroundColor = "#301";
        }
    } else {
        document.getElementById('redButton').style = "background-color:#502; border-color:#301;";
    }
    
    //WHITE
    if(color == 3){
        document.getElementById('theBody').style.backgroundColor = "#eee";
        document.getElementById('whiteButton').style = "background-color:#ccc; border-color:#eee;";
        for(var i = 0; i < buttonCollection.length; i++){
            buttonCollection[i].style.backgroundColor = "#ccc";
        }
    } else {
        document.getElementById('whiteButton').style = "background-color:#eee; border-color:#ccc;";
    }
}