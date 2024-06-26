import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Aside() {

  const [navActive, setNavActive] = useState(false);
  const navToggle = () => setNavActive(!navActive);
  /*const navLeave = () => setNavActive(false);*/

  return (
    <aside id="aside" className={navActive ? 'active' : ''} /*onMouseLeave={navLeave}*/>
      <nav>
        <div id="navBrand">
          <Link className="flex flex-row items-center gap-2 text-2xl fill-slate" to="/">
            <span className="material-symbols-outlined">temple_buddhist</span>
            <span>พรพระ</span>
          </Link>
        </div>
        <button id="navToggle" className="btn btn-icon btn-ghost" onClick={navToggle}>
          <span className="material-symbols-outlined">
            {navActive ? 'close' : 'menu'}
          </span>
          <span className="hidden">เมนู</span>
        </button>
        <ul id="navMain">
          <li className="nav-itemlist"><Link className="btn btn-ghost" to="/">บทสวดมนต์</Link></li>
          <li className="nav-bookmark"><Link className="btn btn-ghost" to="/รายการโปรด">รายการโปรด</Link></li>
          <li className="nav-itemcategory"><Link className="btn btn-ghost" to="/หมวดหมู่">หมวดหมู่</Link></li>
          <li className="nav-contact"><Link className="btn btn-ghost" to="/ติดต่อเรา">ติดต่อเรา</Link></li>
          <li className="nav-layer"><Link className="btn btn-ghost" to="/Layer">Layer</Link></li>
          <li className="nav-status"><Link className="btn btn-ghost" to="/StatusCode">StatusCode</Link></li>
        </ul>
      </nav>
    </aside>
  );

}

export default Aside;