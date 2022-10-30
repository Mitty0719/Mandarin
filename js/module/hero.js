import * as THREE from 'three';

class Hero{
  constructor(scene){
    this.width = 10;
    this.height = 10;
    this.depth = 10;
    this.x = 0;
    this.y = 0;
    this.z = 0;

    const geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
    const material = [
      new THREE.MeshBasicMaterial({ color: 0x15133c }),
      new THREE.MeshBasicMaterial({ color: 0x3f0071 }),
      new THREE.MeshBasicMaterial({ color: 0x150050 }),
      new THREE.MeshBasicMaterial({ color: 0xaefeff }),
      new THREE.MeshBasicMaterial({ color: 0x4fbdba }),
      new THREE.MeshBasicMaterial({ color: 0x35858b }),
    ];
    this.cube = new THREE.Mesh(geometry, material);
    scene.add(this.cube);
  }

  move(keyInfo){
    if(keyInfo['37']) this.x--;
    if(keyInfo['38']) this.z--;
    if(keyInfo['39']) this.x++;
    if(keyInfo['40']) this.z++;
    this.cube.position.set(this.x, this.y, this.z);
  }

  draw(){

  }
}

export default Hero;