import * as THREE from 'three';

class App {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x072227);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(100, 120, 150);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = [
      new THREE.MeshBasicMaterial({ color: 0xfb2576 }),
      new THREE.MeshBasicMaterial({ color: 0x3f0071 }),
      new THREE.MeshBasicMaterial({ color: 0x150050 }),
      new THREE.MeshBasicMaterial({ color: 0xaefeff }),
      new THREE.MeshBasicMaterial({ color: 0x4fbdba }),
      new THREE.MeshBasicMaterial({ color: 0x35858b }),
    ];
    this.cube = new THREE.Mesh(geometry, material);

    this.scene.add(this.cube);
    this.renderer.render(this.scene, this.camera);

    window.addEventListener('mousemove', this.moveMouse.bind(this));

    requestAnimationFrame(this.render.bind(this));
  }

  moveMouse(e) {
    const cameraX = e.clientX - innerWidth / 2;
    const cameraY = e.clientY - innerHeight / 2;
    // this.camera.position.set(cameraX, cameraY, 300);
    this.cube.position.set(cameraX, cameraY, 0);
  }

  render() {
    window.requestAnimationFrame(this.render.bind(this));

    this.renderer.render(this.scene, this.camera);
  }
}

window.onload = () => {
  new App();
};
