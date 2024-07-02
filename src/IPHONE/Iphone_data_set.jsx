import React from 'react'

import { FaCartPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from'sweetalert2';

const Iphone_data_set = (props) => {

const {img, title, price, msg1, msg2} = props;

const handleCart = () => {

  Swal.fire({
    title: "Success",
    text: "Product added into cart",
    icon: "success"
});

}

  return (

    <a className='cursor-default'>

            <div className='h-full  lg:h-[540px] w-full lg:w-[400px]  bg-black shadow-pink-700 rounded-lg border-2 border-pink-700 mx-auto'>
                    
                    

                    <div className=''>
                        <img className='mx-auto h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-md' src={img} alt="" />
                    </div>
                    <h2 className='text-center pb-2 font-bold text-white text-[18px]'>{title}</h2>
                    <p className='text-center text-white'><span className='text-pink-700 font-bold'>Price: </span>{price}</p>
                    <div className='flex mt-4 justify-between rounded-b-md bg-pink-700 px-4 py-4'>
                    <Link to="/buy" className='text-center text-white text-[30px]'><FaCartPlus /></Link>
                    <Link onClick={handleCart} className='text-center text-white text-[30px]'><FaBookmark /></Link>
                        
                        
                    </div>

                

            </div>

    </a>

  )
}

export default Iphone_data_set

