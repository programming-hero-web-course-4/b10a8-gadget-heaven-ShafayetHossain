import React, { useState } from "react";

const Seller = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleDiv = () => {
      setIsVisible(!isVisible);
    };


  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={"//i.ibb.co.com/v3htsp9/How-to-sell-on-Flipkart.jpg"}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Wow Your Business Is here now!
            </h1>
            <p className="py-6">
              Now you can manage and grow your ecommerce business wherever you
              are. It gives you the freedom to take care of business details
              right from your phone.
            </p>
            <button onClick={toggleDiv} className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>


      {
        isVisible &&       <div className=" flex p-6 gap-3">
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          Signup for Free
          </div>
          <div className="collapse-content">
            <p>Create your account through our website or mobile app with just your phone number</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
          Add Address Informatio
          </div>
          <div className="collapse-content">
            <p>Provide all address details of your business</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
          Add ID & Bank Information
          </div>
          <div className="collapse-content">
            <p>Add in your ID & Business related details. Include necessary bank information for payments</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
          List Products
          </div>
          <div className="collapse-content">
            <p>Add products to your store through seller center. Start selling as soon as your products go live after going through quality control"</p>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Seller;
