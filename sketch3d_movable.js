

let stars = [];
let angle = 0;
let boxSize = 0;
let timer = 0;
let bgblue = 10;
let fallingstartimer = Math.floor(Math.random() * 1001);

function setup() {
    noCursor();
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('sketch3d_movable');  // Attach canvas to the div
    canvas.style('position', 'fixed');  // Ensure canvas is fixed
    canvas.style('top', '0');  // Align the canvas to the top of the page
    canvas.style('left', '0');  // Align the canvas to the left of the page
    canvas.style('z-index', '-1');  // Put the canvas behind the content

    for (let i = 0; i < 1000; i++) {
        let x = random(-1200, 1200);
        let y = random(-1200, 1200);
        let z = random(-1200, 1200);
        stars.push(createVector(x, y, z));
    }
}

function draw() {
    // timer += 1;
    // if (timer == 20) {
        background(0,0,bgblue);
    //     timer = 0;
    // }

    // oude html kleur:rgb(4, 1, 20)


    ambientLight(255);

    let radius = 800-boxSize;
    let camX = radius * cos(angle+90);
    let camZ = radius * sin(angle+90);
    let camY = -500;

    camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);

    angle = (mouseX/windowWidth) * 0.1;
    radius = (mouseY/windowHeight) * 0.1;

    noStroke();
    fill(180);
    for (let star of stars) {
        push();
        translate(star.x, star.y, star.z);
        if (Math.floor(Math.random() * 5001)< 2) {
            fill(255);
            cone(3);
            fill(80);
        } else { sphere(2); }
        pop();
    }
    stroke(150);
    noFill();

    // if (boxSize > 0) boxSize -= 2;
    stroke(180);
    box(40);
    
    orbitControl();

    if (bgblue > 12) bgblue -= 2;

// }
// function mouseClicked() {
//     boxSize = 60;
}


// function mouseDragged() {
//     if (bgblue < 60) bgblue += 3;
//     background(-10+bgblue,-10+bgblue,bgblue);
// }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


// function fallingstar() {
//     let x1 = random(-1200, 1200);
//     let y1 = random(-1200, 1200);
//     let z1 = random(-1200, 1200);
//     let x2 = random(-1200, 1200);
//     let y2 = random(-1200, 1200);
//     let z2 = random(-1200, 1200);
// }

// let canvas;
// let amountStars = 100;

// class Star {
//     constructor(x, y, z) {
//         this.x = (Math.random() - 0.5) * 100;
//         this.y = (Math.random() - 0.5) * 100;
//         this.z = (Math.random() - 0.5) * 100;
//     }
//     place() {
//         pop();
//         translate(this.x, this.y, this.z);
//         sphere(4, 3);
//     }
// }

// function setup() {
//     noCursor();
//     canvas = createCanvas(windowWidth, windowHeight, WEBGL);
//     canvas.parent('davotwo');
//     canvas.style('z-index', '-1');
//     canvas.position(0, 0);
//     background(0,0,20);

//     stroke(255,255,255);
//     noStroke();
//     fill(255);



//     for (let i = 0; i < starAmount; i++) {
        



//     }

//     pop();
//     translate((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100);
//     sphere(4, 3);
// }
  
// function draw() {
//   // camera(500*cos(frameCount * 0.001) - 250, 500*cos(frameCount * 0.001) - 250, 500*cos(frameCount * 0.001) - 250, 0, 0, 0);
  
//   // background(10, 10, 41);


//   // circle(mouseX, mouseY, 5);


    
    
    
//     // sphere(2000);
//     box(400);
    // orbitControl();
  
// }