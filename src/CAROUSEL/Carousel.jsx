import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';

const Carousel = () => {
  return (
    <>
      <div className='mt-32 text-white mx-20 flex flex-col gap-8 lg:flex-row justify-between items-center'>
        <div className='flex flex-col gap-6 items-center lg:items-start'>
          <h3 className='text-3xl text-center lg:text-start lg:w-[500px] md:text-4xl lg:text-5xl font-serif leading-snug'>Special Day Offer Get 20% Discount</h3>
          <p className='lg:w-[450px] text-center lg:text-start'>Best online business platform - We offers best, latest, official brand quality phones.</p>
          <h1 className='text-[30px] font-bold border-l-4 pl-4 border-l-pink-700 cursor-pointer hover:text-pink-700 hover:transition hover:duration-700 duration-700'>Z-valy BD</h1>
          <button className='text-white uppercase border-2 border-pink-700 transition duration-500 bg-none hover:bg-pink-700 h-[40px] w-[120px] rounded mt-2'><NavLink to="/products">Expolre</NavLink></button>
        </div>

        <div className='w-full lg:w-[400px]'>
          <ReactCarousel 
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
          >
            <div>
              <img src="./Images/cover1.png" alt="Cover 1" className='w-full h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]' />
            </div>
            <div>
              <img src="./Images/cover2.png" alt="Cover 2" className='w-full h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]' />
            </div>
            <div>
              <img src="./Images/cover3.png" alt="Cover 3" className='w-full h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]' />
            </div>
            <div>
              <img src="./Images/cover4.png" alt="Cover 3" className='w-full h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]' />
            </div>
          </ReactCarousel>
        </div>
      </div>
    </>
  )
}

export default Carousel
