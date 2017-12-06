function bgStyle(col) {
    var bgCol;
    if(col == 1) bgCol = "5A5A5A"; /*"5489a0";*/
    else if(col == 2) bgCol = "a05489";
    else bgCol = "ddddbb";
    
    document.getElementsByTagName('body')[0].style.backgroundColor = "#" + bgCol;
}