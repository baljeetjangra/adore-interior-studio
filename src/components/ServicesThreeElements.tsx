import React from 'react'
import * as THREE from 'three'
import ThreeScene from './ThreeScene'

const ServicesThreeElements = () => {
  const setupScene = (scene: THREE.Scene, camera: THREE.Camera) => {
    camera.position.z = 8
    camera.position.y = 2
    
    const serviceIcons: THREE.Group[] = []

    // Kitchen icon (stove + counter)
    const kitchenGroup = new THREE.Group()
    const counterGeometry = new THREE.BoxGeometry(1.5, 0.2, 0.8)
    const counterMaterial = new THREE.MeshBasicMaterial({ color: 0xC9A15E, wireframe: true })
    const counter = new THREE.Mesh(counterGeometry, counterMaterial)
    counter.position.y = -0.4
    kitchenGroup.add(counter)
    
    const stoveGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 8)
    const stoveMaterial = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true })
    const stove = new THREE.Mesh(stoveGeometry, stoveMaterial)
    stove.position.y = -0.25
    kitchenGroup.add(stove)
    
    kitchenGroup.position.set(-4, 0, 0)
    scene.add(kitchenGroup)
    serviceIcons.push(kitchenGroup)

    // Living room icon (sofa + table)
    const livingGroup = new THREE.Group()
    const sofaGeometry = new THREE.BoxGeometry(2, 0.8, 0.6)
    const sofaMaterial = new THREE.MeshBasicMaterial({ color: 0xC9A15E, wireframe: true })
    const sofa = new THREE.Mesh(sofaGeometry, sofaMaterial)
    sofa.position.y = -0.2
    livingGroup.add(sofa)
    
    const coffeeTableGeometry = new THREE.BoxGeometry(1, 0.1, 0.5)
    const coffeeTableMaterial = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true })
    const coffeeTable = new THREE.Mesh(coffeeTableGeometry, coffeeTableMaterial)
    coffeeTable.position.set(0, -0.6, 0.8)
    livingGroup.add(coffeeTable)
    
    livingGroup.position.set(-1.5, 0, 0)
    scene.add(livingGroup)
    serviceIcons.push(livingGroup)

    // Bedroom icon (bed + nightstand)
    const bedroomGroup = new THREE.Group()
    const bedGeometry = new THREE.BoxGeometry(2, 0.5, 1.5)
    const bedMaterial = new THREE.MeshBasicMaterial({ color: 0xC9A15E, wireframe: true })
    const bed = new THREE.Mesh(bedGeometry, bedMaterial)
    bed.position.y = -0.3
    bedroomGroup.add(bed)
    
    const nightstandGeometry = new THREE.BoxGeometry(0.5, 0.6, 0.5)
    const nightstandMaterial = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true })
    const nightstand = new THREE.Mesh(nightstandGeometry, nightstandMaterial)
    nightstand.position.set(1.5, -0.3, 0)
    bedroomGroup.add(nightstand)
    
    bedroomGroup.position.set(1.5, 0, 0)
    scene.add(bedroomGroup)
    serviceIcons.push(bedroomGroup)

    // Office icon (desk + chair)
    const officeGroup = new THREE.Group()
    const deskGeometry = new THREE.BoxGeometry(1.5, 0.1, 0.8)
    const deskMaterial = new THREE.MeshBasicMaterial({ color: 0xC9A15E, wireframe: true })
    const desk = new THREE.Mesh(deskGeometry, deskMaterial)
    desk.position.y = -0.2
    officeGroup.add(desk)
    
    const chairGeometry = new THREE.BoxGeometry(0.6, 1, 0.6)
    const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true })
    const chair = new THREE.Mesh(chairGeometry, chairMaterial)
    chair.position.set(0, -0.2, 1.2)
    officeGroup.add(chair)
    
    officeGroup.position.set(4, 0, 0)
    scene.add(officeGroup)
    serviceIcons.push(officeGroup)

    scene.userData.serviceIcons = serviceIcons
  }

  const animate = (scene: THREE.Scene) => {
    if (scene.userData.serviceIcons) {
      const time = Date.now() * 0.001
      scene.userData.serviceIcons.forEach((group: THREE.Group, index: number) => {
        group.rotation.y += 0.005
        group.position.y += Math.sin(time + index * 2) * 0.05
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

export default ServicesThreeElements