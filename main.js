function preload() {}

function setup() {
    canvas = createCanvas(640, 550);
    canvas.position(110,200);
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 230, 220,220);

    fill(255, 0, 0);
    stroke(255,0,0);
    circle(60, 50, 80);

    circle(60, 465, 80);

    circle(590, 50, 80);

    circle(590, 465, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 465, 460, 20);

    rect(90, 50, 20, 430);

    rect(550, 50, 20, 430);
}

function take_snapshot() {
    save('image.png');
}