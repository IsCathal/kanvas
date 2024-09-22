// src/XRContext.js
import React, { createContext, useContext } from 'react';
import { useXR } from '@react-three/xr';

const XRContext = createContext();

export const XRProvider = ({ children }) => {
  const xr = useXR();

  const enterVR = () => {
    if (xr.manager && xr.manager.setSessionMode) {
      xr.manager.setSessionMode('immersive-vr');
    } else {
      console.error('XR Manager or setSessionMode is not available.');
    }
  };

  return (
    <XRContext.Provider value={{ enterVR }}>
      {children}
    </XRContext.Provider>
  );
};

export const useXRContext = () => useContext(XRContext);
