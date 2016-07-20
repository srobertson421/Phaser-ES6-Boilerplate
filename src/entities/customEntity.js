import Phaser from 'phaser';

export class CustomEntityName extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'nameOfEntity');

    // Set sprite attributes
    // this.anchor.setTo(0.5);

    // Can add animations
    // this.animations.add('left', [3,4,5]);
    // this.animations.add('right', [0,1,2]);

    // Activate physics
    // this.game.physics.enable(this, Phaser.Physics.ARCADE);
    // this.body.drag.set(100);
    // this.body.maxVelocity.set(500);
    // this.body.collideWorldBounds = true;
    // this.body.width -= 32;
    // this.body.height -= 32;

    // Create cursors, keys, gamepad, etc
    // this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  // Movement function
  // move() {
  //   if (this.cursors.up.isDown) {
  //     this.body.acceleration.y = -300;                   
  //   } else if (this.cursors.down.isDown) {            
  //     this.body.acceleration.y = 300;           
  //   } else {
  //     this.body.acceleration.y = 0;
  //   }
  //   if (this.cursors.left.isDown) {       
  //     this.body.acceleration.x = -300;
  //     this.animations.play('left', 4, true);
  //   } else if (this.cursors.right.isDown) {          
  //     this.body.acceleration.x = 300;
  //     this.animations.play('right', 4, true);
  //   } else {            
  //     this.body.acceleration.x = 0;
  //   }
  // }
}