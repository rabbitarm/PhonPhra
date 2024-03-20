import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import ContactUs from './components/ContactUs';
import Layer from './components/Layer';
import ItemContent from './components/ItemContent';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<ItemList />} />
          <Route path='/ติดต่อเรา' element={<ContactUs />} />
          <Route path='/Layer' element={<Layer />} />
          <Route path='/บทสวดมนต์/:item_number' element={<ItemContent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
  
};

export default App;
