
import React from 'react'

import Data from './data.json'
import Footer_set_data from './Footer_set_data';
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {

  let items = [];

items = Data.map((item, index) => <Footer_set_data key={index} title={item.title} 

num1={item.num1} num2={item.num2} num3={item.num3} num4={item.num4} num5={item.num5} num6={item.num6} /> )
    

  return (

    <div className=' bg-[#151515] py-10 mt-20 text-[white] px-8 md:px-20'>

              <div className='flex items-center text-justify flex-col gap-3'>
                    
                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                    <span className="font-[Poppins] cursor-pointer text-white text-[20px]">
                    <span className='text-4xl font-extrabold text-pink-700'>ℤ</span>𝕧𝕒𝕝𝕪𝔹𝔻
                    </span>
                    
                    </div>
                    <h2 className='md:text-[18px] text-white font-semibold font-[poppins] text-center'>Your Ultimate Destination for the Latest Smartphones!</h2>
                    </div>

                 <div className='mt-6 flex justify-center mx-auto gap-3'>

                  
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-pink-700'><FaFacebook className='text-[25px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-pink-700'><RiWhatsappFill className='text-[25px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-pink-700'><FaTwitter className='text-[25px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-pink-700'><FaYoutube className='text-[25px]' /></a>
                    
                
                </div>


         <div className='mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20'>


                 {items}

              

                 

          </div>

          <div className='mt-16 text-center font-semibold'>
          <p className='border-t-[2px] font-[Infographic] border-t-pink-700 pt-4'>Copyright © 2024 Abullah Shahed. All rights reserved</p>  
          </div>      

    </div>
  )
}

export default Footer
