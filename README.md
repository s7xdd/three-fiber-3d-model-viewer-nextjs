# 3D Model Viewer

A React-based web application for viewing 3D models in GLTF and GLB formats, built with Next.js and React Three Fiber. Upload your 3D models and interact with them using intuitive controls for rotation, panning, and zooming.

## Features

- **File Upload**: Supports `.gltf` and `.glb` 3D model files + Draco Compressed Models.
- **Interactive 3D Viewer**: Powered by `@react-three/fiber` and `@react-three/drei` for smooth rendering and controls.
- **Orbit Controls**: Rotate, pan, and zoom the model using mouse interactions.
- **Responsive Design**: Adapts to different screen sizes with a clean, modern UI.
- **Dynamic Lighting & Shadows**: Includes ambient light, directional light with shadows, and environment presets for realistic rendering.
- **Tailwind CSS Styling**: Sleek, modern UI with semi-transparent panels and hover effects.

## Demo

Upload a `.gltf` or `.glb` file to view it in the 3D canvas. Use the following controls:
- **Left-click + drag**: Rotate the model.
- **Right-click + drag**: Pan the view.
- **Scroll**: Zoom in/out.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/3d-model-viewer.git
   cd 3d-model-viewer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
├── .next
├── node_modules
├── public
│   └── table.glb           # Optional default model for testing
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global styles (Tailwind CSS)
│   │   ├── layout.tsx
│   │   └── page.tsx        # Main page combining viewer and upload components
│   ├── components
│   │   ├── 3d
│   │   │   ├── model.tsx   # 3D model component
│   │   │   └── viewer.tsx  # 3D viewer component using React Three Fiber
│   │   └── custom
│   │       └── file-upload.tsx  # File upload component for .gltf/.glb files
├── .eslintrc.js
├── .gitattributes
├── .gitignore
├── .eslintrc.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prettier.config.js
└── README.md
```

## Usage

1. **Upload a Model**:
   - Click the "Choose File" button in the top-left panel.
   - Select a `.gltf` or `.glb` file from your device.
   - The model will load in the 3D viewer, and the file name will be displayed.

2. **Interact with the Model**:
   - Use the mouse to rotate, pan, or zoom the model.
   - The controls guide in the top-right panel provides interaction details.

3. **Testing with Default Model**:
   - Uncomment the `useState` line in `src/app/page.tsx` to load a default model (`/table.glb`) from the `public` folder.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React Three Fiber**: React renderer for Three.js.
- **@react-three/drei**: Utilities for Three.js, including OrbitControls, Environment, and ContactShadows.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Type-safe JavaScript for better developer experience.

## Styling

The application uses **Tailwind CSS** for a modern, responsive UI. Key styling features include:
- **Semi-transparent Panels**: Upload and control panels use `bg-opacity-30` and `backdrop-blur-md` for a frosted glass effect.
- **Hover Effects**: Buttons feature smooth transitions with `hover:bg-blue-700`.
- **Responsive Layout**: Full-screen canvas with absolute-positioned UI elements.
- **Custom Colors**: Dark theme with `bg-gray-900`, `text-gray-100`, and `border-gray-700` for a sleek look.

To customize styles, modify `src/app/globals.css` or update Tailwind classes in the components.

## Limitations

- Only `.gltf` and `.glb` formats are supported.
- Large models may impact performance depending on the device.
- No support for model editing or advanced material customization.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Drei](https://github.com/pmndrs/drei)
- [Tailwind CSS](https://tailwindcss.com/)
