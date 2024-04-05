import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { itemFetch } from './store/itemListSlice';
import { bookmarkFetch } from './store/bookmarkListSlice';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import ItemContent from './components/ItemContent';
import Bookmark from './components/Bookmark';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Layer from './components/Layer';
import Status from './components/Status';

function App() {

  const dispatch = useDispatch();

  /* Item List - Fetch */
  useEffect(() => {
    dispatch(itemFetch());
    dispatch(bookmarkFetch());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<ItemList />} />
        <Route path='/บทสวดมนต์' element={<ItemList />} />
        <Route path='/บทสวดมนต์/:item_number' element={<ItemContent />} />
        <Route path='/รายการโปรด' element={<Bookmark />} />
        <Route path='/รายการโปรด/:bookmark_id/:item_number' element={<ItemContent />} />
        <Route path='/ติดต่อเรา' element={<ContactUs />} />
        <Route path='/Layer' element={<Layer />} />
        <Route path='/Status' element={<Status />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
  
};

export default App;
