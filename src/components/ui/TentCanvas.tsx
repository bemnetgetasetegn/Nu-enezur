"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface TentCanvasProps {
  scrollProgress?: number; // 0 to 1 from ScrollTrigger
  className?: string;
  style?: React.CSSProperties;
  lookAtMouse?: boolean; // When true, the head of the tent actively tracks the cursor
}

export default function TentCanvas({
  scrollProgress = 0,
  className = "",
  style,
  lookAtMouse = false,
}: TentCanvasProps) {
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

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 420;

    // Camera centered directly on the origin (0, 0, 0)
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.1, 4.2);
    camera.lookAt(0, 0, 0);

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
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 2.2);
    scene.add(ambientLight);

    // Warm Key Sun Light
    const sunLight = new THREE.DirectionalLight(0xffeedd, 3.0);
    sunLight.position.set(4, 7, 5);
    scene.add(sunLight);

    // Soft Golden Ochre Fill Light (reflecting Ethiopian soil / camp tone)
    const fillLight = new THREE.DirectionalLight(0xc88219, 1.8);
    fillLight.position.set(-5, 2, -2);
    scene.add(fillLight);

    // Subtle Cool Blue Sky Rim Light for crisp tent edge separation
    const rimLight = new THREE.DirectionalLight(0xaad4ff, 1.5);
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

        // Exactly center pivot at origin (0, 0, 0)
        model.position.sub(center);

        // Normalize scale to fit inside camera view with comfortable margins
        const scaleFactor = 3.0 / maxDim;
        model.scale.setScalar(scaleFactor);

        // Create parent pivot for clean rotations
        const pivot = new THREE.Group();
        pivot.add(model);

        // Initial 3/4 cinematic angle
        pivot.rotation.set(0.12, -0.42, 0.04);
        pivot.position.set(0, 0, 0);

        scene.add(pivot);
        modelRef.current = pivot;
      },
      undefined,
      (error) => {
        console.error("Failed to load camping.glb:", error);
      }
    );

    // 4. Cursor Tracking State
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Responsive screen-relative offset:
      // -1 (left) to +1 (right), -1 (top) to +1 (bottom)
      const halfW = Math.max(rect.width * 0.9, window.innerWidth * 0.4);
      const halfH = Math.max(rect.height * 0.9, window.innerHeight * 0.4);

      const dx = (e.clientX - centerX) / halfW;
      const dy = (e.clientY - centerY) / halfH;

      targetMouseX = Math.max(-1.3, Math.min(1.3, dx));
      targetMouseY = Math.max(-1.3, Math.min(1.3, dy));
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // 5. Render Loop
    let animationFrameId = 0;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;
      const p = scrollProgressRef.current;

      // Smooth lerping of mouse target
      const mouseLerp = lookAtMouse ? 0.08 : 0.05;
      currentMouseX += (targetMouseX - currentMouseX) * mouseLerp;
      currentMouseY += (targetMouseY - currentMouseY) * mouseLerp;

      if (modelRef.current) {
        // Safe, subtle floating/breathing animation inside canvas margins
        const floatY = Math.sin(elapsedTime * 1.6) * 0.03;

        let targetRotY: number;
        let targetRotX: number;
        let targetRotZ: number;

        if (lookAtMouse) {
          // Dedicated cursor-focus mode:
          // The head and front opening of the tent pivot to watch the mouse
          targetRotY = -0.42 + currentMouseX * 0.9;
          targetRotX = 0.12 + currentMouseY * 0.5;
          targetRotZ = 0.04 - currentMouseX * 0.14;
        } else {
          // Flight / scroll driven mode with subtle mouse tracking
          targetRotY = -0.42 + p * 1.5 + currentMouseX * 0.4;
          targetRotX = 0.12 - p * 0.1 + currentMouseY * 0.25;
          targetRotZ = 0.04 + Math.sin(p * Math.PI) * 0.1 - currentMouseX * 0.08;
        }

        // Smooth rotation lerping
        modelRef.current.rotation.y += (targetRotY - modelRef.current.rotation.y) * 0.1;
        modelRef.current.rotation.x += (targetRotX - modelRef.current.rotation.x) * 0.1;
        modelRef.current.rotation.z += (targetRotZ - modelRef.current.rotation.z) * 0.1;

        modelRef.current.position.y += (floatY - modelRef.current.position.y) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 6. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 540;
      const newHeight = container.clientHeight || 420;
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
  }, [lookAtMouse]);

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
