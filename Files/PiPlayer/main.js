// Variables
var speed = 1600; // Speed of interval - DO NOT CHANGE!
var scale_aminor = [["A",3],["B",3],["C",4],["D",4],["E",4],["F#",4],["G",4],["A",4],["B",4],["D",5]]; //Scale used

//AudioSynth Initialization and Testing
var piano = Synth.createInstrument('piano'); //Create synth object
var testInstance = new AudioSynth;
Synth instanceof AudioSynth; // True
testInstance instanceof AudioSynth; // True
testInstance === Synth; // True

var d = new Date(); // Used for launchpoint
var launchpointInMs = 1519211478309; //Launchdate value in ms
var amounts = Math.round(Number((d.getTime() - launchpointInMs) / speed)); //Calculate poisition in Pi from Launchdate

var display = ["000000","3","141592"] //Define Display array for the Pi Display. Ignore the content.


function msToTime(duration) {
        var minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24)
        , days = parseInt((duration/(1000*60*60*24))%365);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    days = (days < 10) ? "0" + days : days;
    return "Runtime: " + days + "d " + hours + "h " + minutes + "m";
}

//Start-Update for PiDisplay
function fixDisplay() {
    display[2] = "";
    display[0] = "";
    for (i = 0; i < 6; i++) {
        display[0] += pi[amounts-i];    
    }
    for (i = 0; i < 6; i++) {
        display[2] += pi[amounts+i];
    }
}

//Update the Tags on the keys
function displayNoteTags() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("whiteKey")[i].innerHTML = scale_aminor[i][0];
    }
}

//Display position
function displayNum() {
    display[1] = pi[amounts];
    display[0] += pi[amounts-1];
    display[0] = display[0].slice(1);
    display[2] += pi[amounts+6];
    display[2] = display[2].slice(1);
    if (amounts.toString().slice(-1) == "0") {
        document.getElementById('selNumHeader').innerHTML = amounts + "th";
    }
    if (amounts.toString().slice(-1) == "1") {
        document.getElementById('selNumHeader').innerHTML = amounts + "st";
    }
    if (amounts.toString().slice(-1) == "2") {
        document.getElementById('selNumHeader').innerHTML = amounts + "nd";
    }
    if (amounts.toString().slice(-1) == "3") {
        document.getElementById('selNumHeader').innerHTML = amounts + "rd";
    }
    if (parseInt(amounts.toString().slice(-1)) > 3) {
        document.getElementById('selNumHeader').innerHTML = amounts + "th";
    }

    for (i = 0; i < 3; i++) {
        document.getElementsByClassName('numberContainer')[i].innerHTML = display[i];
    }

    //Update timeDisplay
    document.getElementById('timeDisplay').innerHTML = msToTime(amounts*speed);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pressKeyPiano() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("whiteKey")[i].style.backgroundColor = "#FFFFFF";
    }
    document.getElementsByClassName("whiteKey")[Number(pi[amounts])].style.backgroundColor = "#BCBCBC";
}

function playPi() {
    piano.play(scale_aminor[pi[amounts]][0], Number(scale_aminor[pi[amounts]][1]), 10);
    displayNum();
    pressKeyPiano();
    amounts++;
}

document.getElementsByTagName("body")[0].onload = function(event) { 
    fixDisplay();
    setInterval(function(){ playPi(); }, speed);
    displayNoteTags();
}