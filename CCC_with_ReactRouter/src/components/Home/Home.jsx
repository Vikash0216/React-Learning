import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col justify-center items-center p-8">
      <motion.div
        className="text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-blue-900 mb-6"
          variants={itemVariants}
        >
          Welcome to Concept Coaching Classes
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl text-gray-700 mb-8"
          variants={itemVariants}
        >
          Empowering Class 11 and 12 students to excel in <strong>Physics</strong>, <strong>Chemistry</strong>, <strong>Maths</strong>, and <strong>Computer Science</strong>.
        </motion.p>

        {/* Subjects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {['Physics', 'Chemistry', 'Maths', 'Computer Science'].map(
            (subject, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {subject}
                </h3>
                <p className="text-gray-600">
                  Comprehensive coverage of {subject} syllabus for Class 11 and 12.
                </p>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div variants={itemVariants}>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Join Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;