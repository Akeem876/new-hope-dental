import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Appointment() {
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
            Schedule Your Visit
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We make it easy to book your dental appointment. Choose a time that
            works for you and take the first step toward your perfect smile.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button
              onClick={() => {
                document
                  .querySelector("#appointment-form-section")
                  .scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center"
            >
              Online Booking
            </button>
            <a href="tel:+1 (876) 946-1437">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full flex items-center">
                Call Us
              </button>
            </a>
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
            src="/Schedule-Appointment.jpg"
            alt="Scheduling an appointment at New Hope Dental"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Appointment Form Section */}
      <div id="appointment-form-section" className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
              Request an Appointment
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="appointmentDate"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="appointmentTime"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Preferred Time
                </label>
                <select
                  id="appointmentTime"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (1pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 7pm)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Reason for Visit
                </label>
                <textarea
                  id="reason"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Please briefly describe your dental needs"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newPatient"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="newPatient"
                  className="ml-2 block text-gray-700"
                >
                  I am a new patient
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-600 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Call Us</h3>
            <p className="text-gray-600">1 (876) 946-1437</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-600 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Email Us</h3>
            <p className="text-gray-600">newhopedentalja@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-600 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
            <p className="text-gray-600">
              115 Hope Road, Unit 16, <br />
              Liguanea Post Mall, <br />
              Kingston, Jamaica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;