function setup() {
    createCanvas(900,400);
    background('grey');
}

function draw() {

    fill('salmon');
    rect( 60, 30, 780, 370, 100, 100, 1, 1 );

    fill('white');
    ellipse( 370, 300, 300, 60 );

    fill('black');
    rect( 700, 150, 100, 100, 90, 0, 150, 45 );
    rect( 200, 150, 100, 100, 0, 90 ,45, 150 );
}
