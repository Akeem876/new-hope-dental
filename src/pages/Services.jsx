import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Services() {
  return (
    <div className="bg-white">
      {/* Header Section - Added more vertical padding */}
      <div className="bg-blue-50 py-20">
        <div className="w-full px-6 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-800 mb-6"
          >
            Our Dental Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We offer comprehensive dental care for your entire family, with
            services tailored to meet your unique needs.
          </motion.p>
        </div>
      </div>

      {/* Services List - Updated to match Home.jsx */}
      <div className="py-16 w-full px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Preventive Dentistry",
              description: "Regular cleanings, exams, and education to keep your smile healthy.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              link: "/services/preventive-dentistry"
            },
            {
              title: "Cosmetic Dentistry",
              description: "Enhance your smile with teeth whitening, veneers, bonding, and other cosmetic procedures.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              ),
              link: "/services/cosmetic-dentistry"
            },
            {
              title: "Restorative Dentistry",
              description: "Repair damaged teeth with fillings, crowns, bridges, and implants to restore functionality and aesthetics.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              link: "/services/restorative-dentistry"
            },
            {
              title: "Pediatric Dentistry",
              description: "Child-friendly care to establish good oral health habits early.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
              link: "/services/pediatric-dentistry"
            },
            {
              title: "Teeth Whitening",
              description: "A cosmetic dental procedure that uses peroxide-based bleaching agents to whiten teeth and remove stains for a brighter smile.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              ),
              link: "/services/orthodontics"
            },
            {
              title: "Emergency Care",
              description: "Prompt attention for dental emergencies such as toothaches, broken teeth, or other urgent dental issues.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              ),
              link: "/services/emergency-care"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
              {/* <Link to={service.link} className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-action Section - Improved padding */}
      <div className="bg-blue-600 py-16">
        <div className="w-full px-6 sm:px-8 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Ready to Schedule Your Visit?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/appointment">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold">
                Book Your Appointment Today
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;