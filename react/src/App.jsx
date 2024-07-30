import React, { useEffect } from 'react';
import { userSimpleID } from './api/userApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userFetch } from './store/userSlice';
import { itemFetch } from './store/itemListSlice';
import { itemCategoryFetch } from './store/itemCategorySlice';
import { bookmarkFetch } from './store/bookmarkListSlice';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/forms/Register';
import LogIn from './components/forms/LogIn';
import ForgotPassword from './components/forms/ForgotPassword';
import ItemList from './components/ItemList';
import ItemContent from './components/ItemContent';
import ItemCategory from './components/ItemCategory';
import Bookmark from './components/Bookmark';
import ContactUs from './components/forms/ContactUs';
import NotFound from './components/NotFound';
import Layer from './components/Layer';
import StatusCode from './components/includes/StatusCode';

function App() {

  const dispatch = useDispatch();

  /* Item List - Fetch */
  useEffect(() => {
    dispatch(userFetch(userSimpleID));
    dispatch(itemFetch());
    dispatch(itemCategoryFetch());
    dispatch(bookmarkFetch());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <main id="main">
        <Routes>
          <Route index element={<ItemList />} />
          <Route path='/บทสวดมนต์' element={<ItemList />} />
          <Route path='/บทสวดมนต์/:item_number' element={<ItemContent />} />
          <Route path='/บทสวดมนต์/:item_number/:item_name' element={<ItemContent />} />
          <Route path='/รายการโปรด' element={<Bookmark />} />
          <Route path='/รายการโปรด/:bookmark_id/:item_number' element={<ItemContent />} />
          <Route path='/รายการโปรด/:bookmark_id/:item_number/:item_name' element={<ItemContent />} />
          <Route path='/หมวดหมู่' element={<ItemCategory />} />

          <Route path='/สมัครสมาชิก' element={<Register />} />
          <Route path='/เข้าสู่ระบบ' element={<LogIn />} />
          <Route path='/ลืมรหัสผ่าน' element={<ForgotPassword />} />

          <Route path='/ติดต่อเรา' element={<ContactUs />} />
          <Route path='/Layer' element={<Layer />} />
          <Route path='/StatusCode' element={<StatusCode />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
  
};

export default App;
