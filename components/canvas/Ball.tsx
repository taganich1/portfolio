'use client';
import React, { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

interface BallProps {
    imgUrl: {
        src: string;
    };
}
const Ball: FC<BallProps> = ({ imgUrl }) => {
    const [decal] = useTexture([imgUrl.src]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                />
            </mesh>
        </Float>
    );
};

interface BallCanvasProps {
    icon: {
        src: string;
    };
}

const BallCanvas: FC<BallCanvasProps> = ({ icon }) => {
    return (
        <Canvas
            className="z-40"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;