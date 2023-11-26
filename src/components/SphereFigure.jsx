import {useFrame, useLoader} from "react-three-fiber";
import * as THREE from "three";
import {useRef} from "react";

const SphereFigure = (props) => {

    const ref = useRef()
    let texture = useLoader(THREE.TextureLoader, '/wood.jpg');

    useFrame(state => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    })
    return (
        <mesh ref={ref} {...props} castShadow receiveShadow>
            <sphereBufferGeometry args={[1, 100, 100]}/>
            <meshPhysicalMaterial
                map={texture}
            />
        </mesh>
    )
}

export default SphereFigure;