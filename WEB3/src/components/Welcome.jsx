import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className='flex flex-col w-full min-h-screen justify-center items-center bg-gray-800'>
      <Navbar />
      <div className='flex flex-col justify-center items-center p-8 mt-20 mb-20'>
        <h1 className='text-4xl sm:text-5xl text-white text-gradient py-1 text-center'>
          Send Crypto <br /> across the World
        </h1>
        <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base text-center'>
          Explore the Crypto world. Enjoy buying and selling cryptocurrencies easily on MCRYPT.
        </p>
        <div className='flex flex-col items-center mt-8 space-y-4'>
          <button
            type='button'
            onClick={handleLogin}
            className="w-48 py-3 bg-[#2952e3] rounded-full text-white font-semibold hover:bg-[#2546bd] focus:outline-none"
          >
            Login
          </button>
          <button
            type='button'
            onClick={handleSignUp}
            className="w-48 py-3 bg-[#2952e3] rounded-full text-white font-semibold hover:bg-[#2546bd] focus:outline-none"
          >
            Sign Up
          </button>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
          <div className={`rounded-tl-2xl ${commonStyles}`}>
            Reliable
          </div>
          <div className={commonStyles}>Secure</div>
          <div className={`rounded-tr-2xl ${commonStyles}`}>
            Transparent
          </div>
          <div className={`rounded-bl-2xl ${commonStyles}`}>
            Web 3.0
          </div>
          <div className={commonStyles}>Polygon</div>
          <div className={`rounded-br-2xl ${commonStyles}`}>
            Blockchain
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
