import React from 'react';
import logo from "../assets/images/logo.png"; // Adjust the path as needed
import privado from "../assets/images/privado.jpg"; // Adjust the path as needed
import mpesa from "../assets/images/mpesa.png"; // Adjust the path as needed
import polygon from "../assets/images/polygon.jpg"; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className='w-full bg-[#1c1c1c] text-white py-6 px-4 mt-12'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='flex items-center'>
          <img src={logo} alt="logo" className='w-24 mr-4' />
          <span className='text-xl font-bold'>Privado ID</span>
        </div>
        <ul className='list-none flex flex-col md:flex-row justify-center items-center mt-4 md:mt-0'>
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <li key={item + index} className='mx-4 cursor-pointer hover:text-[#2952e3]'>
              {item}
            </li>
          ))}
        </ul>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <img src={privado} alt="Privado Logo" className='w-16 h-16' />
          <img src={mpesa} alt="M-Pesa Logo" className='w-16 h-16' />
          <img src={polygon} alt="Polygon Logo" className='w-16 h-16' />
        </div>
      </div>
      <div className='text-center mt-4'>
        <p className='text-sm'>© 2024 Privado ID. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
