import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Appointment from './pages/Appointment';

function App() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-500">
              New Hope Dental
            </Link>

            {/* Mobile menu button */}
            <div className="block lg:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
                onClick={toggleMenu}
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow flex items-center space-x-6">
                <Link
                  to="/"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  Services
                </Link>
                <Link
                  to="/testimonials"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  Testimonials
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  Contact
                </Link>
                <Link
                  to="/appointment"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
            <div className="px-4 py-2 space-y-3">
              <Link
                to="/"
                className="block text-gray-800 hover:text-blue-600 transition py-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-800 hover:text-blue-600 transition py-2"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-gray-800 hover:text-blue-600 transition py-2"
              >
                Services
              </Link>
              <Link
                to="/testimonials"
                className="block text-gray-800 hover:text-blue-600 transition py-2"
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className="block text-gray-800 hover:text-blue-600 transition py-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </header>

        {/* Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-50 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} New Hope Dental. All Rights Reserved.
            </p>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;