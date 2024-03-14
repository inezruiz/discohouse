let color1; 
let color2;
let color3;
let color4;
let house = [];
let angle = 0;
let disco = false
let interval = 15000;
let interval2 = 30000;
let prevTime;
let counter = 0;
let timer = 0;


function setup() {
  createCanvas(900,800);
  cycleTime = 30; 
  frameRate(60)
  time = 0;
  fade = 0;
  
  color1 = color(random(255), random(255), random(255), 150);
  color2 = color(random(255), random(255), random(255), 150);
  color3 = color(random(255), random(255), random(255), 150);
  color4 = color(random(255), random(255), random(255), 150);
  
  prevTime = millis()

  }

function draw() {
  
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = color(0);
  background(135,206,235);
  

  //berg
  fill(0, 168, 14);
  ellipse(725,1050,1200,700);
  
  //schoorsteen
  noStroke();
  fill(246, 53, 0);
  house [1] = rect(870,160,100,250);
  
  //house
  noStroke();
  fill(222,164,135);
  house [2] = rect(400,400,635,400);
  
  //roof
  noStroke();
  fill(246, 53, 0);
  house [3] = triangle(400, 400, 1036, 400, 715, 130);
  
  //door
  noStroke();
  fill(139,69,19);
  house [4] = rect(650,600,130,200);
  
  //window1
  fill(255);
  house [5] = rect(470,450,100,100);
    
  //window2
  house [6] = rect(865,450,100,100);
  
  //window3
  house [7] = rect(470,620,100,100);
  
  //window4
  house [7] = rect(865,620,100,100);
  
  time += 1/60;
  let sun = (sin(time * 2 * PI / cycleTime)/2 + 0.5)
  
  blendMode(MULTIPLY)
  fill(135 * sun, 206 * sun, 235 * sun,200);
  rect(0,0,1900,1800)
  
  blendMode(BLEND)
  push()
    translate(width/2, height)
    rotate(-PI + time/cycleTime * 2 * PI)
    translate(height, 0)
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = color(255,255,153);
    fill(255,255,153,200)
    noStroke;
    circle(0, 0, 200);
  pop()
  
  if (millis ()> prevTime + interval) {
    disco = !disco;
    prevTime= millis()
    }
  
  if (disco) {
    
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(color1);
  //window1
  fill(color1);
  rect(470,450,100,100);
   
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(color2);
  //window2
  fill(color2);
  rect(865,450,100,100);
  
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(color3);
  //window3
  fill(color3);
  rect(470,620,100,100);
  
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(color4);
  //window4
  fill(color4);
  rect(865,620,100,100);
    
    
  if (counter > 7) {
    color1 = color(random(255), random(255), random(255));
    color2 = color(random(255), random(255), random(255));
    color3 = color(random(255), random(255), random(255));
    color4 = color(random(255), random(255), random(255));

    counter = 0;
  }

    counter = counter + 1;
    
   } 
   }
  

  
// function to go fullscreen

function mousePressed() {
    	let fs = fullscreen();
  fullscreen(!fs); 
}

function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
background(255);
}

