// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

// Set initial positions for ball and hole images
var ball_y = 0;
var ball_x = 0;
var hole_y = 400;
var hole_x = 800;

var block_image_width = 50;
var block_image_height = 50;

// Function to load images
function load_img() {
    fabric.Image.fromURL("golf-h.png", function(Img) {
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(hole_obj);
    });

    fabric.Image.fromURL("ball.png", function(Img) {
        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_obj);
    });
}

// Event listener for keydown events
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (ball_x == hole_x && ball_y == hole_y) {
        canvas.remove(ball_obj);
        document.getElementById("hd3").innerHTML="You have hit he Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";


    } else {
        if (keyPressed == 38) {
            up();
            console.log("up");
        }
        if (keyPressed == 40) {
            down();
            console.log("down");
        }
        if (keyPressed == 37) {
            left();
            console.log("left");
        }
        if (keyPressed == 39) {
            right();
            console.log("right");
        }
    }
}

// Movement functions
function up() {
    if (ball_y > 0) {
        ball_y -= block_image_height;
        canvas.remove(ball_obj);
        new_image();
    }
}

function down() {
    if (ball_y <= canvas.height - block_image_height) {
        ball_y += block_image_height;
        canvas.remove(ball_obj);
        new_image();
    }
}

function left() {
    if (ball_x > 0) {
        ball_x -= block_image_width;
        canvas.remove(ball_obj);
        new_image();
    }
}

function right() {
    if (ball_x <= canvas.width - block_image_width) {
        ball_x += block_image_width;
        canvas.remove(ball_obj);
        new_image();
    }
}

// Function to create new image instance
function new_image() {
    fabric.Image.fromURL("ball.png", function(Img) {
        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_obj);
    });
}

// Initialize the game
load_img();
