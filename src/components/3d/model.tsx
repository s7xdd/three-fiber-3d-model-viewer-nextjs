import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const { scene }: any = useGLTF(props.modelPath);
  return <primitive object={scene} {...props} />;
}
