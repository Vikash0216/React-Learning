import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
          About Concept Coaching Classes
        </motion.h1>

        {/* Mission Statement */}
        <motion.p
          className="text-xl text-gray-700 mb-8"
          variants={itemVariants}
        >
          At <strong>Concept Coaching Classes</strong>, our mission is to provide high-quality education to Class 11 and 12 students, helping them build a strong foundation in <strong>Physics</strong>, <strong>Chemistry</strong>, <strong>Maths</strong>, and <strong>Computer Science</strong>.
        </motion.p>

        {/* Key Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
        >
          {[
            {
              title: 'Experienced Faculty',
              description:
                'Our team of experienced teachers is dedicated to helping students understand complex concepts with ease.',
            },
            {
              title: 'Personalized Attention',
              description:
                'We provide personalized attention to each student, ensuring they get the support they need to excel.',
            },
            {
              title: 'Comprehensive Curriculum',
              description:
                'Our curriculum is designed to cover all topics in-depth, preparing students for both board exams and competitive exams.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div variants={itemVariants}>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;