import React from 'react';
import './App.css';
import FaceBookLogin from "./components/FacebookLogin";

function App() {
  return (
    <div className="App">
      <p>Login </p>
      <FaceBookLogin className="FBBtn"/>
    </div>
  );
}

export default App;
