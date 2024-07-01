import React from 'react';
import { Link } from 'react-router-dom';

const NavMain = ({ className, to, icon, text }) => (
  <li className={className}>
    <Link className={"btn btn-mix"} to={to}>
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text">{text}</span>
    </Link>
  </li>
);

export default NavMain;