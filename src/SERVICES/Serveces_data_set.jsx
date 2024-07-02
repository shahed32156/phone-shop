

import React from 'react'

const Serveces_data_set = (props) => {

const {img, title, desc} = props;

  return (

    <a className='cursor-default'>

            <div className='flex gap-4 justify-center items-center py-16 px-4 h-[100px]  w-full lg:w-[300px]  border-[1px] rounded-lg shadow-xl md:hover:transition md:hover:duration-500 md:hover:scale-110 border-pink-700 mx-auto'>
                    
                    

                    <div className='pb-3'>
                        <img className='mx-auto h-[80px] w-[100px] rounded-md' src={img} alt="" />
                    </div>
                    <div className='flex flex-col'>
                    <h2 className='pb-3 font-bold text-pink-700'>{title}</h2>
                    <p className=' text-white'>{desc}</p>
                    </div>

                

            </div>

    </a>

  )
}

export default Serveces_data_set

