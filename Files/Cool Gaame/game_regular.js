/* Declare variables */
var playerobj;
var direction = false;
var startSpeed = 2;
var speed = startSpeed;
var speedincr = 0;
var points = 0;
var lives = 5;
var highscore = 0;
var hearts = "";
var pressdirection = false;
var levels = 0;
var levelincr = 1;
var warpBool = false;
var selMenu1 = 0;
var selMenu2 = 0;
var MenuSel = "top";
var optbuttons = ["normal", "hard", "insane", "greenButton", "blueButton", "redButton", "whiteButton"]


/* Keydown eventhandler */

/* Mousedown eventhandler */
document.onmousedown = function() {
    tryClick()
}



/* Declare function that allows deletion of elements by ID */
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}



/* Create canvas */
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 300;
        this.canvas.setAttribute("id", "theCanvas");
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 0);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}



/* Launch game, create components */
function startRegular() {
    window.addEventListener('keydown',this.check,false);
    playerobj = new component(30, 300, "#FFFFFF", 10, 0);
    myGameArea.start();
    document.getElementById('startButtons').remove();
    document.getElementById('aimhitScript').remove();
}



/* Class for making components */
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        document.getElementById('speedPrint').innerHTML = speed;
        document.getElementById('pointPrint').innerHTML = points;
        document.getElementById('lifePrint').innerHTML = lives;
        document.getElementById('highscorePrint').innerHTML = highscore;
    }
}



/* Give point or subtract life */
function givePoints() {

}
 
   
    

/* Reset Game */
function resetGame() {
    speed = startSpeed;
    points = 0;
    lives = 5;
    levels = 0;
    document.getElementById('theCanvas').remove();
    window.clearInterval(myGameArea.interval)
    myGameArea.interval = 0;
    myGameArea.clear();         
    startRegular()
}



/* Level change */
function levelUp() {
    levels += levelincr;    
    popUp(3)
}



/* Popups */
function popUp(popType) {
    switch (popType) {
        case 0:
            document.getElementById('popupPrint').style.color = "green";
            document.getElementById('popupPrint').innerHTML = "+5";
            break;
        case 1:
            document.getElementById('popupPrint').style.color = "yellow";
            document.getElementById('popupPrint').innerHTML = "+2";
            break;
        case 2:
            document.getElementById('popupPrint').style.color = "red";
            document.getElementById('popupPrint').innerHTML = "-1 \u2764"
            break;
        case 3:
            document.getElementById('popupPrint').style.color = "green";
            document.getElementById('popupPrint').innerHTML = "Level " + levels.toString();
            break;
        case 4:
            document.getElementById('popupPrint').style.color = "red";
            document.getElementById('popupPrint').innerHTML = "YOU LOST!"
            break;
    }
}



/* Use input on canvas */
function tryClick() {
    speed += speedincr;
    givePoints()
    if (speed >= 15) {
        speed = startSpeed;
        levelUp()
    }
}



/* Get Key Input */
function check(e) {
    var code = e.keyCode;
    if (code == 32) {
        tryClick()   
    }

    if (code == 38) {
        resetOpt()
        selMenu2 = 0;
        MenuSel = "top";
        document.getElementById('styleSpan').style.textDecoration = "underline";
        document.getElementById('gamemodeSpan').style.textDecoration = "none";
    }

    if (code == 40) {
        resetOpt()
        selMenu1 = 0;
        MenuSel = "bottom";
        document.getElementById('styleSpan').style.textDecoration = "none";
        document.getElementById('gamemodeSpan').style.textDecoration = "underline";
    }

    if (code == 39) {
        if (MenuSel == "bottom") {
            if (selMenu2 < 3) {
                selMenu2 = selMenu2 + 1
                appendOpt(selMenu2)
            }
        }
        
        if (MenuSel == "top") {
            if (selMenu1 < 4) {
                selMenu1 = selMenu1 + 1
                appendOpt(selMenu1)
            }
        }
    }

    if (code == 37) {
        if (MenuSel == "bottom") {
            if (selMenu2 > 0) {
                selMenu2 = selMenu2 - 1
                appendOpt(selMenu2)
            }
        }   
        
        if (MenuSel == "top") {
            if (selMenu1 > 0) {
                selMenu1 = selMenu1 - 1
                appendOpt(selMenu1)
            }
        }   
    }

    /* Simulate click on buttons */
    if (code == 13) {
        if (MenuSel == "top") {
            switch (selMenu1) {
                case 1:
                    document.getElementById('greenButton').click();
                    break;
                case 2:
                    document.getElementById('blueButton').click();
                    break;
                case 3:
                    document.getElementById('redButton').click();
                    break;
                case 4:
                    document.getElementById('whiteButton').click();
                    break;
            }
        } else {
            alert(selMenu2)
        }
    }
}



/* Move Playerobj */
function moveRedGuy() {
    if (playerobj.x <= 0) {
        direction = false;
    }                               
    if (playerobj.x >= myGameArea.canvas.width - 30) {
        direction = true;
    }
    if (direction == true) {
        playerobj.x -= speed;
    } else {
        playerobj.x += speed;
    }
}



/* Append/Remove boxshadow for chosen menuoption */
function resetOpt() {
    document.getElementById('greenButton').style.boxShadow = "0px 0px 0px 0px white";   
    document.getElementById('whiteButton').style.boxShadow = "0px 0px 0px 0px white";
    document.getElementById('blueButton').style.boxShadow = "0px 0px 0px 0px white";
    document.getElementById('redButton').style.boxShadow = "0px 0px 0px 0px white";
    document.getElementById('normal').style.boxShadow = "0px 0px 0px 0px white";
    document.getElementById('hard').style.boxShadow = "0px 0px 0px 0px white";
    document.getElementById('insane').style.boxShadow = "0px 0px 0px 0px white";
}

function appendOpt(num) {
    if (MenuSel == "top") {
        switch (num) {
            case 0:
                resetOpt()
                break;
            case 1:
                resetOpt()
                document.getElementById('greenButton').style.boxShadow = "0px 0px 0px 2px white";
                break;
            case 2:
                resetOpt()
                document.getElementById('blueButton').style.boxShadow = "0px 0px 0px 2px white";
                break;
            case 3:
                resetOpt()
                document.getElementById('redButton').style.boxShadow = "0px 0px 0px 2px white";
                break;
            case 4:
                resetOpt()
                document.getElementById('whiteButton').style.boxShadow = "0px 0px 0px 2px white";
        }
    }

    if (MenuSel == "bottom") {
        switch (num) {
            case 0:
                resetOpt()
                break;
            case 1:
                resetOpt()
                document.getElementById('normal').style.boxShadow = "0px 0px 0px 2px white";
                break;
            case 2:
                resetOpt()
                document.getElementById('hard').style.boxShadow = "0px 0px 0px 2px white";
                break;
            case 3:
                resetOpt()
                document.getElementById('insane').style.boxShadow = "0px 0px 0px 2px white";
                break;
        }
    }
}



/* Update game */
function updateGameArea() {
    myGameArea.clear();
    moveRedGuy();
    playerobj.update();
    if (lives == 0) {
        popUp(4)
        resetGame()
    }
}