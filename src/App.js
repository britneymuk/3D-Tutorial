import React, { Suspense } from "react";
import "./index.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Box from "./components/Box";
import Sphere from "./components/AnimatedSphere";
import Shiba from "./components/Shiba";
import { Model } from "./components/Iphone";

import {Canvas} from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />

      <TextSection />

      <Canvas>
        <OrbitControls enableZoom={false}/> //make the box rotate when user drag it
        <ambientLight intensity={0.5}/> // switch on light
        <directionalLight position={[-2,5,2]} intensity={1}/> // define light direction
        <Suspense fallback={null}> // need a fallback, cuz if function not able to fetch material, it'll break
          <Box/> // the box
        </Suspense>
      </Canvas>

      <Canvas>
        <OrbitControls enableZoom={false}/> //make the box rotate when user drag it
        <ambientLight intensity={0.5}/> // switch on light
        <directionalLight position={[-2,5,2]} intensity={1}/> // define light direction
        <Suspense fallback={null}> // need a fallback, cuz if function not able to fetch material, it'll break
          <Sphere/> // the Sphere
        </Suspense>
      </Canvas>

      {/* <Canvas>
        <OrbitControls enableZoom={false}/> //make the box rotate when user drag it
        <ambientLight intensity={0.5}/> // switch on light
        <directionalLight position={[-2,5,2]} intensity={1}/> // define light direction
        <Suspense fallback={null}> // need a fallback, cuz if function not able to fetch material, it'll break
          <Shiba position={[0.025, -0.9, 0]}/> // the 3D Model
        </Suspense>
      </Canvas> */}

      {/* <Canvas>
        <OrbitControls enableZoom={false}/> //make the box rotate when user drag it
        <ambientLight intensity={0.5}/> // switch on light
        <directionalLight position={[-2,5,2]} intensity={1}/> // define light direction
        <Suspense fallback={null}> // need a fallback, cuz if function not able to fetch material, it'll break
          <Model/> // the 3D Model
        </Suspense>
      </Canvas> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas{
    height: 500px;
  }
`;
