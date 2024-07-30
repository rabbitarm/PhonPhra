import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WidgetCalendar from './includes/WidgetCalendar';

function Header() {

  const { userProfile } = useSelector((state) => state.user);

  const [navMainActive, setNavMainActive] = useState(false);
  const [navUserActive, setNavUserActive] = useState(false);
  const navToggle = () => {headerLeave(); setNavMainActive(!navMainActive);}
  const navUserToggle = () => {headerLeave(); setNavUserActive(!navUserActive);}
  const headerLeave = () => {setNavMainActive(false); setNavUserActive(false);}

  const [calendarActive, setCalendarActive] = useState(false);
  const handleCalendarToggle = () => setCalendarActive(!calendarActive);

  return (
    <header id="header" className={`${navMainActive ? 'navmain-active' : ''} ${navUserActive ? 'navuser-active' : ''}`} onMouseLeave={headerLeave}>
      <div className="container">
        <div id="navBrand">
          <Link to="/">
            <span className="material-symbols-outlined fill">temple_buddhist</span>
            <span className="text">พรพระ</span>
          </Link>
        </div>
        <nav id="navMain">
          <button id="navMainToggle" className="btn btn-icon btn-mix" onClick={navToggle}>
            <span className={`material-symbols-outlined ${navMainActive ? '' : ' fill'}`}>{navMainActive ? 'close' : 'menu'}</span>
            <span className="hidden">เมนู</span>
          </button>
          <ul id="navMainList">
            <li className="itemlist">
              <Link className="btn btn-mix" to="/">
                <span className="material-symbols-outlined">description</span>
                <span className="text">บทสวดมนต์</span>
              </Link>
            </li>
            <li className="bookmark">
              <Link className="btn btn-mix" to="/รายการโปรด">
                <span className="material-symbols-outlined">bookmark</span>
                <span className="text">รายการโปรด</span>
              </Link>
            </li>
            <li className="itemcategory">
              <Link className="btn btn-mix" to="/หมวดหมู่">
                <span className="material-symbols-outlined">category</span>
                <span className="text">หมวดหมู่</span>
              </Link>
            </li>
          </ul>
        </nav>
        <nav id="navUser">
          <WidgetCalendar calendarActive={calendarActive} addClassNameMode={'nav'} />
          {userProfile?.user_id === ''
          ? <Link className="btn btn-icon btn-mix" to="เข้าสู่ระบบ">
              <span className={`material-symbols-outlined ${navUserActive ? 'fill' : ''}`}>account_circle</span>
              <span className="text hidden">เข้าสู่ระบบ</span>
            </Link>
          : <button id="navUserToggle" className="btn btn-icon btn-mix" onClick={navUserToggle}>
              <span className={`material-symbols-outlined ${navUserActive ? 'fill' : ''}`}>settings</span>
              <span className="text hidden">ตั้งค่า</span>
            </button>
          }
          {navUserActive &&
            <div id="navUserList" className="nav-dropdown">
              <h6>การตั้งค่า</h6>
              <ul>
                <li className="userprofile">
                  <Link className="btn btn-ghost" to="#ข้อมูลผู้ใช้งาน">
                    <span className="material-symbols-outlined">badge</span>
                    <span className="text">ข้อมูลผู้ใช้งาน</span>
                  </Link>
                </li>
              </ul>
              <hr />
              <h6>ตัวเลือก</h6>
              <ul>
                <li className="calendar">
                  <button className="btn btn-ghost" onClick={handleCalendarToggle}>
                    <span className="material-symbols-outlined">today</span>
                    <span className="text">วันพระ</span>
                    <span className={`icon-xl material-symbols-outlined wght-200 ${calendarActive ? 'fill text-success' : ''}`}>{calendarActive ? 'toggle_on' : 'toggle_off'}</span>
                  </button>
                </li>
                <hr />
                <li className="lotout">
                  <button className="btn btn-ghost-alternate-warning">
                    <span className="material-symbols-outlined">logout</span>
                    <span className="text">ออกจากระบบ</span>
                  </button>
                </li>
              </ul>
            </div>
          }
        </nav>
      </div>
    </header>
  );

};

export default Header;