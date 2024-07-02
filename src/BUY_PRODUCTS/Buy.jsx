import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Swal from'sweetalert2';

const Buy = () => {

  const [gb, setGb] = useState("");  
  const [color, setColor] = useState("");  
  const [count, setCount] = useState(1);
  const navigate = useNavigate();  

  const [mainImage, setMainImage] = useState('./Images/by1.png');
  const images = [
    './Images/by1.png',
    './Images/by2.png',
    './Images/by3.png',
    './Images/by4.png',
  ];

  const handleGB = (e) => {

    setGb(e.target.value);
    console.log(e.target.value);
}

const handleColor = (e) => {

    setColor(e.target.value);
    console.log(e.target.value);

}

  const handlePlus = () => {

    setCount(count+1);
   
  }
  
  const handleMinus = () => {
  
    setCount(count-1);
   
  }


  const handleSubmit = (e) => {

    e.preventDefault();

    Swal.fire({
        title: "Success",
        text: "Succsessfully Confirmed",
        icon: "success"
    });
 

    navigate("/home");
    

  }

  return (
    <>
      <div className='mt-20 flex flex-col lg:flex-row justify-center lg:justify-between gap-8 items-center mx-3 lg:mx-24'>
        <div className='flex flex-col gap-10'>
          <div>
            <img className='h-[350px] w-[280px] lg:w-[330px] mx-auto lg:mx-0' src={mainImage} alt="Main" />
          </div>
          <div className='flex gap-4 lg:gap-2 items-center justify-center border-2 border-pink-700 py-4 w-full lg:w-[500px] rounded'>
            {images.map((image, index) => (
              <img
                key={index}
                className='h-[100px] w-[50px] lg:w-[100px] cursor-pointer'
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

       <form onSubmit={handleSubmit} className='text-white flex flex-col items-center lg:items-start gap-6'>

        <div className='flex flex-col gap-3 text-center lg:text-start'>
                <p className='text-gray-400'>iPhone / iPhone 14 pro max </p>
                <h2 className='text-3xl'>iPhone 14 Pro Max</h2>
                <p className=''>110,000 BDT</p>
        </div>

       <div className='flex flex-col gap-3 items-center lg:items-start'>

       <select  onChange={handleGB} className='h-[40px] w-[170px] mt-2 bg-black border-2 border-pink-700 rounded text-white' required name="gb">

                <option disabled selected value={gb}>Choose GigaByte</option>    
                <option value="64 GB">64 GB</option>    
                <option value="128 GB">128 GB</option>    
                <option value="512 GB">512 GB</option>   


        </select> 

        <div>
            
        <select onChange={handleColor} className='h-[40px] w-[170px] mt-2 bg-black border-2 border-pink-700 rounded text-white' name="color" required>

                <option disabled selected value={color}>Choose Color</option>    
                <option value="Black">Black</option>    
                <option value="Gold">Gold</option>    
                <option value="Purple">Purple</option>   
                <option value="Silver">Silver</option>   


        </select> 

        </div>

        <div className='flex items-center gap-3 mt-3'>
        <a
                        className='border-[1px] border-pink-700 hover:bg-pink-700 hover:text-white flex justify-center items-center cursor-pointer h-[50px] w-[50px] rounded-lg text-[20px]'
                        onClick={handlePlus}
                        
                    >
                        +
                    </a>
                    <p className='text-xl'>{count}</p>
                    <a
                        
                        className={`border-[1px] border-pink-700 hover:bg-pink-700 hover:text-white flex justify-center items-center cursor-pointer h-[50px] w-[50px] rounded-lg text-[25px] ${count === 0 ? 'disabled' : ''}`}
                        onClick={handleMinus}
                        style={{ pointerEvents: count === 1 ? 'none' : 'auto' }}
                    >
                        -
                    </a>

                     
        </div>

        <button className='text-white border-2 border-pink-700 transition duration-500 bg-none hover:bg-pink-700 h-[35px] hover:shadow-xl hover:shadow-pink-700 w-[80px] rounded mt-2'>Buy</button>
    
        <div className='mt-4 flex flex-col gap-4 items-center lg:items-start'>
                <p className='font-semibold'> <i className="fa-sharp fa-solid fa-circle-dot text-[#41d341]"></i> Consegna in 5/10 giorni lavorativi</p>
                <h1 className='text-2xl'>Product Details</h1>
                <p className='text-center lg:text-start lg:w-[650px]'>The iPhone 14 Pro Max features a 6.7-inch Super Retina XDR display with ProMotion technology and an A16 Bionic chip for lightning-fast performance.</p>
        </div>

       </div>


    
       </form>

      </div>
    </>
  );
}

export default Buy;
