import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import { VscAccount } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { FaBookmark } from "react-icons/fa";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccountDropdown = () => {
    setAccountDropdown(!accountDropdown);
  };

  return (
    <>
      <nav className="px-3 py-4 md:px-20 top-0 border-b-[1px] border-b-pink-700 border-x-0 border-y-0 bg-black shadow md:flex md:items-center fixed w-full md:justify-between z-10">
        <div className="flex justify-between items-center">
          <span className="font-[Poppins] cursor-pointer text-white text-[20px]">
            <span className='text-4xl font-extrabold text-pink-700'>ℤ</span>𝕧𝕒𝕝𝕪𝔹𝔻
          </span>

          <span className="text-3xl text-pink-700 font-extrabold cursor-pointer mx-2 md:hidden block z-10">
            <IonIcon icon={isOpen ? closeOutline : menuOutline} onClick={toggleMenu} />
          </span>
        </div>

        <ul
          className={`md:flex items-center justify-center text-[13px] font-semibold text-white md:static absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 transition-all ease-in duration-500 ${
            isOpen ? 'top-[70px] opacity-100' : 'top-[10px] left-[-400px] opacity-0 '
          } md:opacity-100 md:z-auto z-[-1]`}
        >
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/home" className="hover:text-pink-700 duration-500">
              HOME
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/products" className="hover:text-pink-700 duration-500">
              PRODUCTS
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/about" className="hover:text-pink-700 duration-500">
              ABOUT US
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/contact" className="hover:text-pink-700 duration-500">
              CONTACT
            </NavLink>
          </li>

          <li className="mx-4 my-6 md:my-0">
            <NavLink to="/review" className="hover:text-pink-700 duration-500">
              REVIEW
            </NavLink>
          </li>

          <li className="mx-4 my-6 md:my-0 flex">
            <NavLink to="/cart" className="text-[18px] hover:text-pink-700 duration-500">
              <FaBookmark />
              
            </NavLink>
            <p className='text-white -mt-3'>0</p>
          </li>

          <li className="mx-4 my-6 md:my-0 relative">
            <span onClick={toggleAccountDropdown} className="text-[20px] cursor-pointer hover:text-pink-700 duration-500">
              <VscAccount />
            </span>
            {accountDropdown && (
              <div className="absolute left-0 md:left-[-170px] mt-4 w-48 bg-white rounded-md shadow-lg z-20">
                <NavLink to="/admin_signin" className="block px-4 py-2 text-black hover:bg-pink-700 hover:text-white">
                  Admin Panel
                </NavLink>
                <NavLink to="/signin" className="block px-4 py-2 text-black hover:bg-pink-700 hover:text-white">
                  User Panel
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
