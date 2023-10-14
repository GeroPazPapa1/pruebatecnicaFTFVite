import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

function App() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    // Realiza una solicitud al servidor backend para obtener los commits
    fetch('http://localhost:3000/api/commits') // Reemplaza la URL con la ruta correcta de tu servidor
      .then(response => response.json())
      .then(data => {
        // Actualiza el estado de "commits" con los datos recibidos
        setCommits(data);
      })
      .catch(error => {
        // Maneja errores
        console.error('Error al obtener los commits:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Historial de Commits</h1>
        <ul>
          {commits.map(commit => (
            <li key={commit.sha}>
              <strong>{commit.committer.login}:</strong> {commit.commit.message}
            </li>
          ))}
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
