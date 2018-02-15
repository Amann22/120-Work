function setup() {
    createCanvas(900,400);
    background('grey');
}

function draw() {

    fill('violet');
    rect( 60, 30, 780, 370, 100, 100, 1, 1 );

//mouth
    fill('white');
    ellipse( 400, 350, 300, 60 );
    line(250 ,350, 550, 350);
    line(350,340,350,360);
    line(450,340,450,360);
    line(300,340,300,360);
    line(400,340,400,360);
    line(500,340,500,360);

//eyes
    fill('black');
    rect( 300, 150, 100, 100, 90, 10 );
    rect( 500, 150, 100, 100, 90, 10);

    noFill();
    ellipse(440,300,100, 30);

//nose
    fill('black');
    ellipse(430,300, 30, 10);
    ellipse(470,300, 30,10);

    nofill();
    ellipse(420,300,80, 20);

    fill('purple');
    rotate( radians(30));
    arc(200, 200, 80, 80, 0, PI + QUARTER_PI, PIE);

}
