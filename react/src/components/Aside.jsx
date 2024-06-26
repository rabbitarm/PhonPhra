import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMain from './includes/NavMain';

function Aside() {

  const [navMinimize, setNavMinimize] = useState(false);
  const navToggle = () => setNavMinimize(!navMinimize);
  /*const navLeave = () => setNavMinimize(false);*/

  return (
    <aside id="aside" className={navMinimize ? 'minimize' : ''} /*onMouseLeave={navLeave}*/>
      <nav>
        <div id="navBrand">
          <Link className="flex flex-row items-center gap-2 text-2xl fill-slate" to="/">
            <span className="material-symbols-outlined">temple_buddhist</span>
            <span className="text">พรพระ</span>
          </Link>
        </div>
        <button id="navToggle" className="btn btn-icon btn-ghost" onClick={navToggle}>
          <span className={"material-symbols-outlined" + (navMinimize ? ' fill' : '')}>dock_to_right</span>
          <span className="hidden">เมนู</span>
        </button>
        <ul id="navMain">
          <NavMain className="itemlist" to="/" icon="description" text="บทสวดมนต์" navMinimize={navMinimize} />
          <NavMain className="bookmark" to="/รายการโปรด" icon="bookmark" text="รายการโปรด" navMinimize={navMinimize} />
          <NavMain className="itemcategory" to="/หมวดหมู่" icon="category" text="หมวดหมู่" navMinimize={navMinimize} />
          <NavMain className="contact" to="/ติดต่อเรา" icon="mail" text="ติดต่อเรา" navMinimize={navMinimize} />
          <NavMain className="layer" to="/Layer" icon="layers" text="Layer" navMinimize={navMinimize} />
          <NavMain className="status" to="/StatusCode" icon="layers" text="StatusCode" navMinimize={navMinimize} />
        </ul>
      </nav>
      <section id="widgetCalendar">
        <span className="icon-moon">
          <span className="material-symbols-outlined fill">clear_night</span>
        </span>
        <div className="date">
          <h6>วันพระ</h6>
          <p className="date-full"><span>21 มิถุนายน 2567</span><br />
            <span>ขึ้น 15 ค่ำ เดือน 7</span></p>
          <p className="date-number">21</p>
        </div>
      </section>
    </aside>
  );

}

export default Aside;