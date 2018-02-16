function setup() {
    createCanvas(900,400);
    background('lavender');
}

function draw() {

    fill('salmon');
    ellipse(830,210,100,200);
    rect( 60, 30, 780, 370, 100, 100, 1, 1 );
    ellipse(90,210, 100,200);


    line(120,110, 720,110);
    line(135,130, 720,130);
    line(120,90,710,90);
    line(420,200,520,200);
    line(430,190,510,190);
//mouth
    fill('white');
    ellipse( 400, 350, 300, 60 );
    line(250 ,350, 550, 350);
    line(350,340,350,360);
    line(450,340,450,360);
    line(300,340,300,360);
    line(400,340,400,360);
    line(500,340,500,360);

      fill('rgb(255,160,122)');
    //hair
    ellipse(300,20, 80,120);
    ellipse(80,30, 80,130);
    ellipse(160,50, 80,110);
    ellipse(220,35, 75,120);
    ellipse(400,20, 90,100);
    ellipse(500,35, 89,130);
    ellipse(600,35, 78,100);
    ellipse(505,35, 89,110);
    ellipse(280,35, 90,100);
    ellipse(700,35, 89,120);
    ellipse(750,35, 90,150);
    ellipse(550,35,90,150);
    ellipse(450,35, 78,120);
    ellipse(350,35, 89,111);
    ellipse(100,40, 70,120);
    ellipse(590,20, 75,110);
    ellipse(660,30, 80,130);
//thinhair
ellipse(300,20, 43,120);
ellipse(80,30, 32,130);
ellipse(160,50, 25,110);
ellipse(220,35, 36,120);
ellipse(400,20, 36,100);
ellipse(500,35, 23,130);
ellipse(600,35, 53,100);
ellipse(505,35, 45,110);
ellipse(280,35, 23,100);
ellipse(700,35, 12,120);
ellipse(750,35, 23,150);
ellipse(450,35, 12,120);
ellipse(350,35, 23,111);
ellipse(100,40, 43,120);
ellipse(590,20, 23,110);
ellipse(660,30, 43,130);


//eyes
    fill('black');
    rect( 250, 150, 100, 100, 10, 90);
    rect( 600, 150, 100, 100, 10, 90);
    fill('white');
    ellipse(290,200, 80,80);
    ellipse(660, 200, 80, 80);
    fill('black');
    ellipse(292,202, 65,65);
    ellipse(662,202,65,65);
    fill('white');
    ellipse(294,204,50,50);
    ellipse(664,204,50,50);
    fill('black');
    ellipse(296,206,35,35);
    ellipse(666,206,35,35);
    fill('white');
    ellipse(298,208,25,25);
    ellipse(668,208,25,25);
    fill('black');
    ellipse(300,210,15,15);
    ellipse(670,210,15,15);

    line(348,210,320,280);
    line(602,210,640,280);

//nose
    noFill();
    ellipse(455,285,100, 30);

    fill('black');
    ellipse(440,290, 30, 10);
    ellipse(480,290, 30,10);

    nofill();
    triangle(100,225,100,240,115,232);


}
