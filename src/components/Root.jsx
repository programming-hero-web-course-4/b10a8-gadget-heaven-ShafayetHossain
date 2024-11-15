import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import SideBar from "./SideBar";
import toast, { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div>
        
      <div className="bg-[#9538E2]">
        <NavBar></NavBar>
        <Banner></Banner>
      </div>

      <div className="text-center font-bold text-4xl my-8">
        <h1>Explore Cutting-Edge Gadgets</h1>
      </div>

      <div className="lg:flex w-5/6 mx-auto gap-x-4">
        <SideBar></SideBar>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
