/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 earth.gltf 
Author: Akshat (https://sketchfab.com/shooter24994)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
Title: Earth
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/earth.gltf')
  const earthRef = useRef();
  const [selectedCountry, setSelectedCountry] = useState(null);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Rotation continue autour de l'axe Y
    earthRef.current.rotation.y = elapsedTime * 0.01; // Ajustez la vitesse de rotation au besoin


  });
  const handleEarthClick = () => {
    if (props.getCountry) {
      props.getCountry('terre'); // Appeler la fonction avec le nom du pays lorsque la Terre est cliquée
    }
  };
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} ref={earthRef} onClick={handleEarthClick} />
    </group>
  )
}


useGLTF.preload('/earth.gltf')