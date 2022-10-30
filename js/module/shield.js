import * as THREE from 'three';

class Shield{
  constructor(scene, edge = 0){
    this.width = 10;
    this.height = 5;
    this.damage = 10;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.radius = 30;
    this.edge = edge;
    this.color = new THREE.Color( 0x00ff00 );

    const geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
    const material = new THREE.MeshBasicMaterial({ color: this.color });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(this.x, this.y, this.z);

    scene.add(this.cube);
  }

  move(tx, ty, tz){
    this.x = tx;
    this.y = ty;
    this.z = tz;
    this.getCircleRotate();
    this.cube.position.set(this.x, this.y, this.z);
    this.cube.rotateY(0.1);
  }
  getCircleRotate(){
    this.edge++;
    this.rx = Math.floor(this.radius * Math.cos(this.edge * Math.PI / 180));
    this.rz = Math.floor(this.radius * Math.sin(this.edge * Math.PI / 180));
    this.x += this.rx;
    this.z += this.rz;
  }

  attack(enemyGroup){
    enemyGroup.enemies.forEach( enemy => {
      if(enemy.x > this.x - this.width && enemy.x < this.x + this.width && enemy.z > this.z - this.width && enemy.z < this.z + this.width){
        enemy.health -= this.damage;
        if(enemy.health <= 0){
          enemyGroup.removeEnemy(enemy);
        }
      }
    });
  }
}

export default Shield;