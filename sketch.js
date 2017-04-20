function setup() {
  createCanvas(800, 600);

}


function draw() {
  var red=random(255);
  var green=random(255);
  var blue=random(255);
  rect(mouseX,mouseY,50,50);
  if (mouseIsPressed) {
    fill(0);
} else {
  stroke(255, 255, 255, 25);

  fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
}


}
