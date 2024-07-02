import React from 'react'

const Blogs_data_set = (props) => {

const {img, title, date, comment, desc} = props;

  return (

    <a className='cursor-default'>

            <div className='h-full cursor-pointer lg:hover:scale-110 transition duration-500 lg:h-[500px]  py-6 w-full lg:w-[350px] px-4 border-2 border-pink-700  rounded-lg shadow-lg mx-auto'>
                    
                    

                    <div className='pb-3'>
                        <img className='mx-auto h-[200px] w-[250px] rounded-md' src={img} alt="" />
                    </div>
                    <h2 className='text-center pb-3 font-bold text-white text-[18px] border-4 border-x-0 border-t-0 border-b-white'>{title}</h2>
                    
                    <div className='mt-3 flex gap-2 justify-center'>
                    <p className='text-center text-white'><span className='text-pink-700 font-bold'></span>{date}</p>
                        <p className='text-center text-white'>{comment}</p>
                        
                    </div>
                    <p className='text-center text-white mt-4'>{desc}</p>

                

            </div>

    </a>

  )
}

export default Blogs_data_set

