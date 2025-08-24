import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

function App() {
  const [status, setStatus] = useState('Idle');

  const handleRecord = async () => {
    setStatus('Recording...');
    // In a real app, this would communicate with the agent/recorder
    // via Tauri commands.
    await invoke('start_recording');
    setTimeout(async () => {
      await invoke('stop_recording');
      setStatus('Recording saved!');
    }, 3000); // Simulate a 3-second recording
  };

  return (
    <div className="container">
      <h1>Welcome to FalconX</h1>
      <div className="card">
        <button onClick={handleRecord}>
          Record New Workflow
        </button>
        <p>Status: {status}</p>
      </div>
    </div>
  );
}

export default App;
