import Enemy from "./enemy.js";

class EnemyGroup{
  constructor(scene, stageWidth, stageHeight){
    this.enemies = [];
    this.count = 10;
    this.interval = 1000;

    setInterval(this.spawn.bind(this, scene, stageWidth, stageHeight), this.interval);
  }

  move(tx, ty, tz){
    this.enemies.forEach(enemy => {
      enemy.move(tx, ty, tz);
    })
  }
  spawn(scene, stageWidth, stageHeight){
    this.interval += 10;
    if(this.enemies.length < this.count){
      this.enemies.push(new Enemy(scene, stageWidth, stageHeight));
    }
  }
  removeEnemy(target){
    target.die();
    this.enemies = this.enemies.filter(enemy => enemy !== target);
  }
}

export default EnemyGroup;