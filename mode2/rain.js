class Drops {
  constructor(_speed) {
    this.xPos = round(random(windowWidth));
    this.yPos = round(random(windowHeight));
    this.len = round(random(50));
    this.speed = _speed;
  }

  display() {

    noFill();
    stroke(255);
    strokeWeight(1);
    line(this.xPos, this.yPos, this.xPos, this.yPos + this.len);
  }

  move() {

    if (this.yPos < height) {
      this.yPos += this.speed;

    } else {
      this.xPos = round(random(windowWidth));
      this.yPos = -round(random(windowHeight));
    }
  }

}
