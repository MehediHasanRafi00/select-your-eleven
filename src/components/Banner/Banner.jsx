import React from "react";
import bannerMain from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";
import btnBg from "../../assets/btn-bg.png"

const Banner = () => {
  return (
    <div style={{backgroundImage:`url(${bgShadow})`}} 
    className="max-w-[1200px] mx-auto text-center py-12 bg-[#131313] rounded-3xl space-y-5 mb-20 bg-cover bg-center">
      <img className="mx-auto" src={bannerMain} alt="" />
      <h1 className="font-bold text-4xl text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="font-medium text-[#ffffff70] text-2xl">
        Beyond Boundaries Beyond Limits
      </p>
      <div className=" border-white rounded-lg bg-[#1f1f1f] border-2 inline-block">
        <button style={{backgroundImage:`url(${btnBg})`}} className=" btn border-0 m-2 bg-cover bg-center">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;
