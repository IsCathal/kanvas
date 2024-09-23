
# Cluster Graph VR Project - Kanvas

## Project Overview

**Kanvas** is a Virtual Reality (VR) project that leverages 3D rendering using React Three Fiber. It focuses on visualizing and interacting with cluster graphs in a virtual environment. This project integrates several cutting-edge libraries to render 3D models, manage VR experiences, and handle interactions in a seamless and performant manner.

## Features
- **3D Rendering**: Built using `react-three-fiber` to easily create and manipulate 3D scenes.
- **VR Support**: Leverages `@react-three/xr` for VR interaction, providing an immersive experience.
- **Cluster Graph Visualization**: Enables the visualization of complex data structures, such as cluster graphs, in a 3D space.

## Getting Started

To get started with the project, follow the steps below:

### Prerequisites

- Node.js (v16 or above)
- npm (v8 or above)

### Installation

1. Clone the repository:

    \`\`\`bash
    git clone https://github.com/isCathal/kanvas.git
    cd kanvas
    \`\`\`

2. Install the dependencies:

    \`\`\`bash
    npm install
    \`\`\`

### Running the Project

To start the project in development mode, use:

\`\`\`bash
npm start
\`\`\`

This will start a local development server on \`http://localhost:3000\`.

### Building for Production

To create a production build of the project, use:

\`\`\`bash
npm run build
\`\`\`

This will create an optimized production build in the \`build\` directory.

### Deployment

The project can be deployed using GitHub Pages. To deploy, run:

\`\`\`bash
npm run deploy
\`\`\`

This will deploy the app to the [kanvas homepage](https://isCathal.github.io/kanvas).

## Interesting Packages

This project uses several interesting packages that enhance its functionality. Here are the top three:

1. **@react-three/fiber**  
   A powerful React renderer for Three.js, making it easier to build 3D applications using React components.  
   Learn more: [@react-three/fiber documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

2. **@react-three/xr**  
   A library that provides VR/AR interaction support for React Three Fiber projects, allowing you to create immersive 3D and VR experiences with minimal setup.  
   Learn more: [@react-three/xr documentation](https://docs.pmnd.rs/react-xr/getting-started/introduction)

3. **@react-three/drei**  
   A collection of useful helpers for React Three Fiber, including cameras, controls, and loaders that help simplify building 3D scenes.  
   Learn more: [@react-three/drei documentation](https://docs.pmnd.rs/drei/introduction)

## Testing

To run the tests for the project, use:

\`\`\`bash
npm test
\`\`\`

## ESLint

To check the project for code issues using ESLint, run:

\`\`\`bash
npm run lint
\`\`\`

## License

This project is licensed under the MIT License.

---

Enjoy building with **Kanvas** and exploring the world of VR and cluster graph visualization!
