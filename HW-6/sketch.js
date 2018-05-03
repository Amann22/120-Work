
let img;

function preload() {
    img = loadImage('./images/enchi.jpg');
}

function setup() {
    createCanvas( windowWidth, 600 );
}


function draw() {
    background( 'pink' );

    image(img, 10, 10);
}
