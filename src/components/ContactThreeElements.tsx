import * as THREE from "three";
import ThreeScene from "./ThreeScene";

const ContactThreeElements = () => {
  const setupScene = (scene: THREE.Scene, camera: THREE.Camera) => {
    camera.position.set(4, 3, 5);
    camera.lookAt(0, 0, 0);

    // Create architectural blueprint-style elements
    const architecturalElements: THREE.Group[] = [];

    // Building outline
    const buildingGroup = new THREE.Group();

    // Main structure
    const buildingGeometry = new THREE.BoxGeometry(3, 4, 2);
    const buildingEdges = new THREE.EdgesGeometry(buildingGeometry);
    const buildingMaterial = new THREE.LineBasicMaterial({
      color: 0xc9a15e,
      transparent: true,
      opacity: 0.6,
    });
    const building = new THREE.LineSegments(buildingEdges, buildingMaterial);
    building.position.y = 0.5;
    buildingGroup.add(building);

    // Roof
    const roofGeometry = new THREE.ConeGeometry(2.2, 1, 4);
    const roofEdges = new THREE.EdgesGeometry(roofGeometry);
    const roofMaterial = new THREE.LineBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.5,
    });
    const roof = new THREE.LineSegments(roofEdges, roofMaterial);
    roof.position.y = 3;
    roof.rotation.y = Math.PI / 4;
    buildingGroup.add(roof);

    // Windows
    for (let i = 0; i < 6; i++) {
      const windowGeometry = new THREE.PlaneGeometry(0.5, 0.7);
      const windowEdges = new THREE.EdgesGeometry(windowGeometry);
      const windowMaterial = new THREE.LineBasicMaterial({
        color: 0xf5f0e6,
        transparent: true,
        opacity: 0.7,
      });
      const window = new THREE.LineSegments(windowEdges, windowMaterial);

      const row = Math.floor(i / 3);
      const col = i % 3;
      window.position.set((col - 1) * 0.8, row * 1.2 - 0.3, 1.01);
      buildingGroup.add(window);
    }

    buildingGroup.position.set(-2, -1, 0);
    scene.add(buildingGroup);
    architecturalElements.push(buildingGroup);

    // Floor plan elements
    const floorPlanGroup = new THREE.Group();

    // Room outlines
    const roomGeometry = new THREE.PlaneGeometry(2, 1.5);
    const roomEdges = new THREE.EdgesGeometry(roomGeometry);
    const roomMaterial = new THREE.LineBasicMaterial({
      color: 0xc9a15e,
      transparent: true,
      opacity: 0.4,
    });
    const room = new THREE.LineSegments(roomEdges, roomMaterial);
    room.rotation.x = -Math.PI / 2;
    room.position.y = -2;
    floorPlanGroup.add(room);

    // Interior divisions
    const dividerGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(1, 0, 0),
    ]);
    const dividerMaterial = new THREE.LineBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.6,
    });
    const divider = new THREE.Line(dividerGeometry, dividerMaterial);
    divider.position.y = -1.99;
    floorPlanGroup.add(divider);

    floorPlanGroup.position.set(2, 0, 0);
    scene.add(floorPlanGroup);
    architecturalElements.push(floorPlanGroup);

    scene.userData.architecturalElements = architecturalElements;
  };

  const animate = (scene: THREE.Scene) => {
    if (scene.userData.architecturalElements) {
      const time = Date.now() * 0.0003;
      scene.userData.architecturalElements.forEach(
        (element: THREE.Group, index: number) => {
          element.rotation.y += 0.002 * (index + 1);
          element.position.y += Math.sin(time + index * 2) * 0.02;
        }
      );
    }
  };

  return (
    <ThreeScene
      className="absolute left-0 top-0 w-1/2 h-full opacity-15 pointer-events-none"
      onSetup={setupScene}
      animate={animate}
    />
  );
};

export default ContactThreeElements;
