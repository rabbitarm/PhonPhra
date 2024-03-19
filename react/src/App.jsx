import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import ContactUs from './components/ContactUs';
import Layer from './components/Layer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<ItemList />} />
          <Route path='/ติดต่อเรา' element={<ContactUs />} />
          <Route path='/Layer' element={<Layer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
  
};

export default App;
