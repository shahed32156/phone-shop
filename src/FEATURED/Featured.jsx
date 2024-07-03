import React from 'react'

import Data from './data.json'
import Featured_data_set from './Featured_data_set';

const Featured = () => {

let items = [];

items = Data.map((item,index) => <Featured_data_set key={index} img={item.img} title={item.title}
price={item.price}msg1={item.msg1} msg2={item.msg2} />);

  return (
   <>
   
   <div className='mt-20 mx-10 sm:mx-3 lg:mx-32'>

        <div className='text-center text-white'>

            <h1 className='text-3xl font-serif font-semibold'>Featured Collections</h1>
            <p className='mt-3 lg:w-[400px] mx-auto'>Brand New Collection - iPhone, OnePlus, Samsung, Pixel, Realme, Redmi </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-10'>

            
                {items}
            

        </div>


   </div>
   
   </>
  )
}

export default Featured
