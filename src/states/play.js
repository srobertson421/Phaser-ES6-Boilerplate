import Phaser from 'phaser';

// Import our custom entity to use in the state
import { CustomEntityName } from '../entities/customEntity';

export class Play extends Phaser.State {    
  create() {     
    this.game.physics.startSystem(Phaser.Physics.ARCADE); 
            
    this.entity = new CustomEntityName(this.game, 350, 300);
    this.game.add.existing(this.wizard);              
            
    this.game.stage.backgroundColor = "#FFFFFF";      
    this.game.input.keyboard.addKeyCapture([ Phaser.KeyCode.SPACEBAR ]);
  }
   
  update() {
               
  }  
}