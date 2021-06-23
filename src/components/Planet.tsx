import React, { FC, useRef } from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';

const Box: FC = () => {
	const mesh = useRef<MeshProps>(null);
	useFrame(() => {
		if (mesh.current?.rotation) {
			mesh.current.rotation.y += 0.01;
		}
	});
	return (
		<mesh ref={mesh}>
			<boxGeometry args={[1, 2, 3]} />
			<meshLambertMaterial attach="material" color="blue" />
		</mesh>
	);
};

const Planet: FC = () => {
	return (
		<Canvas>
			{/* <ambientLight /> */}
			<Box />
		</Canvas>
	);
};

export default Planet;
