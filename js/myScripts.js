function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;


    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }


    elmnt.onmousedown = dragMouseDown;

}

function insertPlayer(x,y){
    var img = document.createElement("img");
    var div = document.createElement("div");

    img.src = "img/player_red.png";
    img.className = "player";
    div.className = "playerDiv";

    var src = document.getElementById("drawArea");

    src.appendChild(div);
    div.appendChild(img);
    
    div.style.top = y;
    div.style.left = x;
    dragElement(div);

}

function insertBall(x,y){
    var img = document.createElement("img");
    var div = document.createElement("div");

    img.src = "img/ball_blue.png";
    img.className = "ball";
    div.className = "ballDiv";

    var src = document.getElementById("drawArea");

    src.appendChild(div);
    div.appendChild(img);
    
    div.style.top = y;
    div.style.left = x;
    dragElement(div);

}


function clickPlayerTool(){
    selectTool("player");
}


function clickBallTool(){
    selectTool("ball");
}   
    
    
function selectTool(tool){
    if (tool == "player") {
        document.getElementById("drawArea").onmousedown = toolPlayer
        console.log("Player Tool")
    } else if (tool == "ball") {
        document.getElementById("drawArea").onmousedown = toolBall
        console.log("Ball Tool")
    }
}


function toolBall(e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e){  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3;
        console.log(e.which)
    } else if ("button" in e)  // IE, Opera 
        isRightMB = e.button == 2;
    
    pos1 = e.clientX;
    pos2 = e.clientY;
    if(!isRightMB){
        insertBall(pos1,pos2)
    }
}
    
function toolPlayer(e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e){  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3;
        console.log(e.which)
    } else if ("button" in e)  // IE, Opera 
        isRightMB = e.button == 2;
    
    pos1 = e.clientX;
    pos2 = e.clientY;
    if(!isRightMB){
        insertPlayer(pos1,pos2)
    }
}





document.body.oncontextmenu = function (e) {
    e.preventDefault();
    return null
}

