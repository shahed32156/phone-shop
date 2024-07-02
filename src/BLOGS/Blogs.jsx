import React from 'react'

import Data from './data.json'
import Blogs_data_set from './Blogs_data_set';

const Blogs = () => {

let items = [];

items = Data.map((item,index) => <Blogs_data_set key={index} img={item.img} title={item.title}
date={item.date} comment={item.comment} desc={item.desc} />);

  return (
   <>
   
   <div className='mt-20 mx-10 sm:mx-3 lg:mx-32'>

        <div className='text-center text-white'>

            <h1 className='text-3xl font-serif font-semibold'>Latest Blog</h1>
           
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>

            
                {items}
            

        </div>


   </div>
   
   </>
  )
}

export default Blogs
