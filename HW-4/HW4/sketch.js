function setup() {
    createCanvas(900,400);
    background('grey');
}

function draw() {

    fill('salmon');
    rect( 60, 30, 780, 370, 100, 100, 1, 1 );


    fill('white');
    ellipse( 370, 300, 300, 60 );

    fill('orange');
    triangle( 20, 205, 250, 255, 480, 255 );
    rect( 60, 275, 120, 50 );
}
