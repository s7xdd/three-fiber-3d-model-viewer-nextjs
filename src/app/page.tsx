"use client";

import ThreeViewer from "@/components/3d/viewer";
import { useState } from "react";

export default function Home() {
  const [modelPath, setModelPath] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setModelPath(url);
      setFileName(file.name);
      setFileUploaded(true);
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <ThreeViewer modelPath={modelPath} />
      <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-30 backdrop-blur-md text-white p-6 rounded-xl max-w-xs text-sm shadow-lg border border-gray-700">
        <h3 className="font-semibold text-lg mb-3 text-gray-100">Upload Model</h3>
        <div className="flex flex-col items-center">
          <label htmlFor="file-upload" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center">
            {fileUploaded ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                Choose Another File
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                Choose File
              </>
            )}
          </label>
          <input id="file-upload" type="file" accept=".gltf,.glb" onChange={handleFileUpload} className="hidden" />
          <p className="mt-2 text-xs text-gray-300">Supported formats: .gltf, .glb</p>
          {fileUploaded && <p className="mt-2 text-xs text-gray-300">Uploaded: {fileName}</p>}
        </div>
      </div>
    </div>
  );
}

