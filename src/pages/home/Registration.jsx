import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Registration() {
  return (
    <section
      id="registration"
      className="relative w-full bg-blue-900 text-white"
    >
      <div className="relative w-full px-6 py-20 lg:px-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* LEFT: Heading + Subheading */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-5xl font-heebo font-extrabold mb-6 leading-snug">
            Transform Pharma Training
            <span className="block text-blue-300 font-rubik">Empower Your Workforce</span>
          </h2>
          <p className="text-lg leading-relaxed font-rubik text-blue-100">
            Drive compliance, modernize learning, and stay competitive in the pharmaceutical industry.
            <span className="block mt-4 text-blue-300 font-bold text-2xl">
              Register for a FREE Demo
            </span>
          </p>
        </div>

        {/* RIGHT: Registration Form with themed overlay */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://industrie.rstheme.com/html/assets/images/bg/contact-bg-03.png')",
              }}
            />
            <div className="absolute inset-0 bg-blue-900/70" /> {/* Blue overlay for theme consistency */}

            {/* Form Content */}
            <div className="relative z-10 p-8">
              <h3 className="text-3xl font-bold mb-6 font-heebo text-center text-white">
                Start Your Journey
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 
                </div>
                 <InputField placeholder="Name" />
                  <InputField placeholder="Email Address" type="email" />
                
                <InputField placeholder="Phone Number" type="tel" />
                <InputField placeholder="Company Name" />

                <select
                  className="w-full bg-transparent border-b border-blue-300 text-white py-2 focus:ring-0 focus:border-blue-400 transition-colors duration-200"
                >
                  <option value="" className="bg-blue-800 text-white">Select a package</option>
                  <option value="demo" className="bg-blue-800 text-white">Demo Package</option>
                  <option value="basic" className="bg-blue-800 text-white">Basic Package</option>
                  <option value="intermediate" className="bg-blue-800 text-white">Intermediate Package</option>
                  <option value="advance" className="bg-blue-800 text-white">Advance Package</option>
                  <option value="custom" className="bg-blue-800 text-white">Customized Training</option>
                </select>

                <Button
                  className="bg-gradient-to-r font-rubik from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500
                             text-white font-semibold text-lg py-6 px-10 rounded-xl shadow-lg 
                             hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* InputField Component – White placeholders + theme borders */
function InputField({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-blue-300 text-white py-2 
      placeholder-white focus:outline-none focus:border-blue-400 
      transition-colors duration-200"
    />
  );
}
