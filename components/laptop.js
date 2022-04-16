import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'
//import { animate } from 'framer-motion'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Laptop = () => {
    const refConatiner = useRef()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))

    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )

    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refConatiner
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            renderer.setSize(scW, scH)
        }
    }, [renderer])

    // es-lint disable react-hooks

    useEffect(() => {
        const { current: container } = refConatiner
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            //alpha:  whether the canvas contains an alpha (transparency) buffer or not. Default is false.
            // anitialias: whether to perform antialiasing. Default is false.

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })

            //setPixelRatio(value: number ) Sets device pixel ratio.
            // This is usually used for HiDPI device to prevent blurring output canvas.

            renderer.setPixelRatio(window.devicePixelRatio)

            //          .setSize ( width : Integer, height : Integer, updateStyle : Boolean )
            // Resizes the output canvas to (width, height) with device pixel ratio taken into account,
            // and also sets the viewport to fit that size, starting in (0, 0).

            renderer.setSize(scW, scH)

            //          .outputEncoding : number
            //     Defines the output encoding of the renderer.
            //      Default is THREE.LinearEncoding

            renderer.outputEncoding = THREE.sRGBEncoding

            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            const scale = scH * 0.005 + 4.8

            //  orthographicCamera uses orthographic projection mode,
            // in this mode an objects's size
            //  in the rendered image stays constant regardless of its distance from the camera
            // left, right, top, bottom, near, far

            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            //invoking ambient light with color and intensity (1)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)

            //adding ambient light to the scene

            scene.add(ambientLight)

            // Orbit controls allow the camera to orbit around a target

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            loadGLTFModel(scene, '/laptop.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 100 ? frame + 1 : frame

                if (frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

                    camera.position.y = 10
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }
                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    return (
        <Box
            ref={refConatiner}
            className="laptop"
            m="auto"
            at={['-20px', '-60px', '-120px']}
            mb={['-40px', '-140px', '-200px']}
            w={[380, 480, 640]}
            h={[380, 480, 640]}
            position="relative"
        >
            {loading && (
                <Spinner
                    size="xl"
                    position="absolute"
                    left="50%"
                    top="50%"
                    ml="calc(0px -var(---spinner-size) / 2)"
                    mt="calc(0px -var(---spinner-size))"
                />
            )}
        </Box>
    )
}

export default Laptop
