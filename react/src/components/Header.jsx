import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMain from './includes/NavMain';
import WidgetCalendar from './includes/WidgetCalendar';
import WidgetCountNumber from './includes/WidgetCountNumber';

function Header() {

  const [navMainActive, setNavMainActive] = useState(false);
  const [navUserActive, setNavUserActive] = useState(false);
  const navToggle = () => {navLeave(); setNavMainActive(!navMainActive);}
  const navUserToggle = () => {navLeave(); setNavUserActive(!navUserActive);}
  const navLeave = () => {/*setNavMainActive(false); setNavUserActive(false);*/}

  const [calendarActive, setCalendarActive] = useState(false);
  const handleCalendarToggle = () => setCalendarActive(!calendarActive);
  const [fontSizeActive, setFontSizeActive] = useState(false);
  const handleFontSizeToggle = () => setFontSizeActive(!fontSizeActive);
  const [countNumberActive, setCountNumberActive] = useState(false);
  const handleCountNumberToggle = () => setCountNumberActive(!countNumberActive);

  return (
    <header id="header" className={(navMainActive ? 'navmain-active' : '') + (navUserActive ? ' navuser-active' : '')} onMouseLeave={navLeave}>
      <div className="container">
        <div id="navBrand">
          <Link to="/">
            <span className="material-symbols-outlined fill">temple_buddhist</span>
            <span className="text">พรพระ</span>
          </Link>
        </div>
        <nav id="navMain">
          <button id="navMainToggle" className="btn btn-icon btn-mix" onClick={navToggle}>
            <span className={"material-symbols-outlined" + (navMainActive ? '' : ' fill')}>{navMainActive ? 'close' : 'menu'}</span>
            <span className="hidden">เมนู</span>
          </button>
          <ul>
            <NavMain className="itemlist" to="/" icon="description" text="บทสวดมนต์" />
            <NavMain className="bookmark" to="/รายการโปรด" icon="bookmark" text="รายการโปรด" />
            <NavMain className="itemcategory" to="/หมวดหมู่" icon="category" text="หมวดหมู่" />
          </ul>
        </nav>
        <WidgetCalendar calendarActive={calendarActive} className="absolute top-2 sm:top-4 right-16 sm:right-20 -mb-5" />
        <WidgetCountNumber countNumberActive={countNumberActive} />
        <nav id="navUser">
          <Link id="navUserToggle" className="btn btn-icon btn-mix" to="เข้าสู่ระบบ">
            <span className={`material-symbols-outlined ${navUserActive ? 'fill' : ''}`}>account_circle</span>
            <span className="text hidden">เข้าสู่ระบบ</span>
          </Link>
          <button id="navUserToggle" className="btn btn-icon btn-mix" onClick={navUserToggle}>
            <span className={`material-symbols-outlined ${navUserActive ? 'fill' : ''}`}>settings</span>
            <span className="text hidden">ตั้งค่า</span>
          </button>
          {navUserActive &&
          <div>
            <ul>
              <li className="user-profile">
                <Link className="btn btn-ghost" to="#ข้อมูลผู้ใช้งาน">
                  <span className="material-symbols-outlined">badge</span>
                  <span className="text">ข้อมูลผู้ใช้งาน</span>
                </Link>
              </li>
            </ul>
            <hr />
            <h6 className="text-slate px-4 pt-4 pb-2">การตั้งค่า</h6>
            <ul>
              <li className="calendar">
                <button id="navCalendarToggle" className="btn btn-ghost" onClick={handleCalendarToggle}>
                  <span className="material-symbols-outlined">today</span>
                  <span className="text">วันพระ</span>
                  <span className={"icon-xl ml-6 material-symbols-outlined" + (calendarActive ? ' fill text-success' : '')}>{calendarActive ? 'toggle_on' : 'toggle_off'}</span>
                </button>
              </li>
              <li className="fontsize">
                <button id="navFontSizeToggle" className="btn btn-ghost" onClick={handleFontSizeToggle}>
                  <span className="material-symbols-outlined">format_size</span>
                  <span className="text">ขนาดอักษร</span>
                  <span className={"icon-xl ml-6 material-symbols-outlined" + (fontSizeActive ? ' fill text-success' : '')}>{fontSizeActive ? 'toggle_on' : 'toggle_off'}</span>
                </button>
              </li>
              <li className="countnumber">
                <button id="navCountNumberToggle" className="btn btn-ghost" onClick={handleCountNumberToggle}>
                  <span className="material-symbols-outlined">pin</span>
                  <span className="text">ที่นับจำนวน</span>
                  <span className={"icon-xl ml-6 material-symbols-outlined" + (countNumberActive ? ' fill text-success' : '')}>{countNumberActive ? 'toggle_on' : 'toggle_off'}</span>
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