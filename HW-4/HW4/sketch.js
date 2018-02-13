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

//eyes
    fill('black');
    rect( 300, 150, 100, 100, 90, 10 );
    rect( 500, 150, 100, 100, 90, 10);

    noFill();
    ellipse(420,300,100, 30);

//nose
    fill('black');
    ellipse(430,300, 30, 10);
    ellipse(470,300, 30,10);

    nofill();
    ellipse(420,300,80, 20);


}
