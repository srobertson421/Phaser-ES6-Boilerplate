import config from '../game-config.json!';

class GameConfig {
  constructor() {
    this._mainConfig_ = config;
  }

  getProp(propName) {
    if(typeof(propName) === 'string') {
      return this._mainConfig_[propName];
    }
  }

  setProp(propName, newValue) {
    if(typeof(propName) === 'string') {
      this._mainConfig_[propName] = newValue;
      return;
    }
  }
}

export let gameConfig = new GameConfig();