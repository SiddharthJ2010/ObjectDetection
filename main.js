img = "";

function preload()
{
    img = loadImage('tennis_racket.jpg');  
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 400);
    fill("#FF0000");
    text("Tennis Racket", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(50, 90, 450, 210);
}