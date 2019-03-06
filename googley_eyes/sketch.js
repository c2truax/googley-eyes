var mx = 1;
var my = 1;
var mx2 = 301;
var easing = 0.05;
var radius = 60;
var edge = 40;
var inner = edge + radius;
var rect1;
var rect2;
var eyeHeight = 250;

function setup() {
  var canvas = createCanvas(500, 600);
  canvas.parent('googley');
  noStroke(); 
  ellipseMode(RADIUS);
  rectMode(CORNERS);
}

function draw() {
  background(255);
  fill(130,200,255);
  rect(0,0,width,height,50);
  
  if (abs(mouseX - mx) > 0.1) {
    mx = mx + (mouseX - mx) * easing;
  }
  if (abs(mouseX - mx2) > 0.1){
    mx2 = (mx2 + (mouseX - mx2) * easing);
  }
  if (abs(mouseY - my) > 0.1) {
    my = my + (mouseY- my) * easing;
  }
  
  mx = constrain(mx, inner, (width/2) - inner);
  mx2 = constrain(mx2, inner + (width/2), width - inner);
  my = constrain(my, inner, eyeHeight - inner);
  fill(255);
  rect1 = rect(edge, edge, (width/2)-edge, eyeHeight-edge, radius);
  fill(25);
  ellipse(mx, my, radius, radius);
  fill(255);
  rect2 = rect((width/2)+edge, edge, width-edge, eyeHeight-edge, radius);
  fill(25);
  ellipse(mx2, my, radius, radius);
  fill(255,200,102)
  ellipse((width/2),(height/2), 50, 90);
  fill(180,50,120)
  rect(edge, height-eyeHeight+(edge*2), width-edge, height-edge, abs(mouseX/10)+abs(mouseY/10), abs(mouseX/10)+abs(mouseY/10), abs(100-abs(mouseX/10)-abs(mouseY/10)), abs(100-abs(mouseX/10)-abs(mouseY/10)));
}