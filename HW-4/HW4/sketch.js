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

    fill('white');
    arc(330,170,20,20,);


//nose
    fill('black');
    ellipse(430,300, 30, 10);
    ellipse(470,300, 30,10);


}
