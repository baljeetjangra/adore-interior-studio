import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface ThreeSceneProps {
  children?: React.ReactNode
  className?: string
  animate?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void
  onSetup?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className, animate, onSetup }) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.Camera>()
  const animationIdRef = useRef<number>()
  const isInitialized = useRef(false)

  useEffect(() => {
    if (!mountRef.current || isInitialized.current) return

    try {
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight

      // Guard against zero dimensions
      if (width === 0 || height === 0) return

      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      })
      
      renderer.setSize(width, height)
      renderer.setClearColor(0x000000, 0)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      
      // Only append if mount point still exists and is empty
      if (mountRef.current && mountRef.current.children.length === 0) {
        mountRef.current.appendChild(renderer.domElement)
      }

      sceneRef.current = scene
      rendererRef.current = renderer
      cameraRef.current = camera
      isInitialized.current = true

      // Call setup function if provided
      if (onSetup) {
        try {
          onSetup(scene, camera, renderer)
        } catch (error) {
          console.warn('Three.js setup error:', error)
        }
      }

      // Animation loop
      const animateScene = () => {
        if (!isInitialized.current) return
        
        animationIdRef.current = requestAnimationFrame(animateScene)
        
        try {
          if (animate) {
            animate(scene, camera, renderer)
          }
          
          renderer.render(scene, camera)
        } catch (error) {
          console.warn('Three.js animation error:', error)
        }
      }
      animateScene()

      // Handle resize
      const handleResize = () => {
        if (!mountRef.current || !cameraRef.current || !rendererRef.current || !isInitialized.current) return
        
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight
        
        if (width === 0 || height === 0) return
        
        const camera = cameraRef.current as THREE.PerspectiveCamera
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        
        rendererRef.current.setSize(width, height)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        isInitialized.current = false
        
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
        }
        
        if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement)
        }
        
        // Clean up Three.js resources
        scene.clear()
        renderer.dispose()
        
        // Clear geometry and materials
        scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.geometry) child.geometry.dispose()
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => material.dispose())
              } else {
                child.material.dispose()
              }
            }
          }
        })
      }
    } catch (error) {
      console.warn('Three.js initialization error:', error)
    }
  }, [animate, onSetup])

  return <div ref={mountRef} className={className} />
}

export default ThreeScene