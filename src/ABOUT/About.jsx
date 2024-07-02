import React from 'react'

const About = () => {
  return (

    <>


    <div className='mt-20 md:mt-28 text-center mx-3'>
    <h1 className='text-3xl font-serif font-semibold text-white'>About us</h1>
    </div>


    <div className='flex flex-col gap-6 md:flex-col lg:flex-row mx-3 md:mx-52 justify-between items-center mt-10'>
        
           <div className='flex flex-col gap-3 justify-center mx-3 text-white'>

           <span className="font-[Poppins] text-white text-[20px]">
          <span className='text-4xl font-extrabold text-pink-700'>ℤ</span>𝕧𝕒𝕝𝕪𝔹𝔻
          </span>
              <h1 className='w-full md:w-[600px] text-xl md:text-4xl font-bold font-mono mt-3'>Your Ultimate Destination for the Latest Smartphones!</h1> 
              <p className='w-full md:w-[550px] text-justify'>ZvalyBD offers a wide selection of the latest smartphones at competitive prices. Discover top brands like Apple, Samsung, and Xiaomi with detailed product descriptions and customer reviews. Enjoy secure online shopping with multiple payment options and fast delivery. Benefit from our 24/7 customer support to assist you with any inquiries. Shop confidently with our hassle-free return policy and warranty services.</p>
            
           </div>

           <div>
     
           
           <img className='mx-auto w-[300px] h-[300px] lg:h-[400px] lg:w-[450px]' src="./Images/about.png" alt="" />   
          
          </div>
   

    </div>

  </>

  )
}

export default About
