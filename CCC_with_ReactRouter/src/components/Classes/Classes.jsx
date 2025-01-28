import React from 'react';
import { motion } from 'framer-motion';

const Classes = () => {
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
          Our Classes
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl text-gray-700 mb-8"
          variants={itemVariants}
        >
          We offer specialized classes for Class 11 and 12 students in <strong>Physics</strong>, <strong>Chemistry</strong>, <strong>Maths</strong>, and <strong>Computer Science</strong>.
        </motion.p>

        {/* Classes Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
        >
          {[
            {
              subject: 'Physics',
              description:
                'Master the fundamentals of Physics with our expert faculty. We cover topics like Mechanics, Thermodynamics, Electromagnetism, and more.',
              image: 'https://via.placeholder.com/400x200?text=Physics',
            },
            {
              subject: 'Chemistry',
              description:
                'Understand the principles of Chemistry, including Organic, Inorganic, and Physical Chemistry, with hands-on experiments and detailed explanations.',
              image: 'https://via.placeholder.com/400x200?text=Chemistry',
            },
            {
              subject: 'Maths',
              description:
                'Build a strong foundation in Mathematics with topics like Algebra, Calculus, Trigonometry, and Probability, taught by experienced educators.',
              image: 'https://via.placeholder.com/400x200?text=Maths',
            },
            {
              subject: 'Computer Science',
              description:
                'Learn programming, data structures, algorithms, and more with our comprehensive Computer Science curriculum designed for Class 11 and 12 students.',
              image: 'https://via.placeholder.com/400x200?text=Computer+Science',
            },
          ].map((cls, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={cls.image}
                alt={cls.subject}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                {cls.subject}
              </h3>
              <p className="text-gray-600">{cls.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div variants={itemVariants}>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Enroll Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Classes;