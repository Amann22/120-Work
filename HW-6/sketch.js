
var img;


function preload() {
    img = loadImage('images/wiz.jpg');
}

function setup() {
    createCanvas( 400, 600 );

}


function draw() {
    background( 'salmon' );

    image(img, 10, 10);
}
