import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  const [isNavActive, setIsNavActive] = useState(false);
  const toggleNav = () => setIsNavActive(!isNavActive);
  const hideNav = () => setIsNavActive(false);

  return (
    <header id="header" className="container !py-4 !mt-0" onMouseLeave={hideNav}>
      <nav className="relative flex justify-between items-center">
        <div id="navBrand">
          <Link className="flex flex-row items-center gap-2 text-2xl fill-slate" to="/">
            <span className="material-symbols-outlined">temple_buddhist</span>
            <span>พรพระ</span>
          </Link>
        </div>
        <button id="navToggle" className="md:hidden btn btn-icon btn-ghost" onClick={toggleNav}>
          {isNavActive
            ? <span className="material-symbols-outlined">close</span>
            : <span className="material-symbols-outlined">menu</span>
          }
        </button>
        <ul className={'z-10 md:flex ' + 
          (isNavActive
            ? 'absolute md:static top-[calc(100%+0px)] right-0 flex flex-col md:flex-row p-2 md:p-0 rounded-lg md:rounded-none bg-white md:bg-none shadow-lg md:shadow-none'
            : 'hidden'
          )}>
          <li className="nav-itemList">
            <Link className="btn btn-ghost-alternate-primary w-full md:w-fit justify-start" to="/">บทสวดมนต์</Link>
          </li>
          <li className="nav-bookmark">
            <Link className="btn btn-ghost-alternate-primary w-full md:w-fit justify-start" to="/รายการโปรด">รายการโปรด</Link>
          </li>
          <li className="nav-itemcategory">
            <Link className="btn btn-ghost-alternate-primary w-full md:w-fit justify-start" to="/หมวดหมู่">หมวดหมู่</Link>
          </li>
          <li className="nav-contact">
            <Link className="btn btn-ghost-alternate-primary w-full md:w-fit justify-start" to="/ติดต่อเรา">ติดต่อเรา</Link>
          </li>
          <li className="nav-layer">
            <Link className="btn btn-ghost-alternate-primary w-full md:w-fit justify-start" to="/Layer">Layer</Link>
          </li>
          <li className="nav-status">
            <Link className="btn btn-ghost-alternate-primary w-full md:w-fit justify-start" to="/StatusCode">StatusCode</Link>
          </li>
        </ul>
      </nav>
    </header>
  );

}

export default NavBar;