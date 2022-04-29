import Paddle from "/src/paddle";
import InputHandler from "/src/inputHandler";
import Ball from "/src/ball";
import Brick from "/src/brick";

import { buildLevel, level1 } from "/src/levels";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start(ctx) {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle);
    this.paddle.draw(ctx);
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));

    this.gameObjects = this.gameObjects.filter(
      (object) => !object.markedForDeletion
    );
  }
}
