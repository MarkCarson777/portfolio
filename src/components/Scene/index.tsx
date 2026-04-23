import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

type SceneConfig = {
  createGeometry: () => THREE.BufferGeometry;
  createMaterial: () => THREE.Material | THREE.Material[];
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
      if (Array.isArray(material)) {
        material.forEach((singleMaterial) => {
          if (
            singleMaterial instanceof THREE.MeshBasicMaterial &&
            singleMaterial.map
          ) {
            singleMaterial.map.dispose();
          }
          singleMaterial.dispose();
        });
      } else {
        if (material instanceof THREE.MeshBasicMaterial && material.map) {
          material.map.dispose();
        }
        material.dispose();
      }
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

const createFaceTexture = (label: string) => {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) {
    const fallbackTexture = new THREE.Texture();
    return fallbackTexture;
  }

  context.fillStyle = "#3ddc84";
  context.fillRect(0, 0, size, size);

  context.fillStyle = "#111111";
  context.font = "bold 160px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(label, size / 2, size / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
};

/**
 * Cube variant with centered face numbers on all six sides.
 */
export const NumberedCube = () =>
  useCubeScene({
    createGeometry: () => new THREE.BoxGeometry(1, 1, 1),
    createMaterial: () => {
      const textures = ["1", "2", "3", "4", "5", "6"].map(createFaceTexture);
      return textures.map(
        (texture) =>
          new THREE.MeshBasicMaterial({
            map: texture,
          }),
      );
    },
  });

/**
 * Default Scene export kept for backwards compatibility.
 */
export const Scene = RoundedCubeWithLighting;
