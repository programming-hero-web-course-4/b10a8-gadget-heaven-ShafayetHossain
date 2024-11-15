import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div>
      <div className="text-center bg-[#9538E2] p-3 rounded-t-xl space-y-2">
        <h1 className="text-white font-bold text-3xl">Deshbord</h1>
        <p className="text-white font-bold">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex gap-4 justify-center items-center">
          <NavLink
            to="/dashboard/storecards"
            className={({ isActive }) =>
              `font-bold btn ${isActive ? "btn-warning text-white" : ""}`
            }
          >
            Cart
          </NavLink>
          <NavLink
          to="/dashboard/wishcards"
            className={({ isActive }) =>
              `font-bold btn ${isActive ? "btn-warning text-white" : ""}`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
