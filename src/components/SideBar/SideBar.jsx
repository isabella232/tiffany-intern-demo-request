import React from "react";

// Import redux actions
import { useDispatch } from "react-redux";

// Import actions
import { goToSearch, goToHome } from "../../actions/navigationAction";

// Import assets
import Logo from "../../assets/images/logoSideBar.png";

const SideBar = () => {
  // Defin the redux dispqtch in component
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="sidebar">
        <li className="sidebar-brand">
          <img
            src={Logo}
            alt=""
            onClick={() => {
              dispatch(goToHome(true));
              dispatch(goToSearch(false));
            }}
          />
          {/* <a href="">Welcome Mark</a> */}
        </li>
        <li className="sidebar__name">
          <a href="#">Welcome Mark</a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              dispatch(goToSearch(true));
              dispatch(goToHome(false));
            }}
          >
            Search
          </a>
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
