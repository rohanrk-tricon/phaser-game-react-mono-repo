import React from 'react';
import Phaser from 'phaser';
import RobotScene from './scene/RobotScene';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin.js';
import GlowFilterPipelinePlugin from 'phaser3-rex-plugins/plugins/glowfilterpipeline-plugin.js';
import FlashPlugin from 'phaser3-rex-plugins/plugins/flash-plugin.js';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  parent:'phaser-container',
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
    global: [{
        key: 'rexGlowFilterPipeline',
        plugin: GlowFilterPipelinePlugin,
        start: true
    },
    {
      key: 'rexOutlinePipeline',
      plugin: OutlinePipelinePlugin,
      start: true
    },
    {
      key: 'rexFlash',
      plugin: FlashPlugin,
      start: true
    },
    ]
},
  scene: [RobotScene]
};
 
class GameOne extends React.Component {
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

export default GameOne;