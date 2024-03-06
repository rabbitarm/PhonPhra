import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import Layer from './components/Layer';

function App() {

  return (
    <>
      <ItemList />
      <section className="hidden">
        <Layer />
      </section>
    </>
  );
  
};

export default App;
