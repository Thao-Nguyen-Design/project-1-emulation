dropArray2 = [];

let cnv;

let color3;
let color4;

// let mode2Button;

// let modeChoice = "mode2";

let rain2;
let volSlider;
let toggleButton;

function preload(){
  rain2 = loadSound("rain2.mp3");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("#canvasDiv");
  frameRate(60);

  textAlign(CENTER);
  ellipseMode(CENTER);
  textSize(32);
  angleMode(DEGREES);


  color3 = color(29, 15, 42);
  color4 = color(228, 226, 231);

toggleButton = select("#toggle");
toggleButton.mousePressed(togglePlaying);
toggleButton.class("toggleButton");

volSlider = select("#vol");
volSlider.mousePressed();
volSlider.class("volSlider");


rain2.loop();


for (let i = 0; i <= 150; i++) {
  dropArray2[i] = new Drops(40);
}

function togglePlaying(){
  if (!rain2.isPlaying()){
    rain2.loop();
    toggleButton.html("Pause Audio");
  } else {
    rain2.pause();
    toggleButton.html("Resume Audio");

  }
}

//   mode1Button = select("#mode1Button");
//   mode1Button.mousePressed(mode1);
//   mode1Button.class("mode1Button");

//   mode2Button = select("#mode2Button");
//   mode2Button.mousePressed(mode2);
//   mode2Button.class("mode2Button");

//   mode3Button = select("#mode3Button");
//   mode3Button.mousePressed(mode3);
//   mode3Button.class("mode3Button");

}

function draw() {
  getAudioContext().resume();

//   if (modeChoice == "mode1") {
    // mode1();

//   }
  // if (modeChoice == "mode2") {
    mode2();

    rain2.setVolume(volSlider.value());

  // }
  // if (modeChoice == "mode3") {
  //   mode3();
  // }

}

// function mode1() {
//   modeChoice = "mode1";
//
//   setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
//
//
//   clouds3(128, 193, 239, windowWidth * 0.01);
//
//   for (let i = 0; i < dropArray2.length; i++) {
//     dropArray1[i].display();
//     dropArray1[i].move();
//   }
//
//   clouds2(191, 224, 247, -windowWidth * 0.01);
//   clouds1(255, 255, 255, -windowWidth * 0.03);
//
// }

function mode2() {

  modeChoice = "mode2";

  setGradient(0, 0, windowWidth, windowHeight, color3, color4, "Y");

  clouds3(95, 80, 109, windowWidth * 0.01);

  for (let i = 0; i < dropArray2.length; i++) {
    dropArray2[i].display();
    dropArray2[i].move();
  }

  clouds2(121, 109, 133, -windowWidth * 0.01);

  clouds1(148, 139, 157, -windowWidth * 0.03);

}

// function mode3() {

//   modeChoice = "mode3";

//   setGradient(0, 0, windowWidth, windowHeight, color5, color6, "Y");

//   clouds3(54, 54, 54, windowWidth * 0.01);

//   for (let i = 0; i < 200; i++) {
//     dropArray[i] = new Drops(i*20);
//     dropArray[i].display();
//     dropArray[i].move();
//   }

//   clouds2(128, 128, 128, -windowWidth * 0.01);

//   clouds1(159, 159, 159, -windowWidth * 0.03);

// }

function clouds1(r, g, b, cloudY) {
  noStroke();
  fill(r, g, b);
  circle(0, cloudY, windowWidth * 0.23);
  circle(windowWidth * 0.15, cloudY, windowWidth * 0.2);
  circle(windowWidth * 0.3, cloudY, windowWidth * 0.27);
  circle(windowWidth * 0.45, cloudY, windowWidth * 0.25);
  circle(windowWidth * 0.6, cloudY, windowWidth * 0.28);
  circle(windowWidth * 0.75, cloudY, windowWidth * 0.25);
  circle(windowWidth * 0.9, cloudY, windowWidth * 0.21);
  circle(windowWidth, cloudY, windowWidth * 0.2);
}

function clouds2(r, g, b, cloudY) {
  noStroke();
  fill(r, g, b);
  circle(0, cloudY, windowWidth * 0.3);
  circle(windowWidth * 0.1, cloudY, windowWidth * 0.26);
  circle(windowWidth * 0.23, cloudY, windowWidth * 0.25);
  circle(windowWidth * 0.33, cloudY, windowWidth * 0.24);
  circle(windowWidth * 0.4, cloudY, windowWidth * 0.3);
  circle(windowWidth * 0.61, cloudY, windowWidth * 0.27);
  circle(windowWidth * 0.7, cloudY, windowWidth * 0.23);
  circle(windowWidth * 0.82, cloudY, windowWidth * 0.26);
  circle(windowWidth * 0.9, cloudY, windowWidth * 0.21);
  circle(windowWidth, cloudY, windowWidth * 0.22);
}

function clouds3(r, g, b, cloudY) {
  noStroke();
  fill(r, g, b);
  circle(0, cloudY, windowWidth * 0.3);
  circle(windowWidth * 0.1, cloudY, windowWidth * 0.25);
  circle(windowWidth * 0.2, cloudY, windowWidth * 0.3);
  circle(windowWidth * 0.4, cloudY, windowWidth * 0.32);
  circle(windowWidth * 0.55, cloudY, windowWidth * 0.3);
  circle(windowWidth * 0.67, cloudY, windowWidth * 0.26);
  circle(windowWidth * 0.8, cloudY, windowWidth * 0.32);
  circle(windowWidth * 0.9, cloudY, windowWidth * 0.27);
  circle(windowWidth, cloudY, windowWidth * 0.24);
}



function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") { // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") { // Left to right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
