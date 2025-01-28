import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  // Animation variants for Framer Motion
  const linkVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)',
      transition: { type: 'spring', stiffness: 300 },
    },
    tap: { scale: 0.9 },
  };

  const joinButtonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: '#4ade80', // Light green
      boxShadow: '0px 0px 12px rgba(74, 222, 128, 0.8)',
      transition: { type: 'spring', stiffness: 300 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl font-bold"
        >
          Concept Coaching Classes
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 text-lg font-semibold ${
                  isActive ? 'underline underline-offset-4' : ''
                }`
              }
            >
              Home
            </NavLink>
          </motion.div>

          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 text-lg font-semibold ${
                  isActive ? 'underline underline-offset-4' : ''
                }`
              }
            >
              About
            </NavLink>
          </motion.div>

          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 text-lg font-semibold ${
                  isActive ? 'underline underline-offset-4' : ''
                }`
              }
            >
              Classes
            </NavLink>
          </motion.div>

          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 text-lg font-semibold ${
                  isActive ? 'underline underline-offset-4' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </motion.div>

          {/* Join Button */}
          <motion.div variants={joinButtonVariants} whileHover="hover" whileTap="tap">
            <NavLink
              to="/join"
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-lg font-semibold"
            >
              Join
            </NavLink>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;