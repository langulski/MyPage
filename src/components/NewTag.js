/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-children-prop */
import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import styled from 'styled-components';

const StyledShpere = styled.div`
  width: 700px;
  height: 600px;
`;
function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: 'Roboto Mono',
    fontSize: 1.5,
    letterSpacing: -0.005,
    lineHeight: 1,
    'material-toneMapped': false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? '#fA2720' : 'white'),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

// eslint-disable-next-line prettier/prettier
let MyList = ['Python','JavaScript','Pandas','Matplotlib','Seaborn','MySQL','Sklearn','PostgreSQL','Excel','Streamlit','TensorFlow','Tableau','Power Bi','Pytorch']
function wordFromMyList(i, j) {
  let y = MyList[i + j];

  return y;
}

function Cloud({ count = 4, radius = 200 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          wordFromMyList(i, j),
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function TagSphere() {
  return (
    <StyledShpere>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 45], fov: 92 }}>
        <fog attach="fog" args={['#202025', 0, 60]} />
        <Cloud count={8} radius={25} />
        <TrackballControls />
      </Canvas>
    </StyledShpere>
  );
}
