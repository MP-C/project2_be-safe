import React from 'react';

import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

import './App.css';

export default function App() {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}