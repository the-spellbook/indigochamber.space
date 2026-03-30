let testobjectje
let testobjtext
let camera


function preload() {
  testobjectje = loadModel('/public/object_assets/testobject/testobject.obj', true);
  testobjtext = loadImage('/public/object_assets/testobject/testobject.jpg');
//   testobjectje.setTexture(testobjtext);
}

function setup() {
    noCursor();
    canvas = createCanvas(300, 300, WEBGL);
    canvas.parent('testobject');
    camera = createCamera();
}

function orbitControlJustLeftButton() {
    // remove Wheel actions
    this._setProperty('_pmouseWheelDeltaY', 0);
    this._setProperty('_mouseWheelDeltaY', 0);  
    // Just apply orbitControl on Left Button Actions
    if (mouseButton == LEFT)
       orbitControl();  
 }


function draw() {
    clear();
    noStroke();
    // orbitControl();

    orbitControlJustLeftButton()

    

    // specularMaterial(50);
    metalness(50);

    texture(testobjtext);
    model(testobjectje);
    ambientLight(80);
    console.log(camera.eyeX, camera.eyeY, camera.eyeZ);
    camera.lookAt(0, 0, 0);
}

