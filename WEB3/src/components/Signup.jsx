import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Signup = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-500">
      <Navbar />
      <main className="flex-grow flex justify-center items-center relative mt-20">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md relative z-10">
          <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">SIGN UP</h2>
          <form method="POST">
            <div className="mb-6 relative">
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                className="w-full p-3 bg-gray-800 border-none rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor="fullname"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none"
              >
                Full Name
              </label>
            </div>

            <div className="mb-6 relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-gray-800 border-none rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor="email"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none"
              >
                Email
              </label>
            </div>

            <div className="mb-6 relative">
              <input
                type="password"
                id="password"
                name="password"
                minlength="8"
                required
                className="w-full p-3 bg-gray-800 border-none rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor="password"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none"
              >
                Password
              </label>
            </div>

            <div className="mb-6 relative">
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                minlength="8"
                required
                className="w-full p-3 bg-gray-800 border-none rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor="confirmpassword"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none"
              >
                Confirm Password
              </label>
            </div>

            <div className="flex justify-center mb-6">
              <a href="/login.html" className="text-green-400 text-sm hover:underline">Already have an account? Login</a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-black font-bold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/grid.png')] bg-cover bg-opacity-5 z-0"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
