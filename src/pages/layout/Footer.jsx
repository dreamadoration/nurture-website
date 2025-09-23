import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function Footer() {
  const [newYear, setNewYear] = useState("");

  useEffect(() => {
    const getYear = new Date().getFullYear();
    setNewYear(getYear)
  }, []);

  return (
    <footer className="bg-white text-gray-700 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand + About */}
          <div>
            <h3 className="text-3xl font-heebo font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-4">
              Nurture
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-sm font-rubik">
              Empowering healthcare professionals with innovative pharmaceutical solutions and expert training
              programs. Your trusted partner in advancing healthcare excellence and patient outcomes.
            </p>
            <div className="flex gap-4">
              {[{ icon: Facebook, link: "#" }, { icon: Instagram, link: "#" }, { icon: Linkedin, link: "#" }].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="bg-blue-100 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-900 font-heebo">Quick Links</h4>
            <ul className="space-y-3 text-gray-600 font-rubik">
              {[
                { name: "Home", link: "/" },
                { name: "Packages", link: "/#packages" },
                { name: "Contact", link: "/contact" },
                { name: "About us", link: "/about" },
                { name: "Our Team", link: "/team" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="hover:text-cyan-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Programs / Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-900 font-heebo">Programs</h4>
            <ul className="space-y-3 text-gray-600 font-rubik">
              {[
                { name: "Mode of Training", link: "/training" },
                { name: "Services", link: "/#services" },
                { name: "Nurture for Business", link: "/nurture" },
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="hover:text-cyan-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heebo font-bold mb-6 text-blue-900">Contact Info</h4>
            <div className="space-y-4 font-rubik text-gray-600">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-full text-white mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>123 Medical Center Dr, Healthcare City, HC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-full text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@nurture.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-full text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t font-rubik border-gray-200 mt-6 pt-4 text-center text-gray-500 text-sm">
          <p className="text-gray-500">
            &copy; {newYear} Nurture. All rights reserved. | Designed & Developed by{" "}
            <a 
              href="https://www.dreamadoration.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              Dream Adoration
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
