"use client";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
// Define the Unity context with the correct URLs for your build files

// Pass the unityContext to your component
function App() {
  const unityContext = useUnityContext({
    loaderUrl: "/build/build.loader.js",
    dataUrl: "/build/build.data.gz",
    frameworkUrl: "/build/build.js.gz",
    codeUrl: "/build/build.wasm.gz",
  });

  return (
    <div>
      <Unity unityContext={unityContext} matchWebGLToCanvasSize={false} />
    </div>
  );
}

export default App;
