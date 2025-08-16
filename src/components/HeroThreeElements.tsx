import * as THREE from "three";
import ThreeScene from "./ThreeScene";

const HeroThreeElements = () => {
  const setupScene = (
    scene: THREE.Scene,
    camera: THREE.Camera
    // renderer: THREE.WebGLRenderer
  ) => {
    camera.position.z = 5;

    // Create floating furniture-inspired geometric shapes
    const shapes: THREE.Mesh[] = [];

    // Chair-like shape
    const chairGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.6);
    const chairMaterial = new THREE.MeshBasicMaterial({
      color: 0xc9a15e,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });
    const chair = new THREE.Mesh(chairGeometry, chairMaterial);
    chair.position.set(-2, 1, 0);
    chair.rotation.x = 0.3;
    chair.rotation.y = 0.5;
    scene.add(chair);
    shapes.push(chair);

    // Table-like shape
    const tableGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 8);
    const tableMaterial = new THREE.MeshBasicMaterial({
      color: 0xf5f0e6,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(2, -0.5, -1);
    table.rotation.x = 0.2;
    scene.add(table);
    shapes.push(table);

    // Lamp-like shape
    const lampGeometry = new THREE.ConeGeometry(0.5, 1.5, 6);
    const lampMaterial = new THREE.MeshBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.5,
      wireframe: true,
    });
    const lamp = new THREE.Mesh(lampGeometry, lampMaterial);
    lamp.position.set(0, 0.5, 1.5);
    lamp.rotation.z = 0.3;
    scene.add(lamp);
    shapes.push(lamp);

    // Sofa-like shape
    const sofaGeometry = new THREE.BoxGeometry(2, 0.8, 1);
    const sofaMaterial = new THREE.MeshBasicMaterial({
      color: 0xc9a15e,
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    });
    const sofa = new THREE.Mesh(sofaGeometry, sofaMaterial);
    sofa.position.set(-1, -1.5, -0.5);
    sofa.rotation.y = 0.8;
    scene.add(sofa);
    shapes.push(sofa);

    // Store shapes for animation
    scene.userData.shapes = shapes;
  };

  const animate = (scene: THREE.Scene) => {
    if (scene.userData.shapes) {
      const time = Date.now() * 0.001;
      scene.userData.shapes.forEach((shape: THREE.Mesh, index: number) => {
        shape.rotation.x += 0.005 * (index + 1);
        shape.rotation.y += 0.003 * (index + 1);
        shape.position.y += Math.sin(time + index) * 0.002;
      });
    }
  };

  return (
    <ThreeScene
      className="absolute inset-0 pointer-events-none opacity-30"
      onSetup={setupScene}
      animate={animate}
    />
  );
};

export default HeroThreeElements;
