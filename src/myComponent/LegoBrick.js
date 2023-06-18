import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LegoBrick = () => {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        // Set up the scene
        const scene = new THREE.Scene();

        // Set up the camera
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        camera.position.z = 5;

        // Set up the renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        // Create the LEGO brick geometry
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Set the initial color (e.g., red)
        const brick = new THREE.Mesh(geometry, material);
        scene.add(brick);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Update rotation values for animation
            brick.rotation.x += 0.01;
            brick.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Clean up on component unmount
        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} />;
};

export default LegoBrick;
