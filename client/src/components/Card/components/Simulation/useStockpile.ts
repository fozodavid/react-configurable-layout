import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Texture from 'assets/imgs/mineralStockpile.png';
import Displacement from 'assets/imgs/heightMapSmall.png';

interface IUseStockpile {
    ref: React.RefObject<HTMLCanvasElement> | null;
}

export const useStockpile: ({ ref }: IUseStockpile) => void = ({ ref }) => {

    React.useEffect(() => {
        if (!ref) return;

        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x0a1128)

        const light = new THREE.DirectionalLight(0xffffff, 10)
        light.position.set(0, 5, 10)
        scene.add(light)

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.z = .4
        camera.position.y = .5
        camera.position.x = .8

        const canvas = ref.current as HTMLCanvasElement;
        const renderer = new THREE.WebGLRenderer({ canvas })
        renderer.setSize(window.innerWidth, window.innerHeight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.screenSpacePanning = true

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
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
            render()
        }

        function animate() {
            requestAnimationFrame(animate)
            plane.rotateZ(0.001)
            render()
        }

        function render() {
            renderer.render(scene, camera)
        }

        animate()
    }, [ref])
}