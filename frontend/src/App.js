import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import './App.css';

function App() {
    console.log('app')
    return (
        <>
            <Nav />
            <Home />
        </>
    )
}

export default App;