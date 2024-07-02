import React, { useState } from 'react'

import Swal from'sweetalert2';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GrPowerReset } from 'react-icons/gr';


const Admin_signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const handleEmail = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
  }

  const handlePass = (e) => {
    setPass(e.target.value);
    console.log(e.target.value);
}

  const handleSubmit = (e) => {
      e.preventDefault();
 

     if(email == "shahed@gmail.com" && pass == "phone-shop978") {

        Swal.fire({
            title: "Success",
            text: "Successfully signed in",
            icon: "success"
        });

        navigate("/admin_panel");
     }

     else {

        Swal.fire({
            title: "Sign in",
            text: "Incorrect email or password",
            icon: "error"
        });
     }
  }

  const handleReset = () => {

      setEmail("");
      setPass("");
  }


  return (
    <>
    

   

    <div className='mt-20 md:mt-28 text-center'>
    <h1 className='text-3xl font-serif font-semibold text-white'>Admin Panel</h1>
    </div>
    
   
 

    <div className='mt-20 flex justify-center items-center mx-3'>

    <div className='pb-12 px-6 rounded-md shadow-pink-700 shadow-lg'>

<form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>

          <span className="font-[Poppins] py-3 text-white text-[20px]">
          <span className='text-4xl font-extrabold text-pink-700'>ℤ</span>𝕧𝕒𝕝𝕪𝔹𝔻
          </span>

    

    <div className='relative'>
        <input className='w-[300px] h-[50px] text-white focus:outline-none border-2 border-pink-700 pl-4 rounded-lg md:w-[400px]' required type="email" 
        name="email" onChange={handleEmail} value={email} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] h-[50px] text-white bg-transparent focus:outline-none border-2 border-pink-700 pl-4 rounded-lg md:w-[400px]' required type="password" 
        name="password" onChange={handlePass} value={pass} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your password</div>
    </div>
   

    <div className='flex gap-4 justify-center items-center'>
        
       <button className='bg-pink-700 text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-pink-500 rounded'>Sign in</button>
       
       <a className='bg-pink-700 flex items-center gap-1 cursor-pointer text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-pink-500 rounded' onClick={handleReset}>
        
        <GrPowerReset /> 
        <p>Reset</p>
        </a>
    
    </div>

    
</form>

</div>

    </div>
    
    </>
  )
}

export default Admin_signin
