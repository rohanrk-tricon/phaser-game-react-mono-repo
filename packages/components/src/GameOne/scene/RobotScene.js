import Phaser from 'phaser';

const gameState = { counter: 0 };

export default class RobotScene extends Phaser.Scene {
  constructor() {
    super({ key: 'RobotScene' });
  }

  preload() {
    this.load.image('background', '/assets/background-turtle.png');
    this.load.spritesheet(
      'codey',
      'https://content.codecademy.com/courses/learn-phaser/Cave%20Crisis/codey_sprite.png',
      { frameWidth: 72, frameHeight: 90 }
    );
  }

  create() {
    // var bg = this.add.sprite(1290, 360, 'background');
    gameState.that = this;
    gameState.bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
    gameState.bg.setDisplaySize(1290, 720);

    gameState.player = this.physics.add.sprite(210, 430, 'codey').setScale(0.8);

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('codey', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('codey', { start: 4, end: 5 }),
      frameRate: 5,
      repeat: -1,
    });

    this.input.on('pointerup', () => {
      gameState.counter += 1;
      gameState.player.anims.play('run', true);
      if (gameState.counter === 1) {
        updatePlayerPosition(gameState.player, 420, 280);
      } else if (gameState.counter === 2) {
        updatePlayerPosition(gameState.player, 630, 430);
      } else if (gameState.counter === 3) {
        updatePlayerPosition(gameState.player, 880, 280);
      } else if (gameState.counter === 4) {
        updatePlayerPosition(gameState.player, 1060, 420);
      } else {
        gameState.player.anims.play('idle', true);
      }
    });
    function updatePlayerPosition(player, x, y) {
      gameState.that.tweens.add({
        targets: player,
        x: x,
        y: y,
        ease: 'Linear',
        duration: 1800,
        repeat: 0,
        // yoyo: true,
      });
      setTimeout(() => {
        if (player.x === x && player.y === y) {
          gameState.player.anims.play('idle', true);
        }
      }, 1900);
    }
  }

  update() {}
}
