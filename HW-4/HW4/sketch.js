function setup() {
    createCanvas(900,400);
    background('grey');
}

function draw() {

    fill('salmon');
    rect( 60, 30, 780, 370, 100, 100, 1, 1 );

//mouth
    fill('white');
    ellipse( 370, 300, 300, 60 );

//eyes
    fill('black');
    rect( 700, 150, 100, 100, 90, 0, 50, 45 );
    rect( 400, 150, 100, 100, 90, 10 ,150, 45 );
}
