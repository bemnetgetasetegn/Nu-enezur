"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface TentCanvasProps {
  scrollProgress?: number; // 0 to 1 from ScrollTrigger
  className?: string;
  style?: React.CSSProperties;
}

export default function TentCanvas({ scrollProgress = 0, className = "", style }: TentCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const scrollProgressRef = useRef(scrollProgress);
  scrollProgressRef.current = scrollProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 340;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // 2. Cinematic Lighting for Camping Tent
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.8);
    scene.add(ambientLight);

    // Warm Key Sun Light
    const sunLight = new THREE.DirectionalLight(0xffeedd, 2.6);
    sunLight.position.set(4, 7, 5);
    scene.add(sunLight);

    // Soft Golden Ochre Fill Light (reflecting Ethiopian soil / camp tone)
    const fillLight = new THREE.DirectionalLight(0xc88219, 1.4);
    fillLight.position.set(-5, 2, -2);
    scene.add(fillLight);

    // Subtle Cool Blue Sky Rim Light for crisp tent edge separation
    const rimLight = new THREE.DirectionalLight(0xaad4ff, 1.2);
    rimLight.position.set(0, 6, -5);
    scene.add(rimLight);

    // 3. Load 3D Tent Model
    const loader = new GLTFLoader();
    let isDisposed = false;

    loader.load(
      "/camping.glb",
      (gltf) => {
        if (isDisposed) return;
        const model = gltf.scene;

        // Auto-center and normalize model bounds
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;

        // Center pivot
        model.position.sub(center);

        // Normalize scale to unit fit in camera view
        const scaleFactor = 3.2 / maxDim;
        model.scale.setScalar(scaleFactor);

        // Create parent pivot for clean rotations
        const pivot = new THREE.Group();
        pivot.add(model);

        // Initial 3/4 cinematic angle
        pivot.rotation.set(0.18, -0.45, 0.05);
        pivot.position.set(0, -0.2, 0);

        scene.add(pivot);
        modelRef.current = pivot;
      },
      undefined,
      (error) => {
        console.error("Failed to load camping.glb:", error);
      }
    );

    // 4. Interactive Mouse Hover Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x;
      mouseY = y;
    };
    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // 5. Render Loop
    let animationFrameId = 0;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;
      const p = scrollProgressRef.current;

      if (modelRef.current) {
        // Base subtle floating/breathing animation
        const floatY = Math.sin(elapsedTime * 1.8) * 0.05;

        // Rotation driven by scroll + subtle mouse parallax
        const targetRotY = -0.45 + p * 1.4 + mouseX * 0.35;
        const targetRotX = 0.18 - p * 0.12 - mouseY * 0.2;
        const targetRotZ = 0.05 + Math.sin(p * Math.PI) * 0.15;

        // Smooth lerping
        modelRef.current.rotation.y += (targetRotY - modelRef.current.rotation.y) * 0.1;
        modelRef.current.rotation.x += (targetRotX - modelRef.current.rotation.x) * 0.1;
        modelRef.current.rotation.z += (targetRotZ - modelRef.current.rotation.z) * 0.1;

        modelRef.current.position.y += (-0.2 + floatY - modelRef.current.position.y) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 6. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 340;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      resizeObserver.disconnect();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center overflow-visible pointer-events-none ${className}`}
      style={style}
    >
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
}
