function setup() {
    createCanvas(900,400);
    background('grey');
}

function draw() {

    fill('salmon');
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
    rect( 250, 150, 100, 100, 10, 90);
    rect( 600, 150, 100, 100, 10, 90);
    fill('white');
    ellipse(290,200, 80,80);
    ellipse(660, 200, 80, 80);
//nose
    noFill();
    ellipse(455,385,100, 30);

    fill('black');
    ellipse(440,290, 30, 10);
    ellipse(480,290, 30,10);



}
