import React from 'react';
import { motion } from 'framer-motion';

const Join = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 1, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col justify-center items-center p-8">
      <motion.div
        className="text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl font-bold text-blue-900 mb-6" variants={itemVariants}>
          Join Us
        </motion.h1>
        <motion.p className="text-xl text-gray-700 mb-8" variants={itemVariants}>
          Become a part of our learning community and take your education to the next level.
        </motion.p>

        <motion.form
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
          variants={itemVariants}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2">Phone</label>
            <input
              type="tel"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2">Select Subjects</label>
            <select multiple className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Mathematics</option>
              <option>Computer Science</option>
            </select>
            <p className="text-gray-500 text-sm mt-2">Hold Ctrl (Cmd on Mac) to select multiple subjects.</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2">Class</label>
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Class 11</option>
              <option>Class 12</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2">Board Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your board name"
            />
          </div>
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full"
            whileHover={{ scale: 1.05 }}
          >
            Join Now
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Join;
