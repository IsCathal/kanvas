// src/CustomVRButton.js
import React from 'react';
import store from './store';

function CustomVRButton() {
  const handleEnterVR = () => {
    store.enterVR();
  };

  const handleEnterAR = () => {
    store.enterAR();
  };

  return (
    <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={handleEnterVR}>
        Enter VR
      </button>
      <button style={styles.button} onClick={handleEnterAR}>
        Enter AR
      </button>
    </div>
  );
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 1000,
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#6200EE',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CustomVRButton;
