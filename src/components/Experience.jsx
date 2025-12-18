import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";
import { Scroll } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <ScrollControls pages={3} damping={0.25}>
           <Scroll html>
        <div>hola</div>
            </Scroll>
        <Office />
      </ScrollControls>
    </>
  );
};
