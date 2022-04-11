const socket = io();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

  socket.connect();
}

function draw() {
  noStroke();
  fill(255, 50, 50);
  ellipse(mouseX, mouseY, 36, 36);
}
