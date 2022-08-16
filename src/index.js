import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { myStore } from './storeFolder/store';
import { Left } from './localstorage/left';
import { Right } from './localstorage/right';
import "./assets/localStroage.css";
import "./assets/bootstrap.min.css";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={myStore}>
            <Router>
                <Routes>
                    <Route path="/" element={<Left/>} />
                    <Route path="/right" element={<Right/>} />
               </Routes>
            </Router>
        </Provider>
        
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
