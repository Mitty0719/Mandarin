import * as THREE from 'three';
import Hero from './module/hero.js';
import EnemyGroup from './module/enemyGroup.js';
import Shield from './module/shield.js';

class App {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x072227);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(100, 120, 150);
    this.camera.lookAt(0, 0, 0);
    this.keyInfo = {
      37: false,
      38: false,
      39: false,
      40: false,
    }

    this.resize();

    this.hero = new Hero(this.scene);
    this.enemyGroup = new EnemyGroup(this.scene, this.stageWidth, this.stateHeight);
    this.shield = new Shield(this.scene);
    this.shield2 = new Shield(this.scene, 180);

    window.addEventListener('keydown', this.handlerKeyDown.bind(this));
    window.addEventListener('keyup', this.handlerKeyUp.bind(this));

    requestAnimationFrame(this.render.bind(this));
    
  }

  resize(){
    this.stageWidth = window.innerWidth;
    this.stateHeight = window.innerHeight;
  }

  render() {
    this.hero.move(this.keyInfo);
    this.enemyGroup.move(this.hero.x, this.hero.y, this.hero.z);
    this.shield.move(this.hero.x, this.hero.y, this.hero.z);
    this.shield2.move(this.hero.x, this.hero.y, this.hero.z);
    this.shield.attack(this.enemyGroup);
    this.shield2.attack(this.enemyGroup);


    // this.camera.lookAt(this.hero.x, this.hero.y, this.hero.z);
    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(this.render.bind(this));
  }

  handlerKeyDown(e){
    if(this.keyInfo[e.keyCode] === undefined) return;
    this.keyInfo[e.keyCode] = true;
  }
  handlerKeyUp(e){
    if(this.keyInfo[e.keyCode] === undefined) return;
    this.keyInfo[e.keyCode] = false;
  }
}

window.onload = () => {
  new App();
};
