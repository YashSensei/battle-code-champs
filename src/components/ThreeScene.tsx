import { useEffect, useRef } from "react";
import * as THREE from "three";

type ThreeSceneProps = {
  className?: string;
};

const ThreeScene = ({ className }: ThreeSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Geometry: wireframe icosahedron for minimalistic 3D feel
    const geometry = new THREE.IcosahedronGeometry(2.0, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Subtle gradient background via fog-like overlay
    scene.fog = new THREE.FogExp2(0x000000, 0.06);

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX = x;
      mouseY = y;
    };

    const onResize = () => {
      if (!containerRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const onScroll = () => {
      const progress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      targetRotX = progress * Math.PI * 0.6; // up to ~108deg
      targetRotY = progress * Math.PI * 0.4;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    onResize();
    onScroll();

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      // Ease rotation toward target for smoothness
      mesh.rotation.x += (targetRotX - mesh.rotation.x) * 0.05;
      mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.05;
      // Subtle idle sway + mouse parallax
      mesh.rotation.y += Math.sin(t * 0.2) * 0.002 + mouseX * 0.02;
      mesh.rotation.x += Math.cos(t * 0.15) * 0.001 + mouseY * 0.02;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement))
        container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className={className} />;
};

export default ThreeScene;
