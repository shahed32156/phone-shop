import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-23') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className='mt-20 py-10 bg-[#141414] text-center text-white flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-3xl font-serif font-semibold'>Special Offers</h1>
        <p>Some Prices may not be up to date according to today's latest price.</p>
        <h1 className='text-xl font-serif font-semibold text-white mx-auto lg:w-[400px] leading-8'>
          All Phones are <span className='text-pink-700 font-mono'>20%</span> off now! Don't miss such a deal!
        </h1>
        <div className='text-center mt-4'>
          <h2 className='text-2xl font-semibold text-pink-700'>Offer ends in:</h2>
          <div className='text-xl font-mono mt-3 flex items-center'>
            <h1 className='py-2 px-2'>{timeLeft.days}days - </h1> 
            <h1 className='py-2 px-2'>{timeLeft.hours}hr - </h1> 
            <h1 className='py-2 px-2'>{timeLeft.minutes}min - </h1> 
            <h1 className='py-2 px-2'>{timeLeft.seconds}sec</h1> 
            
          </div>
        </div>
        <button className='text-white border-2 border-pink-700 transition duration-500 bg-none hover:bg-pink-700 h-[40px] w-[150px] rounded mt-2'><Link to="/products">Explore products</Link></button>
      </div>
    </>
  );
};

export default Offers;
