import React from 'react'
import * as THREE from 'three'
import ThreeScene from './ThreeScene'

const GalleryThreeElements = () => {
  const setupScene = (scene: THREE.Scene, camera: THREE.Camera) => {
    camera.position.set(0, 0, 6)
    
    const frames: THREE.Group[] = []

    // Create floating picture frames
    for (let i = 0; i < 6; i++) {
      const frameGroup = new THREE.Group()
      
      // Frame border
      const frameGeometry = new THREE.RingGeometry(0.8, 1, 4)
      const frameMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xC9A15E, 
        transparent: true, 
        opacity: 0.6,
        side: THREE.DoubleSide
      })
      const frame = new THREE.Mesh(frameGeometry, frameMaterial)
      frameGroup.add(frame)
      
      // Inner picture area
      const pictureGeometry = new THREE.PlaneGeometry(1.4, 1)
      const pictureMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x333333, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true
      })
      const picture = new THREE.Mesh(pictureGeometry, pictureMaterial)
      frameGroup.add(picture)
      
      // Position frames in a circular pattern
      const angle = (i / 6) * Math.PI * 2
      frameGroup.position.set(
        Math.cos(angle) * 3,
        Math.sin(angle) * 2,
        Math.sin(angle) * 1.5
      )
      frameGroup.rotation.z = angle * 0.5
      
      scene.add(frameGroup)
      frames.push(frameGroup)
    }

    scene.userData.frames = frames
  }

  const animate = (scene: THREE.Scene) => {
    if (scene.userData.frames) {
      const time = Date.now() * 0.0008
      scene.userData.frames.forEach((frame: THREE.Group, index: number) => {
        const angle = time + (index / 6) * Math.PI * 2
        frame.position.x = Math.cos(angle) * 3
        frame.position.y = Math.sin(angle) * 2
        frame.position.z = Math.sin(angle) * 1.5
        frame.rotation.z = angle * 0.5
        frame.rotation.y += 0.01
      })
    }
  }

  return (
    <ThreeScene 
      className="absolute inset-0 pointer-events-none opacity-10" 
      onSetup={setupScene}
      animate={animate}
    />
  )
}

export default GalleryThreeElements