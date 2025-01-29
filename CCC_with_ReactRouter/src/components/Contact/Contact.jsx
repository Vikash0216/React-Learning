import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // Animation variants for Framer Motion
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
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-50 flex flex-col justify-center items-center p-8">
      <motion.div
        className="text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-blue-900 mb-6"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl text-gray-700 mb-8"
          variants={itemVariants}
        >
          Have questions? Feel free to reach out to us. We're here to help!
        </motion.p>

        {/* Contact Details */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
        >
          {[
            {
              icon: <FaPhoneAlt className="text-blue-600 text-4xl" />,
              title: 'Phone',
              detail: '+91 8235697011',
            },
            {
              icon: <FaEnvelope className="text-blue-600 text-4xl" />,
              title: 'Email',
              detail: 'cccsiniedu@gmail.com',
            },
            {
              icon: <FaMapMarkerAlt className="text-blue-600 text-4xl" />,
              title: 'Location',
              detail: 'Sini,Jharkhand',
            },
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {contact.icon}
              <h3 className="text-2xl font-semibold text-blue-800 mt-4 mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-600">{contact.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
          variants={itemVariants}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
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
            <label className="block text-gray-700 text-lg font-medium mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
