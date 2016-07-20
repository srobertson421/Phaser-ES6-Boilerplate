import Phaser from 'phaser';

export class Load extends Phaser.State {
  preload() {
    let textStyle = {font: '45px Arial', align: 'center', stroke: 'blue', fill: 'blue'};

    this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'loading...', textStyle).anchor.setTo(0.5);
    this.game.load.spritesheet('wizard', '../assets/wizardsprite.png', 95, 123, 6);
  }

  create() {
    this.game.state.start('menu');
  }
}