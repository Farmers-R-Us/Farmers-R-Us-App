import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './style.scss'

const container = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(container);

rootContainer.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);