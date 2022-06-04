var ball = document.getElementById("ball");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var block4 = document.getElementById("block4");
//////////////////////////////////////////////
var sideBlock1 = document.getElementById("sideBlock1");
var sideBlock2 = document.getElementById("sideBlock2");
var sideBblock3 = document.getElementById("sideBlock3");
var sideBblock4 = document.getElementById("sideBlock4");
var widthBlock1;
var widthBlock2;
var widthBlock3;
var widthBlock4;
///////////////
var widthsideBlock1;
var widthsideBlock2;
var widthsideBlock3;
var widthsideBlock4;
var left = 0;
var s = 1;
var isFalling = 1;
var x = 0;
var y = 200;
var z = 400;
var a = 600;
var topBlock1;
var topBlock2;
var topBlock3;
var topBlock4;
//////////////
var topsideBlock1;
var topsideBlock2;
var topsideBlock3;
var topsideBlock4;
var sL = 0;
var isLeft = 0;
var isRight = 0;


function moveLeft() {
    sL = 6;
    isRight = 0;
    isLeft = 1;
}
function moveRight() {
    sL = 6;
    isLeft = 0;
    isRight = 1;
}

function jump() {
    s=6;
    isFalling = 0;
}

function main() {
    var top = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
    topBlock1 = parseInt(window.getComputedStyle(block1).getPropertyValue("top"));
    topBlock2 = parseInt(window.getComputedStyle(block2).getPropertyValue("top"));
    topBlock3 = parseInt(window.getComputedStyle(block3).getPropertyValue("top"));
    topBlock4 = parseInt(window.getComputedStyle(block4).getPropertyValue("top"));
    widthBlock1 = parseInt(window.getComputedStyle(block1).getPropertyValue("width"));
    widthBlock2 = parseInt(window.getComputedStyle(block2).getPropertyValue("width"));
    widthBlock3 = parseInt(window.getComputedStyle(block3).getPropertyValue("width"));
    widthBlock4 = parseInt(window.getComputedStyle(block4).getPropertyValue("width"));
    //////////////////////////////////////////////////////////////////////////////////
    topsideBlock1 = parseInt(window.getComputedStyle(sideBlock1).getPropertyValue("top"));
    topsideBlock2 = parseInt(window.getComputedStyle(sideBlock2).getPropertyValue("top"));
    topsideBlock3 = parseInt(window.getComputedStyle(sideBlock3).getPropertyValue("top"));
    topsideBlock4 = parseInt(window.getComputedStyle(sideBlock4).getPropertyValue("top"));
    widthsideBlock1 = parseInt(window.getComputedStyle(sideBlock1).getPropertyValue("width"));
    widthsideBlock2 = parseInt(window.getComputedStyle(sideBlock2).getPropertyValue("width"));
    widthsideBlock3 = parseInt(window.getComputedStyle(sideBlock3).getPropertyValue("width"));
    widthsideBlock4 = parseInt(window.getComputedStyle(sideBlock4).getPropertyValue("width"));

    //falling physics
    //falling physics
    if (isFalling == 1){
    top = top + s;
    s = s + 0.1;
    console.log("isFalling == 1")
    console.log(s);
    console.log(top);
    ball.style.top = top + "px";
    };
    if (isFalling == 0){
    top = top - s;
    s = s - 0.2;
    console.log("isFalling == 0")
    console.log(s);
    console.log(top);
    ball.style.top = top + "px";
    if (s<0){
        isFalling = 1;
    };
    };
    //left right physics
    if (isLeft==1){
        left = left - sL;
        sL = sL - 0.05;
        ball.style.left = left + "px";
        if (sL<0){
            isLeft=0;
        }
    }
    if (isRight==1){
        left = left + sL;
        sL = sL - 0.05;
        ball.style.left = left + "px";
        if (sL<0){
            isRight=0;
        }
    }
    //box parameters
    if (top > 775) {
        isFalling = 0;
        ball.style.top = 775 + "px";
    };

    if (left > 585) {
        sL ++;
        isRight = 0;
        isLeft = 1;
    };

    if (left < 0) {
        sL ++;
        isLeft = 0;
        isRight = 1;
    };

    if (top < 0) {
        isFalling = 1;
    }

    //bars for falling
    if (isFalling==1) {
        //first bar
        if (top > x-25 && top < x+20 && left < widthBlock1) {isFalling = 0;}
        //second bar
        if (top > y-25 && top < y+20 && left < widthBlock2) {isFalling = 0;}
        //third bar
        if (top > z-25 && top < z+20 && left < widthBlock3) {isFalling = 0;}
        //fourth bar
        if (top > a-25 && top < a+20 && left < widthBlock4) {isFalling = 0;}
        /////////////////////////////////////////////////////////////////////
        if (top > x-25 && top < x+20 && left > widthBlock1+100) {isFalling = 0;}
        //second bar
        if (top > y-25 && top < y+20 && left > widthBlock2+100) {isFalling = 0;}
        //third bar
        if (top > z-25 && top < z+20 && left > widthBlock3+100) {isFalling = 0;}
        //fourth bar
        if (top > a-25 && top < a+20 && left > widthBlock4+100) {isFalling = 0;}

    }
    //bars for going uppy lol
    if (isFalling==0) {
        //first bar
        if (top < x+50 && top>x && left < widthBlock1) {isFalling = 1;}
        //second bar
        if (top < y+50 && top>y && left < widthBlock2) {isFalling = 1;}
        //third bar
        if (top < z+50 && top>z && left < widthBlock3) {isFalling = 1;}
        //fourth block
        if (top < a+50 && top>a && left < widthBlock4) {isFalling = 1;}
        ///////////////////////////////////////////////////////////////
        if (top < x+50 && top>x && left > widthBlock1+100) {isFalling = 1;}
        //second bar
        if (top < y+50 && top>y && left > widthBlock2+100) {isFalling = 1;}
        //third bar
        if (top < z+50 && top>z && left > widthBlock3+100) {isFalling = 1;}
        //fourth block
        if (top < a+50 && top>a && left > widthBlock4+100) {isFalling = 1;}
    }
    //first block
    block1.style.top = x + "px";
    x = x + 1;
    //second block
    block2.style.top = y + "px";
    y = y + 1;
    //third block
    block3.style.top = z + "px";
    z = z + 1;
    //fourth block
    block4.style.top = a + "px";
    a = a + 1;
    ////////////////////////////
    sideBlock1.style.top = x + "px";
    x = x + 1;
    //second block
    sideBlock2.style.top = y + "px";
    y = y + 1;
    //third block
    sideBlock3.style.top = z + "px";
    z = z + 1;
    //fourth block
    sideBlock4.style.top = a + "px";
    a = a + 1;
    //floor for bars reset
    if (topBlock1 > 775) {
        x = 0;
        block1.style.top = 0 + "px"; 
        widthBlock1 =  Math.floor(Math.random() * 500);
        block1.style.width = widthBlock1 + 'px';
        sideBlock1.style.left = widthBlock1 + 100 + 'px';
    }
    if (topBlock2 > 775) {
        y = 0;
        block2.style.top = 0 + "px";  
        widthBlock2 =  Math.floor(Math.random() * 500);
        block2.style.width = widthBlock2 + 'px';
        sideBlock2.style.left = widthBlock2 + 100 + 'px';
    }
    if (topBlock3 > 775) {
        z = 0;
        block3.style.top = 0 + "px";  
        widthBlock3 =  Math.floor(Math.random() * 500);
        block3.style.width = widthBlock3 + 'px';
        sideBlock3.style.left = widthBlock3 + 100 + 'px';
    }
    if (topBlock4 > 775) {
        a = 0;
        block4.style.top = 0 + "px";  
        widthBlock4 =  Math.floor(Math.random() * 500);
        block4.style.width = widthBlock4 + 'px';
        sideBlock4.style.left = widthBlock4 + 100 + 'px';
    }
}


//keys 
document.addEventListener("keydown", event=> {
    if (event.key == "ArrowLeft"){
        
        moveLeft();
        
    }
    if (event.key == "ArrowRight"){

        moveRight();    

    }    

    if (event.key == "ArrowUp"){

        jump();
    }
    
})

function start() {
    x = setInterval(main, 16.6);
    document.getElementById("startbutton").disabled = true;
}


