import React, { useState } from 'react'

import Data from './data.json';
import { useNavigate } from 'react-router-dom';
import Redmi_data_set from './Redmi_data_set';

const Redmi = () => {

    const navigate = useNavigate();     
    const [catagory, setCatagory] = useState("Redmi");

    let items = [];

items = Data.map((item,index) => <Redmi_data_set key={index} img={item.img} title={item.title}
price={item.price}msg1={item.msg1} msg2={item.msg2} />);


const handleCatagory = (e) => {

    setCatagory(e.target.value);
    console.log(e.target.value);
}

const handleSubmit = (e) => {

    e.preventDefault();

    if(catagory == "All") {

        navigate("/products");
    }

    else if(catagory == "iPhone") {

        navigate("/iphone");
    }

    else if(catagory == "Samsung") {

        navigate("/samsung");
    }

    else if(catagory == "OnePlus") {

        navigate("/oneplus");
    }

    else if(catagory == "Pixel") {

        navigate("/pixel");
    }

    else if(catagory == "Realme") {

        navigate("/realme");
    }

    else if(catagory == "Redmi") {

        navigate("/redmi");
    }

   
}

  return (
   <>
    <div className='mt-20 mx-3 text-center'>

            <h1 className='text-3xl font-serif font-semibold text-white'>Products Catagory</h1>

    </div>

    <form onSubmit={handleSubmit} className='mt-10 flex flex-col justify-center gap-3 items-center'>

     <label className='text-white' htmlFor="catagory">Select a catagory</label>

     <div className='flex  items-center justify-center gap-3'>

                <select onChange={handleCatagory} className='h-[40px] w-[170px] md:w-[230px] mt-2 bg-black border-2 border-pink-700 rounded text-white' name="" id="">

            <option value="All">All</option>    
            <option value="iPhone">iPhone</option>    
            <option value="Samsung">Samsung</option>    
            <option value="OnePlus">OnePlus</option>    
            <option value="Pixel">Pixel</option>    
            <option value="Realme">Realme</option>    
            <option value="Redmi" selected>Redmi</option>    
            
            
            </select> 

            <button className='text-white border-2 border-pink-700 transition duration-500 bg-none hover:bg-pink-700 h-[40px] w-[100px] rounded mt-2'>Search</button>

     </div>


    </form>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-10'>

            
            {items}


    </div>
   </>
  )
}

export default Redmi
