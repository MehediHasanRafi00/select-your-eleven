import React from 'react';
import btnBg from "../assets/btn-bg.png"
import bgShadow from "../assets/bg-shadow.png";

const Subscribe = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-6 bg-[#ffffff15 ] border-1 border-white bg-[#ffffff15] rounded-3xl mt-40 relative top-35'
         >
            <div className=' text-center space-y-5 py-22 rounded-3xl border-1 border-[#13131310] bg-white  bg-center'
            style={{backgroundImage:`url(${bgShadow})`}}>
            <h2 className='font-bold text-3xl'>Subscribe to our Newsletter</h2>
            <p className='text-[#13131370] font-medium text-xl'>Get the latest updates and news right in your inbox!</p>
            <div className=''>
                <input className="input mr-2.5" type="text" placeholder='Enter your email'/>
                <button className='btn bg-cover bg-center' style={{backgroundImage:`url(${btnBg})`}}>Subscribe</button>
            </div>
        </div>
        </div>
    );
};

export default Subscribe;