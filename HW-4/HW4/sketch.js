function setup() {
    createCanvas(900,400);
    Background('grey')
}

function draw() {

    fill('salmon');
    rect( 60, 30, 780, 370, 50, 50, 0, 0 );


    fill('yellow');
    ellipse( 250, 160, 300, 50 );

    fill('orange');
    triangle( 20, 205, 250, 255, 480, 255 );
    rect( 60, 275, 120, 50 );
}
