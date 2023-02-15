import * as THREE from "three";

export default function Object() 
{
    const verticesCount = 10 * 3
    const positions = new Float32Array(verticesCount * 3)
    
    for(let i = 0; i < verticesCount * 3; i++)
        positions[i] = (Math.random() - 0.5) * 3
return (
    
    <mesh>
        <bufferGeometry>
    <bufferAttribute
        attach="attributes-position"
        count={ verticesCount }
        itemSize={ 3 }
        array={ positions }
    />
</bufferGeometry>
        <meshStandardMaterial color='red' sides={THREE.DoubleSide} />
    </mesh>
    
)
}