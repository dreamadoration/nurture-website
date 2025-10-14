import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link

export default function Footer() {
  const [newYear, setNewYear] = useState("");

   const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Packages", link: "packages" }, // Section on Home page
    { name: "Contact", link: "/contact" },
    { name: "About us", link: "/about" },
    { name: "Our Team", link: "/team" },
  ];

  const programLinks = [
                { name: "Mode of Training", link: "/training" },
                { name: "Services", link: "services" },
                { name: "Nurture for Business", link: "/nurture" },
   ];

  useEffect(() => {
    const getYear = new Date().getFullYear();
    setNewYear(getYear)
  }, []);

  return (
    <footer className="bg-white text-gray-700 pt-10 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand + About */}
          <div>
            <h3 className="text-3xl font-heebo font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-4">
              Nurture
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-sm font-rubik">
              Empower your team to drive your business forward. Build essential skills across your teams and boost impact and agility with technology, data, and leadership. Save time and training costs with content customized according to your needs.
            </p>
            <div className="flex gap-4">
              {[{ icon: Facebook, link: "#" }, { icon: Instagram, link: "https://www.instagram.com/nurtureorg07?igsh=MWVmazV1eHVyNjVycg==" }, { icon: Linkedin, link: "https://www.linkedin.com/in/nurture-training-solutions-7b940a38a" }, {icon: Youtube, link: "https://www.youtube.com/@NurtureTrainingSolutions"}].map((item, index) => (
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
          <h4 className="text-lg font-bold mb-6 text-blue-900 font-heebo">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-600 font-rubik">
            {quickLinks.map((item, index) => (
              <li key={index}>
                {item.link.startsWith("/") ? (
                  <Link
                    to={item.link}
                    className="hover:text-cyan-500 transition-colors"
                    onClick={() => {
                      if (item.link === "/") window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className="hover:text-cyan-500 transition-colors cursor-pointer"
                    onClick={() => scrollToSection(item.link)}
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
          
          {/* Programs / Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-900 font-heebo">Programs</h4>
            <ul className="space-y-3 text-gray-600 font-rubik">
            {programLinks.map((item, index) => (
              <li key={index}>
                {item.link.startsWith("/") ? (
                  <Link
                    to={item.link}
                    className="hover:text-cyan-500 transition-colors"
                    onClick={() => {
                      if (item.link === "/") window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className="hover:text-cyan-500 transition-colors cursor-pointer"
                    onClick={() => scrollToSection(item.link)}
                  >
                    {item.name}
                  </button>
                )}
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
                <span> 701 ARS SIGNATURE HOMES SARJAPUR
BENGALURU- 562125</span>
              </div>
              <div >
                <a href='mailto:support@nurtureorg.com'>
                    <div className='flex items-center gap-3'>
                <div className="bg-blue-600 p-2 rounded-full text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <span>support@nurtureorg.com</span>
                </div>
                </a>
              </div>
              <div className="">
                  <a href='tel:9711303396'>
                    <div className='flex items-center gap-3'>
                <div className="bg-blue-600 p-2 rounded-full text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <span>9711303396</span>
                </div>
                </a>
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
