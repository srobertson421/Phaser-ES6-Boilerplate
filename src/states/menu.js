import Phaser from 'phaser';

export class Menu extends Phaser.State {
  create() {
    
    // Start game input
    let sKey = this.game.input.keyboard.addKey(Phaser.KeyCode.S);
    sKey.onDown.addOnce( () => this.game.state.start('play'));
  }
}