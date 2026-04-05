let testobjectje
let testobjtext;
let camera;

function preload() {
    testobjectje = loadModel('/public/object_assets/flikkendoos/flikkendoos.obj', true);
    testobjtext = loadImage('/public/object_assets/flikkendoos/flikkendoos.jpg');
    //   testobjectje.setTexture(testobjtext);
}

function setup() {
        noCursor();
        canvas = createCanvas(300, 300, WEBGL);
        canvas.parent('flikkendoos');
        camera = createCamera();
}

function OrbitControlJustLeftButton() {
        this._setProperty('_pmouseWheelDeltaY', 0);
        this._setProperty('_mouseWheelDeltaY', 0);  
        if (mouseButton == LEFT) orbitControl();  
}

function draw() {
        clear();
        noStroke();


        OrbitControlJustLeftButton()

        

        // specularMaterial(50);
        metalness(255);

        texture(testobjtext);
        model(testobjectje);
        ambientLight(80);
        console.log(camera.eyeX, camera.eyeY, camera.eyeZ);
        camera.lookAt(0, 0, 0);
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let testobjectje
// let testobjtext;
// let camera;



// const flying_object = (flob) => {


//     flob.preload = () => {
//     testobjectje = loadModel('/public/object_assets/testobject/testobject.obj', true);
//     testobjtext = loadImage('/public/object_assets/testobject/testobject.jpg');
//     //   testobjectje.setTexture(testobjtext);
//     }

//     flob.setup = () => {
//         flob.noCursor();
//         flob.canvas = flob.createCanvas(300, 300, WEBGL);
//         canvas.parent('testobject');
//         camera = createCamera();
//     }

//     flob.orbitControlJustLeftButton = () => {
//         // remove Wheel actions
//         this._setProperty('_pmouseWheelDeltaY', 0);
//         this._setProperty('_mouseWheelDeltaY', 0);  
//         // Just apply orbitControl on Left Button Actions
//         if (mouseButton == LEFT)
//         flob.orbitControl();  
//     }


//     flob.draw = () => {
//         flob.clear();
//         flob.noStroke();
//         // orbitControl();

//         flob.orbitControlJustLeftButton()

        

//         // specularMaterial(50);
//         flob.metalness(50);

//         flob.texture(testobjtext);
//         flob.model(testobjectje);
//         flob.ambientLight(80);
//         flob.console.log(camera.eyeX, camera.eyeY, camera.eyeZ);
//         flob.camera.lookAt(0, 0, 0);
//     }
// }




// let boxcolor = (40, 40, 40);
// let options = {
//     disableTouchActions: false, 
//     freeRotation: true
// }

// let coolcam;

// let stars = [];
// let angle = 0;
// let boxSize = 0;
// let timer = 0;
// let bgblue = 10;
// let swagP;
// let scrollY = 0;
// let scrollPos = 0;
// let fallingstartimer = Math.floor(Math.random() * 1001);






// let radius = 700-boxSize;
// let camX = radius * Math.cos(angle+90);
// let camZ = radius * Math.sin(angle+90);
// let camY = 0;

// let randomC = Math.random()*50;

// const skydome = (skydo) => {
//     // JE WAS DE CODE VAN DE SKYDOME MET DE FLOB AAN HET COMBINEREN!!!!!
// // maak van elke functie een skydo.functie = () => {}
//     skydo.setup = () => {
//         noCursor();
//         canvas = createCanvas(windowWidth, windowHeight, WEBGL);
//         canvas.parent('skydome');  // Attach canvas to the div
//         canvas.style('position', 'fixed');  // Ensure canvas is fixed
//         canvas.style('top', '0');  // Align the canvas to the top of the page
//         canvas.style('left', '0');  // Align the canvas to the left of the page
//         canvas.style('z-index', '-1');  // Put the canvas behind the content

//         for (let i = 0; i < 1000; i++) {
//             let x = random(-1200, 1200);
//             let y = random(-1200, 1200);
//             let z = random(-1200, 1200);
//             stars.push(createVector(x, y, z));
//         }

//         coolcam = createCamera();
//         setCamera(coolcam);
//         frameRate(60);
//         // mouseWheelFunction(1);
//         background(6,0,15,0.1);
//     }


//     skydo.draw = () => {
//     timer += 1;

//         if (timer > 960) {
//             // background(6,0,15,0.1);
//         }
//         if (timer == 1000) {
//                 timer = 0;
//                 background(10,0,15,150);
//                 camY = 0;
//                 // camera(Math.random()*30,Math.random()*30,(Math.random()*30)+800);
//                 // camera(Math.random()*30,Math.random()*30,(Math.random()*30)+800);
//                 randomC = Math.random()*300;
//                 coolcam.roll(30);
//                 // camera.lookAt(randomC,randomC,randomC);
//         }

            

//         // background(0, 0, 0, 255);
//         ambientLight(255);
//         // coolcam.camera(mouseX/1-(windowWidth/200)+400,mouseX/1-(windowHeight/200)+400+timer/5,100);
//         let radius = 800-boxSize;
//         let camX = radius * cos(angle+90) + randomC;
//         let camZ = radius * sin(angle+90) + randomC;
//         // let camY = -500;
//         // let camX, camY, camZ = 0;
//         coolcam.camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);

//         angle = (mouseX/windowWidth) * 1;
//         radius = (mouseY/windowHeight) * 1;

//         noStroke();
//         for (let star of stars) {
//             push();
//             translate(star.x, star.y, star.z);
//             fill(150,150,255,20);
//             specularMaterial(255);
//             if (Math.floor(Math.random() * 5001)< 2) {
//                 cone(3);
//                 fill(1);
//             } else { 
//                 sphere(2); 

//             }
//             pop();

//             // rewind time!
//             push();
//             translate(star.x+Math.random()*100, star.y+Math.random()*100, star.z+Math.random()*100);
//             fill(205-(timer/16),20,160,7);
//             specularMaterial(255);
//             if (Math.floor(Math.random() * 5001)< 2) {
//                 cone(3);
//                 fill(1);
//             } else { 
//                 sphere(1); 

//             }
//             pop();

//             // rewind time!
//             push();
//             translate(star.x+Math.random()*100, star.y+Math.random()*100, star.z+Math.random()*100);
//             fill(200,150,150,2);
//             if (Math.floor(Math.random() * 5001)< 2) {
//                 cone(3);
//                 fill(1);
//             } else { 
//                 sphere(2); 

//             }
//             pop();

            
//         }
//         stroke(150);
//         noFill();

//         if (boxcolor > 100) boxcolor = 100;
//         stroke(boxcolor);
//         // box(30);

        
//         // orbitControl();
//         // orbitControlJustLeftButton();

//         if (boxcolor > 60) boxcolor -= 2;

//         if (boxcolor < 59) boxcolor = 60;
//         console.log(boxcolor);

//     }

//     skydo.mouseWheel = (event) => {
//         mouseWheelFunction(event.delta);
//     }

//     skydo.mouseMoved = () => { if (boxcolor < 100) boxcolor += 10;
//     }

//     skydo.windowResized = () => { resizeCanvas(windowWidth, windowHeight);
//     }
// }