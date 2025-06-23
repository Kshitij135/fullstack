import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Backend API ko call kar rahe hain
    fetch('http://localhost:8080/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(err => {
        console.error("Failed to fetch message:", err);
        setMessage("Failed to connect to Backend. Is it running?");
      });
  }, []); 

  return (
    <>
      <h1>React & Spring Boot Demo</h1>
      <div className="card">
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;