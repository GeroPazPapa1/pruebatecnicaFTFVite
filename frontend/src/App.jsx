import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './assets/tailwind.css';

function App() {
    const [commits, setCommits] = useState([]); 

    useEffect(() => {
        // Realiza una solicitud al servidor backend para obtener los commits
        fetch('http://localhost:3000/api/commits') 
            .then(response => response.json())
            .then(data => {
                // Verifica que "data" sea un arreglo antes de actualizar el estado
                if (Array.isArray(data)) {
                    setCommits(data);
                } else {
                    console.error('Los datos recibidos no son un arreglo:', data);
                }
            })
            .catch(error => {
                // Maneja errores
                console.error('Error al obtener los commits:', error);
            });
    }, []);

    return (
        <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center">
            <header className="text-center">
                <h1 className="text-3xl font-bold text-primary mb-4">Historial de Commits</h1>
                <ul className="list-disc">
                    {commits.map(commit => (
                        <li key={commit.sha} className="text-primary mb-2">
                            <strong className="font-bold">{commit.committer.login}:</strong> {commit.commit.message}
                        </li>
                    ))} 
                </ul>
                <img src={logo} className="w-32 h-32 mt-8" alt="logo" />
                <p className="text-primary text-sm">
                    Realizado por Geronimo Nicolas Paz Papa. ¡Gracias por la oportunidad! <code className="font-bold"></code>
                </p>
            </header>
        </div>
    );
}

export default App;

//Listo para enviar!