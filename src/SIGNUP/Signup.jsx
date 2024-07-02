import React, { useState } from 'react'

import Swal from'sweetalert2';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GrPowerReset } from 'react-icons/gr';


const Signup = () => {
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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

  const handlePass = (e) => {
    setPass(e.target.value);
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

    if (pass.length <=6) {
        Swal.fire({
            title: "Error",
            text: "Password must be more than 6 characters",
            icon: "error"
        });
        return;
    }

      Swal.fire({
          title: "Success",
          text: "Successfully signed up",
          icon: "success"
      });

      navigate("/home");
  }

  const handleReset = () => {
      setName("");
      setEmail("");
      setPass("");
  }


  return (
    <>
    


    <div className='mt-20 md:mt-28 text-center'>
    <h1 className='text-3xl font-serif font-semibold text-white'>User Panel</h1>
    </div>
    

    <div className='mt-16 flex justify-center mx-3'>

    <div className='pb-12 px-6 rounded-md shadow-pink-700 shadow-lg'>

<form  onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>

          <span className="font-[Poppins] py-3 text-white text-[20px]">
          <span className='text-4xl font-extrabold text-pink-700'>ℤ</span>𝕧𝕒𝕝𝕪𝔹𝔻
          </span>


   <div className='relative'>
        <input className='w-[300px] text-white h-[50px] focus:outline-none border-2 border-pink-700 pl-4 rounded-lg md:w-[400px]' required type="name" 
        name="name" onChange={handleName} value={name} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your name</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] text-white h-[50px] focus:outline-none border-2 border-pink-700 pl-4 rounded-lg md:w-[400px]' required type="email" 
        name="email" onChange={handleEmail} value={email} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your email</div>
    </div>

    <div className='relative'>
        <input className='w-[300px] text-white h-[50px] bg-transparent focus:outline-none border-2 border-pink-700 pl-4 rounded-lg md:w-[400px]' required type="password" 
        name="password" onChange={handlePass} value={pass} />
        <div className='label absolute bg-black text-[#999] top-3 pr-2 left-3 pointer-events-none z-10'>Enter your password</div>
    </div>
   
   

    <div className='flex gap-4 justify-center items-center'>
        
       <button className='bg-pink-700 text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-pink-500 rounded'>Sign up</button>
       
       <a className='bg-pink-700 flex items-center gap-1 cursor-pointer text-white font-[Poppins] duration-500 px-6 py-2  md:hover:bg-pink-500 rounded' onClick={handleReset}>
        
        <GrPowerReset /> 
        <p>Reset</p>
        </a>
    
    </div>

    <div>

      <p className='text-[14px] text-white'>Already have an account? <Link to="/signin" className='text-blue-500 hover:underline'>Sign in</Link></p>

    </div>

</form>

</div>

    </div>
    
    </>
  )
}

export default Signup
