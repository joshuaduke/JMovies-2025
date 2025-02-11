import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <nav className="bg-amber-200">
      <ul className="p-6 text-black flex flex-row justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>Search</Link>
        </li>
        <li>
          <Link>Watchlist</Link>
        </li>
        <li>
          <Link>Diary</Link>
        </li>
        <li>
          <Link>Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
