import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './styles/app.css';
import { ThemeProvider } from '@mui/material';
import theme from './styles/themes.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
            <App />
        {/* </ThemeProvider> */}
    </BrowserRouter>
)
