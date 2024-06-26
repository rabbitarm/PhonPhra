import React from 'react';
import { Link } from 'react-router-dom';

const NavMain = ({ className, to, icon, text, navMinimize }) => (
  <li className={(navMinimize ? 'tooltip tooltip-right ' : '') + (className)} {...(navMinimize && { 'data-tip': text })}>
    <Link className={"btn" + (navMinimize ? ' btn-icon' : '') + " btn-ghost"} to={to}>
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text">{text}</span>
    </Link>
  </li>
);

export default NavMain;