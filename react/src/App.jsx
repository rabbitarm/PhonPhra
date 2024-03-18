import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import Layer from './components/Layer';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <ItemList />
      <section className="hidden">
        <Layer />
      </section>
    </>
  );
  
};

export default App;
