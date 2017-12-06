var stri = "";
var max_width = 500;
var max_length = 500;
var max_repeat = Number((max_width*max_length).toString().length) + 1;


function infiniPly() {
    for (i = 1; i < max_length + 1; i++) {
        stri += "\n"
        for (a = 1; a < max_width + 1; a++) {
            stri += (a*i).toString() + "\xa0".repeat(max_repeat - Number((a*i).toString().length));
            }
        }
    var oNewP = document.createElement("p");
    var oText = document.createTextNode(stri);
    oNewP.appendChild(oText);
    document.body.appendChild(oNewP);
}