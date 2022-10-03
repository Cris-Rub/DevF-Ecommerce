import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Products from './components/Products';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavbarComponent/>
            <Products/>
        </div>
    );
}

export default App;
