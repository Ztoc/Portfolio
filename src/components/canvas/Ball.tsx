// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

// import CanvasLoader from '../layout/Loader';
// import { div } from 'three/tsl';

// const Ball = (props: any) => {
//   const [decal] = useTexture([props.imgUrl]);

//   // Check if imgUrl is valid
//   if (!props.imgUrl) {
//     return null; // or return a placeholder
//   }

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           // @ts-expect-error
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{
//         preserveDrawingBuffer: true,
//         powerPreference: 'high-performance',
//         antialias: true,
//       }}
//       style={{ maxWidth: '100%', maxHeight: '100%' }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
//         <Ball imgUrl={icon} />
//       </Suspense>
//     </Canvas>
//   );
// };

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <div className="h-28 w-28 bg-primary rounded-full">
      <img src={icon} alt="icon" className="w-full h-full rounded-[20px] object-contain" />
    </div>
  );
};

export default BallCanvas;
