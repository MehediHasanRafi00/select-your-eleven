import React from "react";

import footerLogo from "../assets/logo-footer.png";
import btnBg from "../assets/btn-bg.png";

const Footer = () => {
  return (
    <div className="pt-50 bg-black space-y-16">
      <img className="mx-auto h-[140px]" src={footerLogo} alt="" />
      <div className="max-w-[1200px] mx-auto flex justify-around flex-wrap gap-5">
        <div>
          <h3 className="font-semibold text-lg text-white">About Us</h3>
          <p className="text-[#ffffff60] max-w-[290px]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">Quick Links</h3>
          <ul className="list-disc list-inside space-y-2 mt-2 text-[#ffffff60] ">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">Subscribe</h3>
          <p className="text-[#ffffff60] max-w-[290px] mb-2.5">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div>
            <div className="flex ">
              <input
                className="input rounded-xl rounded-r-none"
                type="text"
                placeholder="Enter your email"
              />
              <button
                className="btn bg-cover border-0 bg-center rounded-xl rounded-l-none"
                style={{ backgroundImage: `url(${btnBg})` }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[#ffffff60] py-5 border-t-1 border-[#ffffff15] ">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
