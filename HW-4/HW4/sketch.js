function setup() {
    createCanvas(900,400);
    background('lavender');
}

function draw() {

    fill('salmon');
    rect( 60, 30, 780, 370, 100, 100, 1, 1 );
    ellipse(90,200, 100,200);

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
    ellipse(450,35, 78,120);
    ellipse(350,35, 89,111);
    ellipse(100,40, 70,120);
    ellipse(590,20, 75,110);
    ellipse(660,30, 80,130);



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

//nose
    noFill();
    ellipse(455,285,100, 30);

    fill('black');
    ellipse(440,290, 30, 10);
    ellipse(480,290, 30,10);
}
