import React, { useState  } from 'react'

import Swal from'sweetalert2';

import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrPowerReset } from 'react-icons/gr';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleName = (e) => {

        const value = e.target.value;
        const regex = /^[a-zA-Z\s]*$/;
    
        if (regex.test(value)) {
          setName(value);
        } else {
          Swal.fire({
            title: "Error",
            text: "Invalid name",
            icon: "error"
          });
        }
    
        console.log(value);
      
  }

  const handleEmail = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
  }

  const handleQuery = (e) => {
      setQuery(e.target.value);
      console.log(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      
      if (name.length <= 3) {
          Swal.fire({
              title: "Error",
              text: "Name must be more than 3 characters",
              icon: "error"
          });
          return;
      }

      Swal.fire({
          title: "Success",
          text: "Successfully sent your query",
          icon: "success"
      });

  }

  const handleReset = () => {
      setName("");
      setEmail("");
      setQuery(""); 
  }
  
  return (
    <>
   

   <div className='mt-20 md:mt-28 text-center mx-3'>
   <h1 className='text-3xl font-serif font-semibold text-white'>Contact with us</h1>
    </div>


    <div className='flex flex-col gap-8 md:flex-col lg:flex-row mx-3 lg:mx-48 lg:justify-between items-center mt-10'>
        
           <div className='flex flex-col gap-3 justify-center mx-3'>

              
              <h1 className='w-full md:w-[600px] text-xl md:text-4xl font-bold font-mono text-white'>Feel free to contact with us!</h1> 
              <p className='w-full md:w-[550px] text-justify text-white'>Have any queries? Our dedicated support team is here to help you 24/7. Reach out to us via:</p>
              <ul className='text-white'>
                <li> <span className='font-semibold text-pink-700'>Phone:</span> +8801741987566 </li>
                <li> <span className='font-semibold text-pink-700'>Email:</span> opsbd@phoneshop.com </li>
                <li> <span className='font-semibold text-pink-700'>Address:</span> Rupayan Shopping Square , Level 1, Shop – 247, Bashundhara Residential Area, Dhaka </li>
              </ul>

              <div className='mt-3 flex gap-3 text-white'>

                  
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-pink-700'><FaFacebook className='text-[30px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-pink-700'><RiWhatsappFill className='text-[30px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-pink-700'><FaTwitter className='text-[30px]' /></a>
                    
                    
                    <a  className='cursor-pointer md:hover:scale-110 md:hover:transition-all md:hover:duration-300 hover:text-pink-700'><FaYoutube className='text-[30px]' /></a>
                    
                
                </div>


                <div className='mt-6'>

<form onSubmit={handleSubmit} className='flex flex-col gap-5'>

    <div className='relative'>
        <input className='w-[300px] text-white h-[50px] focus:outline-none border-2 border-pink-700 pl-4 rounded-lg md:w-[400px]' required type="text" 
        name="name" id="input" onChange={handleName} value={name} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your name</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] text-white h-[50px] focus:outline-none border-2 border-pink-700 pl-4 rounded-lg md:w-[400px]' required type="email" 
        name="email" id="input2" onChange={handleEmail} value={email} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
    </div>

    <div className='relative'>
        <textarea  className='w-[300px] text-white h-[100px] bg-black focus:outline-none border-2 border-pink-700 pl-4 rounded-lg md:w-[400px]' required 
        name="message" id="query" onChange={handleQuery} value={query} ></textarea>
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your query</div>
    </div>

    <div className='flex gap-4 items-center'>
        
       <button className='bg-pink-700 text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-pink-500 rounded'>Send</button>
       
       <a className='bg-pink-700 flex items-center gap-1 cursor-pointer text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-pink-500 rounded' onClick={handleReset}>
        
        <GrPowerReset /> 
        <p>Reset</p>
        </a>
    </div>

    
</form>

</div>


           </div>

           <div className=''>

           <img className='mx-auto w-full md:h-[400px] md:w-[450px]' src="./Images/contact.jpg" alt="" />   
          
          </div>
   

    </div>

    

    
    </>
  )
}

export default Contact
