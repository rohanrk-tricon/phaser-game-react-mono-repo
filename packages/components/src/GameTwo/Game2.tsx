import  React  from 'react';
import Phaser from 'phaser';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin.js';
import GameScene from './scene/Game';
import DropShadowPipelinePlugin from 'phaser3-rex-plugins/plugins/dropshadowpipeline-plugin.js';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  plugins: {
    global: [
    {
      key: 'rexOutlinePipeline',
      plugin: OutlinePipelinePlugin,
      start: true
    },
    {
      key: 'rexDropShadowPipeline',
      plugin: DropShadowPipelinePlugin,
      start: true
    },
    ]
},
  scene: [GameScene]
};

 
class GameTwo extends React.Component {
  phaserGame:any;
    componentDidMount() {
      this.phaserGame = new Phaser.Game(config);       
     }
    componentWillUnmount(){
       //When we navigate to different route the game is destroyed.
      // this.phaserGame.destroy(true);
      // When we navigate to different route the game is destroyed, but assets and all are not destroyed.
      this.phaserGame.destroy(true,false);  
     }
    render() {
      return (
        <div id="phaser-container"></div>
      );
    }
  }

export default GameTwo;