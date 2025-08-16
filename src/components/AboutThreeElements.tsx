import React from 'react'
import * as THREE from 'three'
import ThreeScene from './ThreeScene'

const AboutThreeElements = () => {
  const setupScene = (scene: THREE.Scene, camera: THREE.Camera) => {
    camera.position.set(3, 2, 4)
    camera.lookAt(0, 0, 0)
    
    // Create a wireframe room
    const roomGeometry = new THREE.BoxGeometry(4, 3, 4)
    const edges = new THREE.EdgesGeometry(roomGeometry)
    const roomMaterial = new THREE.LineBasicMaterial({ 
      color: 0xC9A15E, 
      transparent: true, 
      opacity: 0.6 
    })
    const room = new THREE.LineSegments(edges, roomMaterial)
    scene.add(room)

    // Add interior elements
    // Floor grid
    const gridHelper = new THREE.GridHelper(4, 8, 0xC9A15E, 0x333333)
    gridHelper.position.y = -1.5
    gridHelper.material.opacity = 0.3
    gridHelper.material.transparent = true
    scene.add(gridHelper)

    // Furniture outlines
    // Bed outline
    const bedGeometry = new THREE.BoxGeometry(2, 0.5, 1.5)
    const bedEdges = new THREE.EdgesGeometry(bedGeometry)
    const bedMaterial = new THREE.LineBasicMaterial({ color: 0x333333, opacity: 0.7, transparent: true })
    const bed = new THREE.LineSegments(bedEdges, bedMaterial)
    bed.position.set(-1, -1, -1)
    scene.add(bed)

    // Wardrobe outline
    const wardrobeGeometry = new THREE.BoxGeometry(0.6, 2, 1.5)
    const wardrobeEdges = new THREE.EdgesGeometry(wardrobeGeometry)
    const wardrobeMaterial = new THREE.LineBasicMaterial({ color: 0x333333, opacity: 0.7, transparent: true })
    const wardrobe = new THREE.LineSegments(wardrobeEdges, wardrobeMaterial)
    wardrobe.position.set(1.7, -0.5, -1)
    scene.add(wardrobe)

    // Window outline
    const windowGeometry = new THREE.PlaneGeometry(1.5, 1)
    const windowEdges = new THREE.EdgesGeometry(windowGeometry)
    const windowMaterial = new THREE.LineBasicMaterial({ color: 0xC9A15E, opacity: 0.8, transparent: true })
    const window = new THREE.LineSegments(windowEdges, windowMaterial)
    window.position.set(0, 0.5, -1.99)
    scene.add(window)

    scene.userData.room = room
  }

  const animate = (scene: THREE.Scene) => {
    if (scene.userData.room) {
      const time = Date.now() * 0.0005
      scene.userData.room.rotation.y = Math.sin(time) * 0.1
    }
  }

  return (
    <ThreeScene 
      className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none" 
      onSetup={setupScene}
      animate={animate}
    />
  )
}

export default AboutThreeElements