import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMain from './includes/NavMain';
import WidgetCalendar from './includes/WidgetCalendar';

function Header() {

  const [navMainActive, setNavMainActive] = useState(false);
  const [navSettingActive, setNavSettingActive] = useState(false);
  const navToggle = () => {navLeave(); setNavMainActive(!navMainActive);}
  const navSettingToggle = () => {navLeave(); setNavSettingActive(!navSettingActive);}
  const navLeave = () => {setNavMainActive(false); setNavSettingActive(false);}

  const [calendarActive, setCalendarActive] = useState(false);
  const handleCalendarToggle = () => setCalendarActive(!calendarActive);
  const [fontSizeActive, setFontSizeActive] = useState(false);
  const handleFontSizeToggle = () => setFontSizeActive(!fontSizeActive);

  return (
    <header id="header" className={(navMainActive ? 'navmain-active' : '') + (navSettingActive ? ' navsetting-active' : '')} onMouseLeave={navLeave}>
      <div className="container">
        <div id="navBrand">
          <Link to="/">
            <span className="material-symbols-outlined fill">temple_buddhist</span>
            <span className="text">พรพระ</span>
          </Link>
        </div>
        <nav id="navMain">
          <button id="navMainToggle" className="btn btn-icon btn-ghost" onClick={navToggle}>
            <span className={"material-symbols-outlined" + (navMainActive ? '' : ' fill')}>{navMainActive ? 'close' : 'menu'}</span>
            <span className="hidden">เมนู</span>
          </button>
          <ul>
            <NavMain className="itemlist" to="/" icon="description" text="บทสวดมนต์" />
            <NavMain className="bookmark" to="/รายการโปรด" icon="bookmark" text="รายการโปรด" />
            <NavMain className="itemcategory" to="/หมวดหมู่" icon="category" text="หมวดหมู่" />
          </ul>
        </nav>
        <WidgetCalendar calendarActive={calendarActive} />
        <nav id="navSetting">
          <button id="navSettingToggle" className="btn btn-icon btn-ghost" onClick={navSettingToggle}>
            <span className={"material-symbols-outlined" + (navSettingActive ? ' fill' : '')}>settings</span>
            <span className="text hidden">ตั้งค่า</span>
          </button>
          <ul>
            <li className="calendar">
              <button id="navCalendarToggle" className="btn btn-ghost" onClick={handleCalendarToggle}>
                <span className="material-symbols-outlined">today</span>
                <span className="text w-20">วันพระ</span>
                <span className={"material-symbols-outlined" + (calendarActive ? ' fill text-info' : '')}>{calendarActive ? 'check_box' : 'check_box_outline_blank'}</span>
              </button>
            </li>
            <li className="fontsize">
              <button id="navFontSizeToggle" className="btn btn-ghost" onClick={handleFontSizeToggle}>
                <span className="material-symbols-outlined">text_fields</span>
                <span className="text w-20">ขนาดอักษร</span>
                <span className={"material-symbols-outlined" + (fontSizeActive ? ' fill text-info' : '')}>{fontSizeActive ? 'check_box' : 'check_box_outline_blank'}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );

};

export default Header;