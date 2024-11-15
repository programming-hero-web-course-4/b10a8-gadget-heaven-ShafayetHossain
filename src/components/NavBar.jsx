import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const [wishStore,setWishStore] = useState([]);
  const [cardStore,setCardStore] = useState([]);

  useEffect(() => {
    const storeData = localStorage.getItem("wishlist");
    if (storeData) {
      setWishStore(JSON.parse(storeData));
    }
  },[]);

  useEffect(() => {
    const storeData = localStorage.getItem("cards");
    if (storeData) {
      setCardStore(JSON.parse(storeData));
    }
  },[]);


  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="seller">Become Seller</NavLink>
      </li>
    </>
  );

  return (
    <div class="navbar  w-5/6 mx-auto bg-[#9538E2] text-white">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-[#b78add] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div class="navbar-end">
        <div className="flex items-center gap-x-2 text-xl">
          <div class="indicator">
            <span class="indicator-item badge badge-accent badge-xs">{cardStore.length}</span>
            <div className="bg-white p-3 rounded-full">
              <NavLink to="/dashboard/storecards">
                <BsCart4 className="text-black" />
              </NavLink>
            </div>
          </div>

          <div class="indicator">
            <span class="indicator-item badge badge-accent badge-xs">{wishStore.length}</span>
            <div className="bg-white p-3 rounded-full">
              <NavLink to="/dashboard/wishcards">
                <FaRegHeart className="text-black" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
