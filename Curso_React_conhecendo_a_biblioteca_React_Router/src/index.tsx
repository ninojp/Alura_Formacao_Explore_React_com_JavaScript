import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import BrowserRouter from './routes';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter />
    </React.StrictMode>,
    document.getElementById('root')
);
