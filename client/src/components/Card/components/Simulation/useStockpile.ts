import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Texture from 'assets/imgs/mineralStockpile.png';
import Displacement from 'assets/imgs/heightMapSmall.png';

interface IUseStockpile {
    ref: React.RefObject<HTMLCanvasElement> | null;
    height: number;
    width: number;
}

export const useStockpile: ({ ref, height, width }: IUseStockpile) => void = ({ ref, height, width }) => {
    React.useEffect(() => {
        if (!ref) return;

        const canvas = ref.current as HTMLCanvasElement;
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x0a1128)

        const light = new THREE.DirectionalLight(0xffffff, 10)
        light.position.set(0, 5, 10)
        scene.add(light)

        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.01,
            10
        )
        camera.position.z = .2
        camera.position.y = .25
        camera.position.x = .4

        const renderer = new THREE.WebGLRenderer({ canvas })
        renderer.setSize(width, height)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.screenSpacePanning = true
        controls.autoRotate = true
        controls.autoRotateSpeed = -0.7
        controls.maxPolarAngle = Math.PI / 2
        controls.minPolarAngle = 0

        const planeGeometry = new THREE.PlaneGeometry(1, 1, 50, 50)

        const texture = new THREE.TextureLoader().load(Texture)
        const material = new THREE.MeshPhongMaterial({ map: texture, wireframe: true, displacementScale: 2.5 })

        const displacementMap = new THREE.TextureLoader().load(Displacement);
        material.displacementMap = displacementMap
        material.displacementMap.repeat.set(.8, .8)
        material.displacementMap.center.set(0.40, 0.65)

        const plane: THREE.Mesh = new THREE.Mesh(planeGeometry, material)
        scene.add(plane)
        plane.rotateX(-Math.PI / 2)

        window.addEventListener('resize', onWindowResize, false)
        function onWindowResize() {
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
            render()
        }

        function animate() {
            requestAnimationFrame(animate)
            controls.update()
            render()
        }

        function render() {
            renderer.render(scene, camera)
        }

        animate()

        return () => { scene.clear() }
    }, [ref, height, width ])
}
