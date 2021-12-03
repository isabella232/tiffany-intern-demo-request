import React from "react";

// Import assets
import Logo from "../../assets/images/logo.png";

const SideBar = () => {
  return (
    <div>
      <ul class="sidebar">
        <li class="sidebar-brand">
          <img src={Logo} alt="" />
          {/* <a href="">Welcome Mark</a> */}
        </li>
        <li className='sidebar__name'>
          <a href="#">Welcome Mark</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
