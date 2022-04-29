export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;

    this.speed = 0;
    this.maxSpeed = 5;

    this.width = 150;
    this.height = 25;
    this.position = {
      x: game.gameWidth / 2,
      y: this.height + 540
    };
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  update() {
    this.position.x += this.speed;

    if (this.position.x < 0) this.moveRight();
    if (this.position.x + this.width > this.gameWidth) this.moveLeft();
  }
}
