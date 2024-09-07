import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';
import Footer from './Footer';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar /> {/* Move Navbar to the top */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">LOGIN</h2>
          <form method="POST">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                autoComplete="off" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                minLength="8" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <Link to="#" className="text-indigo-600 hover:text-indigo-800 text-sm">Forgot Password</Link>
              <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 text-sm">Signup</Link>
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer /> {/* Keep Footer at the bottom */}
    </div>
  );
};

export default Login;
