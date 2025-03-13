import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Reusable components
const Button = ({ primary, children, to }) => (
  <Link to={to}>
    <button className={`${primary ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border border-blue-600 text-blue-600 hover:bg-blue-50'} px-6 py-3 rounded-full flex items-center`}>
      {children}
    </button>
  </Link>
);

const StarRating = () => (
  <div className="mb-4 text-yellow-400 flex">
    {[...Array(5)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, year, quote, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-lg shadow-md"
  >
    <div className="flex items-center mb-6">
      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
        <p className="text-gray-600">Patient since {year}</p>
      </div>
    </div>
    <StarRating />
    <p className="text-gray-700 italic">{quote}</p>
  </motion.div>
);

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      year: "2020",
      quote: "\"I've always been anxious about dental visits, but the team at New Hope Dental completely changed that for me. Dr. Miller was patient, gentle, and thoroughly explained everything. The office is modern and comfortable, and the staff is incredibly friendly. I actually look forward to my appointments now!\"",
      delay: 0.2
    },
    {
      name: "Michael Rodriguez",
      year: "2022",
      quote: "\"New Hope Dental has been amazing for my family. The office is kid-friendly, and Dr. Miller is fantastic with children. My son used to be terrified of dental visits, but now he actually looks forward to them! The entire staff is professional and caring, and they make dental health education fun.\"",
      delay: 0.4
    },
    {
      name: "Emily Nguyen",
      year: "2025",
      quote: "\"After putting off dental work for years due to fear, I finally came to New Hope Dental. They worked with me at my pace and now my smile looks amazing. So grateful I found them!\"",
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Patients' Stories</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover what our patients are saying about their experiences at New Hope Dental. 
            We take pride in providing exceptional care that makes a difference.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button primary to="/appointment">Book Appointment</Button>
            <Button to="/services">Our Services</Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-8 md:mb-10 mt-10"
        >
          <img 
            src="/Smiling-patient.jpg"
            alt="Happy patients at New Hope Dental" 
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">What Our Patients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                year={testimonial.year}
                quote={testimonial.quote}
                delay={testimonial.delay}
              />
            ))}
          </div>
          
          <div className="flex justify-center items-center p-20">
            <Button primary to="/appointment">Experience Our Care</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;