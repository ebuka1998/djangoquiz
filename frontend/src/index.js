import React from 'react';
import ReactDom from 'react-dom'
import App from './App'
import { ScoreContextProvider } from './context/scoreContext';
import { UserContextProvider } from './context/userContext';

ReactDom.render(
    <React.StrictMode>
        <UserContextProvider>
        <ScoreContextProvider>
            <App/>
        </ScoreContextProvider> 
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)