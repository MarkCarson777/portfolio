import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

type SceneConfig = {
  createGeometry: () => THREE.BufferGeometry;
  createMaterial: () => THREE.Material;
  setupExtras?: (scene: THREE.Scene, cube: THREE.Mesh) => void;
};

/**
 * Shared Three.js scene renderer used by the Scene component variants.
 */
const useCubeScene = ({
  createGeometry,
  createMaterial,
  setupExtras,
}: SceneConfig) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(600, 600);
    container.appendChild(renderer.domElement);

    const geometry = createGeometry();
    const material = createMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    setupExtras?.(scene, cube);

    camera.position.z = 5;

    const animate = (time: number) => {
      cube.rotation.x = time / 2000;
      cube.rotation.y = time / 1000;
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.setAnimationLoop(null);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [createGeometry, createMaterial, setupExtras]);

  return <div ref={containerRef} />;
};

export const BasicCube = () =>
  useCubeScene({
    createGeometry: () => new THREE.BoxGeometry(1, 1, 1),
    createMaterial: () => new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  });

/**
 * Cube variant with visible wireframe-style edges.
 */
export const CubeWithEdges = () =>
  useCubeScene({
    createGeometry: () => new THREE.BoxGeometry(1, 1, 1),
    createMaterial: () => new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    setupExtras: (_scene, cube) => {
      const edges = new THREE.EdgesGeometry(cube.geometry);
      const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
      const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
      cube.add(edgeLines);
    },
  });

/**
 * Rounded cube variant with directional and ambient lighting.
 */
export const RoundedCubeWithLighting = () =>
  useCubeScene({
    createGeometry: () => new RoundedBoxGeometry(1, 1, 1, 4, 0.12),
    createMaterial: () => new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
    setupExtras: (scene) => {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
      directionalLight.position.set(2, 3, 4);
      scene.add(directionalLight);
      scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    },
  });

/**
 * Default Scene export kept for backwards compatibility.
 */
export const Scene = RoundedCubeWithLighting;
