import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from './store/itemListSlice';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import ItemContent from './components/ItemContent';
import ContactUs from './components/ContactUs';
import Layer from './components/Layer';
import NotFound from './components/NotFound';

function App() {

  const dispatch = useDispatch();
  const { itemList, loading, error } = useSelector((state) => state.itemList);

  /* Item List - Fetch */
  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<NotFound />} />
        <Route path='/บทสวดมนต์' element={<ItemList />} />
        <Route path='/บทสวดมนต์/:item_number' element={<ItemContent />} />
        <Route path='/ติดต่อเรา' element={<ContactUs />} />
        <Route path='/Layer' element={<Layer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
  
};

export default App;
