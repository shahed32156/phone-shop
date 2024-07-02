import React from 'react'

import { RxCrossCircled } from "react-icons/rx";

const Cart = () => {
  return (
    <>
    
    <div className='mt-20 md:mt-28 text-center'>
    <h1 className='text-3xl font-serif font-semibold text-white'>Product Cart</h1>
    </div>

    <div className='mt-10 text-center flex items-center gap-2 justify-center'>
    <RxCrossCircled className="text-pink-700 text-[30px]" />
    <p className='text-[18px] text-white'>Your cart is empty now</p>
    </div>
    
    </>
  )
}

export default Cart
