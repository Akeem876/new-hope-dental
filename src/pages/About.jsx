import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const teamMembers = [
    {
      name: "Dr. McCreary-Roberts",
      title: "Lead Dentist",
      bio: "With over 15 years of experience, Dr. McCreary-Roberts specializes in cosmetic and restorative dentistry.",
      image: "/Dr-Rob.jpg"
    },
    {
      name: "Dr. Kenneth Peart",
      title: "Dentist",
      bio: "Expert in advanced orthodontic treatments and patient comfort.",
      image: "/Dr-Kenny.jpg"
    },
    {
      name: "Dr. Kandice Ambersley",
      title: "Dentist",
      bio: "Passionate about creating positive dental experiences for children.",
      image: "/Dr-Kandice.jpg"
    },
    {
      name: "Dr. Ashley Brown",
      title: "Dentist",
      bio: "Passionate about creating positive dental experiences for children.",
      image: "/Dr-Ashley.jpg"
    }
  ];

  return (
    <div className="bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            New Hope Dental is committed to providing exceptional, compassionate 
            dental care that empowers our patients to achieve optimal oral health 
            and beautiful smiles in a welcoming, state-of-the-art environment.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-blue-600 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Patient-Centered Care</h3>
            <p className="text-gray-600">
              We prioritize your comfort, listen to your concerns, and tailor our 
              approach to your unique dental needs.
            </p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-blue-600 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-600">
              Continuous learning and cutting-edge techniques ensure the highest 
              quality dental treatments.
            </p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-blue-600 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Compassion</h3>
            <p className="text-gray-600">
              We approach every patient with empathy, understanding, and genuine care.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8 m-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                  style={member.name.includes("Kenneth Peart") ? 
                    { objectPosition: '50% 5%' } : // Lower position for Dr. Peart
                    { objectPosition: '50% 20%' }   // Default position for others
                  }
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{member.title}</p>
                  <p className="text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;