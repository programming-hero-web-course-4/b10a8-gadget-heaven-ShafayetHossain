import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleToggle = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
      <div className="flex flex-col bg-slate-100 p-4 rounded-xl gap-y-3">
        <NavLink to="/">
          <button
            onClick={() => handleToggle(1)}
            className={`btn hover:bg-[#9538E2] hover:text-white text-black font-bold ${
              activeButton == 1
                ? "bg-[#9538E2] text-white  rounded-full"
                : "none"
            }`}
          >
            All Product
          </button>
        </NavLink>

        <NavLink to="/laptop">
          <button
            onClick={() => handleToggle(2)}
            className={`btn hover:bg-[#9538E2] hover:text-white text-black font-bold ${
              activeButton == 2
                ? "bg-[#9538E2] text-white  rounded-full"
                : "none"
            }`}
          >
            Laptops
          </button>
        </NavLink>

        <NavLink to="/phones">
          <button
            onClick={() => handleToggle(3)}
            className={`btn hover:bg-[#9538E2] hover:text-white text-black font-bold ${
              activeButton == 3
                ? "bg-[#9538E2] text-white  rounded-full"
                : "none"
            }`}
          >
            Phones
          </button>
        </NavLink>

        <NavLink to="/watches">
          <button
            onClick={() => handleToggle(4)}
            className={`btn hover:bg-[#9538E2] hover:text-white text-black font-bold ${
              activeButton == 4
                ? "bg-[#9538E2] text-white  rounded-full"
                : "none"
            }`}
          >
            Smart Watches
          </button>
        </NavLink>

        <NavLink to="/chargers">
          <button
            onClick={() => handleToggle(5)}
            className={`btn hover:bg-[#9538E2] hover:text-white text-black font-bold ${
              activeButton == 5
                ? "bg-[#9538E2] text-white  rounded-full"
                : "none"
            }`}
          >
            Chargers
          </button>
        </NavLink>

        <NavLink to='/powerbanks'>
          <button
            onClick={() => handleToggle(6)}
            className={`btn hover:bg-[#9538E2] hover:text-white text-black font-bold ${
              activeButton == 6
                ? "bg-[#9538E2] text-white  rounded-full"
                : "none"
            }`}
          >
            Powerbank
          </button>
        </NavLink>

        <NavLink to="/accessories">
          <button
            onClick={() => handleToggle(7)}
            className={`btn hover:bg-[#9538E2] hover:text-white text-black font-bold ${
              activeButton == 7
                ? "bg-[#9538E2] text-white  rounded-full"
                : "none"
            }`}
          >
            Accessories
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
