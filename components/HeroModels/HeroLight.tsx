import * as Three from 'three';
export default function HeroLight() {

    return(
        <>
            <spotLight position={[2,5,6]} intensity={100} angle={0.15} penumbra={0.2} color={'white'} />

            <spotLight position={[4,5,4]} intensity={60} angle={0.2} penumbra={0.4} color={'#4cc9f0'} />

            <spotLight position={[-3,10,5]} intensity={80} angle={0.4} penumbra={0.5} color={'#9d4edd'} />

            <primitive object={new Three.RectAreaLight('#A259FF',8,3,2)} position={[3,0,4]} intensity={4} rotation={[-Math.PI / 4, Math.PI / 4, 0]} />

            <pointLight position={[1,3,4]} intensity={10} color={'#7209b7'} />

            <pointLight position={[1,2,-2]} intensity={10} color={'#0d00a4'} />
        </>
    )
}