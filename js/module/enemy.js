import * as THREE from 'three';
import { getRandomBoolean } from '../util.js';

class Enemy{
  constructor(scene, stageWidth, stageHeight){
    this.x = getRandomBoolean() ? stageWidth + 100 : -stageWidth - 100;
    this.y = 0;
    this.z = getRandomBoolean() ? stageHeight + 100 : -stageHeight - 100;
    this.tx = 0;
    this.ty = 0;
    this.tz = 0;
    this.speed = 0.01;
    this.width = 1;
    this.height = 1;
    this.depth = 1;
    this.color = new THREE.Color( 0xff0000 );
    this.stageWidth = stageWidth;
    this.stageHieght = stageHeight;

    const geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
    const material = [
      new THREE.MeshBasicMaterial({ color: this.color }),
      new THREE.MeshBasicMaterial({ color: this.color }),
      new THREE.MeshBasicMaterial({ color: this.color }),
      new THREE.MeshBasicMaterial({ color: this.color }),
      new THREE.MeshBasicMaterial({ color: this.color }),
      new THREE.MeshBasicMaterial({ color: this.color }),
    ];
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(this.x, this.y, this.z);

    scene.add(this.cube);
    console.log(this.x, this.z);
  }

  move(tx, ty, tz){
    this.tx = tx;
    this.ty = ty;
    this.tz = tz;

    this.x += (this.tx - this.x) * this.speed;
    this.y += (this.ty - this.y) * this.speed;
    this.z += (this.tz - this.z) * this.speed;

    this.cube.position.set(this.x, this.y, this.z);
  }
}

export default Enemy;