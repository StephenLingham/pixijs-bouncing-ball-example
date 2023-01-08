const renderer = new PIXI.Renderer({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x1099bb,
});
document.body.appendChild(renderer.view);

const stage = new PIXI.Container();

const ball = new PIXI.Sprite(PIXI.Texture.from("ball.png"));
ball.anchor.set(0.5);
ball.x = 0;
ball.y = 200;
ball.scale.set(0.1, 0.1);
stage.addChild(ball);

let velocityX = 6;
let velocityY = 0;
let gravity = 0.5;

// Update the ball's position on each frame
const update = () => {
  velocityY += gravity;

  ball.x += velocityX;
  ball.y += velocityY;

  if (ball.y > window.innerHeight) {
    velocityY = -velocityY;
    ball.y = window.innerHeight;
  }

  if (ball.x > window.innerWidth) {
    velocityX = -velocityX;
    ball.x = window.innerWidth;
  }

  if (ball.x < 0) {
    velocityX = -velocityX;
    ball.x = 0;
  }

  renderer.render(stage);

  // Request the next frame
  requestAnimationFrame(update);
};

// Start the animation loop
update();
