canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_Width = 100;
rover_Height = 90;
roverX = 10;
roverY = 10;
Marsimg_Array = ["Mars1.jpg", "Mars2.jpg", "Mars3.jpg", "Mars4.jpg", "Mars5.jpg"];
rndmNumber = Math.floor(Math.random() * 5);
backgroundImg = Marsimg_Array[rndmNumber];
roverImg = "rover.png";

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, roverX, roverY, rover_Width, rover_Height);
}

function Add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = backgroundImg;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = roverImg;
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
}

function up() {
    if (roverY >= 0) {
        roverY = roverY - 10;
        console.log("When up arrow is pressed = " + roverX + " - " + roverY);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (roverY <= 500) {
        console.log("When down arrow is pressed = " + roverX + roverY);
        roverY += 10;
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if (roverX >= 0) {
        roverX = roverX - 10;
        console.log("When left arrow is pressed = " + roverX + roverY);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (roverX <= 700) {
        roverX = roverX + 10;
        console.log("When right arrow  is pressed = " + roverX + roverY);
        uploadBackground();
        uploadRover();
    }
}