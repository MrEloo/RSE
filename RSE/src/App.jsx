import { useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import Earth from '../public/Earth';
import StarsMine from './components/StarsMine';
import Form from './components/Form';

function App() {
  const initialCameraPosition = [200, 50, 200];

  const handleCountryClick = (countryName) => {
    console.log(`Pays cliqué : ${countryName}`);
  };

  return (
    <>
      <Canvas camera={{ position: initialCameraPosition }}>
        <Suspense fallback={null}>
          <ambientLight />
          <OrbitControls />
          <Earth getCountry={handleCountryClick} />
          <StarsMine /> {/* Ajouter la composante des étoiles ici */}
        </Suspense>
        <Environment preset='sunset' />
      </Canvas>
      <article>
        <h1>Is your <br /> Web Site <br /> respectfull ? <br /></h1>
        <p>Let's be... <br /> <strong>ecologic</strong><br /><i className="fa-solid fa-triangle-exclamation" style={{ color: '#c5205a' }}></i></p>
      </article>
      <Form />
    </>
  );
}

export default App;
