"use client";

import ThreeViewer from "@/components/3d/viewer";
import FileUpload from "@/components/custom/file-upload";
import { useState } from "react";

export default function Home() {
  
  // Uncomment this useState to use the default model from the public folder for testing
  // const [modelPath, setModelPath] = useState("/table.glb");

  const [modelPath, setModelPath] = useState("");

  return (
    <div className="relative h-screen w-screen">
      <ThreeViewer modelPath={modelPath} />
      <FileUpload setModelPath={setModelPath} />
    </div>
  );
}
