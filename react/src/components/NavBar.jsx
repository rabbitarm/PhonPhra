import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  const [isNavActive, setIsNavActive] = useState(false);
  const toggleNav = () => setIsNavActive(!isNavActive);

  return (
    <header id="navBar" className="container !p-4">
      <nav className="relative flex items-center justify-between">
        <div id="navBrand" className="flex flex-row items-center gap-2 text-2xl fill-slate">
          <svg viewBox="0 -960 960 960">
            <path d="M160-80v-366q-52-13-86-55t-34-98h80q0 32 23.5 55.5T199-520h41v-86q-52-13-86-55t-34-98h80q0 32 23.5 55.5T279-680h21l180-240 180 240h21q32 0 55.5-23.5T760-759h80q0 56-34 98t-86 55v86h41q32 0 55.5-23.5T840-599h80q0 56-34 98t-86 55v366H520v-160q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v160H160Zm240-600h160l-80-107-80 107Zm-80 160h320v-80H320v80Zm-80 360h120v-80q0-50 35-85t85-35q50 0 85 35t35 85v80h120v-280H240v280Zm240-280Zm0-240Zm0 160Z" />
          </svg>
          <span>พรพระ</span>
        </div>
        <button id="navToggle" className="md:hidden btn btn-icon btn-ghost" onClick={toggleNav}>
          {isNavActive
            ? <svg viewBox="0 -960 960 960">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            : <svg viewBox="0 -960 960 960">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
          }
        </button>
        <ul className={'z-50 md:flex md:mr-[-1rem] ' + 
          (isNavActive
            ? 'absolute md:static top-[calc(100%+24px)] right-0 flex flex-col md:flex-row p-2 md:p-0 rounded-lg md:rounded-none bg-white md:bg-none shadow-lg md:shadow-none'
            : 'hidden'
          )}>
          <li className="home">
            <Link className="btn btn-ghost-alternate-primary" to="/">หน้าแรก</Link>
          </li>
          <li className="prayer">
            <Link className="btn btn-ghost-alternate-primary" to="/บทสวดมนต์">บทสวดมนต์</Link>
          </li>
          <li className="contact">
            <Link className="btn btn-ghost-alternate-primary" to="/ติดต่อเรา">ติดต่อเรา</Link>
          </li>
        </ul>
      </nav>
    </header>
  );

}

export default NavBar;