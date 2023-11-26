import './App.css';
import {Canvas} from "react-three-fiber";
import {Suspense} from "react";
import Orbit from "./components/Orbit";
import Bulb from "./components/Bulb";
import Floor from "./components/Floor";
import Background from "./components/Background";
import ColorPicker from "./components/ColorPicker";
import {Physics} from "use-cannon";
import Cars from "./components/Cars";
import CameraButtons from "./components/CameraButtons";
import CameraControls from "./components/CameraControls";


function App() {

    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <ColorPicker/>
            <CameraButtons/>
            <Canvas
                shadowMap
                style={{background: 'black'}}
                camera={{position: [5, 5, 5]}}
            >
                <CameraControls/>
                {/*<fog attach={'fog'} args={['white', 1, 10]}/>*/}
                <ambientLight intensity={0.2}/>
                <pointLight/>
                <Bulb position={[0, 3, 0]}/>
                <Orbit/>
                <Suspense fallback={null}>
                    <Background/>
                </Suspense>
                <axesHelper args={[5]}/>
                <Physics>
                    <Cars/>
                    <Floor position={[0, -0.5, 0]}/>
                </Physics>
            </Canvas>
        </div>
    );
}

export default App;
