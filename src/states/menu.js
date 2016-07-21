import Phaser from 'phaser';
import { gameConfig } from '../helpers/config-helper';

export class Menu extends Phaser.State {
  create() {

    console.log(gameConfig.getProp('title'));
    console.log(gameConfig.setProp('title', 'Awesome Guy'));
    
    // Start game input
    let sKey = this.game.input.keyboard.addKey(Phaser.KeyCode.S);
    sKey.onDown.addOnce( () => this.game.state.start('play'));
  }
}