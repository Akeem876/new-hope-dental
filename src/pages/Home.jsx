import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full px-8 py-16 flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Smile with Confidence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            At New Hope Dental, we provide compassionate, high-quality dental care 
            to help you achieve and maintain a healthy, beautiful smile for your entire family.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link to="/appointment">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center">
                Book Appointment
              </button>
            </Link>
            <Link to="/services">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full flex items-center">
                Our Services
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <img 
            src="/Smiling-patient-2.jpg"
            alt="Smiling patient at New Hope Dental" 
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(876) 946-1437</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>115 Hope Road, Unit 16, Liguanea Post Mall, Liguanea</span>
            </div>
            {/* <div className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mon-Fri: 8am-6pm | Sat: 9am-2pm</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Why Choose New Hope Dental</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Advanced Care</h3>
              <p className="text-gray-600">
                State-of-the-art dental technology and techniques to ensure the highest quality treatment with minimal discomfort.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Comfort First</h3>
              <p className="text-gray-600">
                Gentle, patient-centered approach to dental care with amenities designed to make your visit as comfortable as possible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Convenient appointment times including early mornings, evenings, and weekends to fit your busy life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of dental services to meet all your oral health needs in one convenient location.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Preventive Dentistry",
              description: "Regular cleanings, exams, and education to keep your smile healthy.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Cosmetic Dentistry",
              description: "Teeth whitening, veneers, and other treatments to enhance your smile.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              )
            },
            {
              title: "Restorative Dentistry",
              description: "Fillings, crowns, bridges, and implants to repair damaged teeth.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )
            },
            {
              title: "Pediatric Dentistry",
              description: "Child-friendly care to establish good oral health habits early.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            },
            {
              title: "Teeth Whitening",
              description: "A cosmetic dental procedure that uses peroxide-based bleaching agents towhiten teeth and remove stains for a brighter smile..",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              )
            },
            {
              title: "Emergency Care",
              description: "Same-day appointments for dental emergencies and pain relief.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
              {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <Link to={`/services`} className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/services">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              View All Services
            </button>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">What Our Patients Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied patients about their experiences at New Hope Dental.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                quote: "The team at New Hope Dental made my dental anxiety disappear. Dr. Chen is so gentle and patient, explaining everything before he does it. Best dental experience I've ever had!",
                rating: 5
              },
              {
                name: "Michael Rodriguez",
                quote: "I've been bringing my whole family here for years. The staff is amazing with my kids, and they actually look forward to their dental visits now. The office is modern and comfortable too.",
                rating: 5
              },
              {
                name: "Emily Nguyen",
                quote: "After putting off dental work for years due to fear, I finally came to New Hope Dental. They worked with me at my pace and now my smile looks amazing. So grateful I found them!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-blue-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/testimonials">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full">
                Read More Testimonials
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Insurance and Payment Section */}
      {/* <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Insurance & Payment Options</h2>
            <p className="text-gray-600 mb-6">
              We work with most major insurance providers and offer flexible payment options to make quality dental care accessible for everyone.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                In-network with most PPO plans
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Interest-free payment plans
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                CareCredit accepted
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Special discount programs for families
              </li>
            </ul>
            <Link to="/insurance">
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center">
                Learn More About Insurance
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {['Delta Dental', 'Cigna', 'Aetna', 'MetLife', 'Guardian', 'United'].map((provider, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                <span className="font-medium text-gray-600">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      
      {/* Meet Our Team Preview */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our experienced team of dental professionals is committed to providing you with the highest quality care in a comfortable environment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 justify-between">
            {[
              {
                name: "Dr. McCreary-Roberts",
                role: "Lead Dentist",
                image: "/Dr-Rob.jpg",
                description: "With over 15 years of experience, Dr. McCreary-Roberts specializes in cosmetic and restorative dentistry."
              },
              {
                name: "Dr. Kenneth Peart",
                role: "Dentist",
                image: "/Dr-Kenny.jpg",
                description: "Expert in advanced orthodontic treatments and patient comfort."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder-profile.jpg";
                    }}
                    style={member.name.includes("Kenneth Peart") ? 
                      { objectPosition: '50% 5%' } : // Lower position for Dr. Peart
                      { objectPosition: '50% 20%' }   // Default position for others
                    }
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/about">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full">
                Meet Our Full Team
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Healthier Smile?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            New patients are always welcome! Schedule your appointment today and experience the New Hope Dental difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/appointment">
              <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                Book Appointment
              </button>
            </Link>
            <a href="tel:5551234567">
              <button className="bg-white border border-white text-blue-800 hover:bg-blue-200 px-8 py-3 rounded-full font-medium">
                Call (555) 123-4567
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;