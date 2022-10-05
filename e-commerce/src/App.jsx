import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import BoxProducts from './components/BoxProducts';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavbarComponent/>
            <BoxProducts/>
        </div>
    );
}

export default App;
