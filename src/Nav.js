import React from "react";

const Nav = ({ activeTab, onTabChange }) => (
  <nav className="App-nav">
    <h5> This cart was built by sonnie.</h5>
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && "selected"}`}>
        <a onClick={() => onTabChange(0)}>Items</a>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && "selected"}`}>
        <a onClick={() => onTabChange(1)}>Cart</a>
      </li>
    </ul>
  </nav>
);
export default Nav;
