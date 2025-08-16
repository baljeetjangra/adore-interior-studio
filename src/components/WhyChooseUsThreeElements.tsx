import React from 'react'
import * as THREE from 'three'
import ThreeScene from './ThreeScene'

const WhyChooseUsThreeElements = () => {
  const setupScene = (scene: THREE.Scene, camera: THREE.Camera) => {
    camera.position.set(0, 2, 8)
    camera.lookAt(0, 0, 0)
    
    const elements: THREE.Mesh[] = []

    // Create various design elements
    // Hexagon shapes
    for (let i = 0; i < 8; i++) {
      const hexGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 6)
      const hexMaterial = new THREE.MeshBasicMaterial({ 
        color: i % 2 === 0 ? 0xC9A15E : 0x333333, 
        transparent: true, 
        opacity: 0.4,
        wireframe: true
      })
      const hex = new THREE.Mesh(hexGeometry, hexMaterial)
      
      hex.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      )
      hex.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      
      scene.add(hex)
      elements.push(hex)
    }

    // Add some triangular elements
    for (let i = 0; i < 6; i++) {
      const triGeometry = new THREE.ConeGeometry(0.3, 0.8, 3)
      const triMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xF5F0E6, 
        transparent: true, 
        opacity: 0.5,
        wireframe: true
      })
      const triangle = new THREE.Mesh(triGeometry, triMaterial)
      
      triangle.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      )
      triangle.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      
      scene.add(triangle)
      elements.push(triangle)
    }

    scene.userData.elements = elements
  }

  const animate = (scene: THREE.Scene) => {
    if (scene.userData.elements) {
      const time = Date.now() * 0.0005
      scene.userData.elements.forEach((element: THREE.Mesh, index: number) => {
        element.rotation.x += 0.002 * (index % 3 + 1)
        element.rotation.y += 0.003 * (index % 2 + 1)
        element.rotation.z += 0.001 * (index % 4 + 1)
        
        element.position.y += Math.sin(time + index) * 0.01
        element.position.x += Math.cos(time + index * 0.5) * 0.005
      })
    }
  }

  return (
    <ThreeScene 
      className="absolute inset-0 pointer-events-none opacity-15" 
      onSetup={setupScene}
      animate={animate}
    />
  )
}

export default WhyChooseUsThreeElements